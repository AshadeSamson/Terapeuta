

const functions = require("firebase-functions");
const { google } = require("googleapis");
const serviceAccount = require("../calendar-service-api.json");

const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];

const auth = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    SCOPES
);

const calendar = google.calendar({ version: "v3", auth });

exports.createGoogleMeetLink = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "unauthenticated",
            "User must be authenticated."
        );
    }

    const event = {
        summary: data.summary || "New Event",
        description: data.description || "Generated by Firebase",
        start: { dateTime: data.startDateTime, timeZone: data.timeZone },
        end: { dateTime: data.endDateTime, timeZone: data.timeZone },
        conferenceData: {
            createRequest: {
                requestId: "random-string", // Unique identifier
                conferenceSolutionKey: { type: "hangoutsMeet" },
            },
        },
    };

    try {
        const response = await calendar.events.insert({
            calendarId: "primary",
            resource: event,
            conferenceDataVersion: 1,
        });

        return { meetLink: response.data.hangoutLink };
    } catch (error) {
        throw new functions.https.HttpsError(
            "internal",
            "Error creating Google Meet link",
            error.message
        );
    }
});
