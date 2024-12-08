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
                <Text style={styles.label}>Location: </Text>123 Main Street, Suite 456, Cityville
                </Text>
                <Text style={styles.text}>
                <Text style={styles.label}>Contact Number: </Text>+(1) 023 456 789
                </Text>
            </View>

            <View style={styles.section}>
                <Text>Please arrive 10 minutes prior to your scheduled appointment time.</Text>
                <Text>If you need to cancel or reschedule, contact us at least 24 hours in advance.</Text>
                <Text>Thank you!</Text>
            </View>

            <Text style={styles.footer}>The Terapeuta Team</Text>
            </Page>
        </Document>
)
};

export default TicketLayout;
