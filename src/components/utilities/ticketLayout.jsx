import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 5,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});




function TicketLayout({ data }) {
    
    return (
        <Document>
            <Page size="A4" style={styles.page}>
            <Text style={styles.header}>Therapist Appointment Ticket</Text>
            
            <View style={styles.section}>
                <Text style={styles.text}>
                <Text style={styles.label}>Client Name: </Text>{data.name}
                </Text>
                <Text style={styles.text}>
                <Text style={styles.label}>Appointment Date: </Text>{data.appointmentDate}
                </Text>
                <Text style={styles.text}>
                <Text style={styles.label}>Appointment Time: </Text>{data.time}
                </Text>
                <Text style={styles.text}>
                <Text style={styles.label}>Session Link: </Text>{data.sessionLink}
                </Text>
                <Text style={styles.text}>
                <Text style={styles.label}>Google Meet ID: </Text>{data.sessionId}
                </Text>
                <Text style={styles.text}>
                <Text style={styles.label}>Contact Number: </Text>+1 (718) 252-9311
                </Text>
            </View>

            <View style={styles.section}>
                <Text>This ticket contains the details of your scheduled therapy session. The link and ID to the virtual space is provided.</Text>
                <Text>If you need to cancel or reschedule, contact us at least 24 hours in advance.</Text>
                <Text>Thank you!</Text>
            </View>

            <Text style={styles.footer}>The Terapeuta Team</Text>
            </Page>
        </Document>
)
};

export default TicketLayout;
