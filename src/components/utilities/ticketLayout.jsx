import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 1.5,
    backgroundColor: '#f8f4f2',
  },
  headerBar: {
    backgroundColor: '#514990',
    padding: 12,
    borderRadius: 6,
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f8f4f2',
  },
  ticketBox: {
    border: '1pt solid #ddd',
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#f8f4f2',
    marginBottom: 20,
    boxShadow: '0 2pt 6pt rgba(0,0,0,0.1)',
  },
  row: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    color: '#555',
  },
  link: {
    color: '#514990',
    textDecoration: 'underline',
  },
  sectionNote: {
    marginTop: 10,
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#f4f8ff',
    fontSize: 11,
    color: '#333',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 11,
    fontStyle: 'italic',
    color: '#777',
  },
});

function TicketLayout({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerBar}>
          <Text style={styles.header}>Therapist Appointment Ticket</Text>
        </View>

        {/* Ticket Details */}
        <View style={styles.ticketBox}>
          <View style={styles.row}>
            <Text><Text style={styles.label}>Client Name: </Text><Text style={styles.text}>{data.name}</Text></Text>
          </View>
          <View style={styles.row}>
            <Text><Text style={styles.label}>Appointment ID: </Text><Text style={styles.text}>{data.id}</Text></Text>
          </View>
          <View style={styles.row}>
            <Text><Text style={styles.label}>Appointment Date: </Text><Text style={styles.text}>{data.appointmentDate}</Text></Text>
          </View>
          <View style={styles.row}>
            <Text><Text style={styles.label}>Appointment Time: </Text><Text style={styles.text}>{data.time}</Text></Text>
          </View>
          <View style={styles.row}>
            <Text><Text style={styles.label}>Session Link: </Text><Text style={styles.link}>{data.sessionLink}</Text></Text>
          </View>
          <View style={styles.row}>
            <Text><Text style={styles.label}>Google Meet ID: </Text><Text style={styles.text}>{data.sessionId}</Text></Text>
          </View>
          <View style={styles.row}>
            <Text><Text style={styles.label}>Contact Number: </Text><Text style={styles.text}>+1 (718) 252-9311</Text></Text>
          </View>
        </View>

        {/* Extra Note */}
        <View style={styles.sectionNote}>
          <Text>
            This appointment is virtual. The link and ID to the virtual space are included above.  
            If you need to cancel or reschedule, please contact us at least 24 hours in advance.
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>The Terapeuta Team</Text>
      </Page>
    </Document>
  );
}

export default TicketLayout;
