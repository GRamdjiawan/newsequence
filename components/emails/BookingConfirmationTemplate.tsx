import type React from "react";
import { Section, Text, Button, Hr, Img } from "@react-email/components";
import { BaseEmailTemplate } from "@/emails/template";

interface BookingConfirmationProps {
  name: string;
  date: string;
  time: string;
  service: string;
  location: string;
  notes?: string;
}

export const BookingConfirmationTemplate: React.FC<
  BookingConfirmationProps
> = ({ name, date, time, service, location, notes }) => {
  // Map service values to readable names
  const serviceMap = {
    photography: "Photography",
    videography: "Videography",
    "3d-rendering": "3D Rendering",
    "full-package": "Full Package",
  };

  const serviceDisplay =
    serviceMap[service as keyof typeof serviceMap] || service;

  return (
    <BaseEmailTemplate
      previewText={`Your ${serviceDisplay} session is confirmed for ${date}`}
      heading="Your Booking is Confirmed"
    >
      <Text style={styles.text}>Hi {name},</Text>
      <Text style={styles.text}>
        Thank you for booking a {serviceDisplay.toLowerCase()} session with New
        Sequence. Your appointment has been confirmed.
      </Text>

      <Section style={styles.detailsSection}>
        <Text style={styles.sectionHeader}>Appointment Details:</Text>
        <Text style={styles.detailRow}>
          <strong>Date:</strong> {date}
        </Text>
        <Text style={styles.detailRow}>
          <strong>Time:</strong> {time}
        </Text>
        <Text style={styles.detailRow}>
          <strong>Service:</strong> {serviceDisplay}
        </Text>
        <Text style={styles.detailRow}>
          <strong>Location:</strong> {location}
        </Text>
        {notes && (
          <>
            <Text style={styles.detailRow}>
              <strong>Additional Notes:</strong>
            </Text>
            <Text style={styles.messageText}>{notes}</Text>
          </>
        )}
      </Section>

      <Section style={styles.calendarSection}>
        <Img
          src="https://placeholder.com/calendar-icon.png" // Replace with actual calendar icon in production
          alt="Calendar"
          width="48"
          height="48"
          style={styles.calendarIcon}
        />
        <Text style={styles.calendarText}>
          We've added this appointment to your calendar. You should receive a
          calendar invitation shortly.
        </Text>
      </Section>

      <Hr style={styles.divider} />

      <Text style={styles.text}>
        <strong>What to expect next:</strong>
      </Text>
      <Text style={styles.text}>
        Our team will reach out 24-48 hours before your appointment to confirm
        details and answer any questions you might have.
      </Text>

      <Text style={styles.text}>
        Need to make changes to your booking? No problem! You can reschedule or
        cancel your appointment up to 48 hours in advance.
      </Text>

      <Section style={styles.buttonContainer}>
        <Button href="https://newsequence.com/contact" style={styles.button}>
          Manage Booking
        </Button>
      </Section>

      <Text style={styles.text}>We look forward to working with you!</Text>
      <Text style={styles.signature}>The New Sequence Team</Text>
    </BaseEmailTemplate>
  );
};

const styles = {
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#334155",
    margin: "0 0 16px",
  },
  detailsSection: {
    backgroundColor: "#f8fafc",
    padding: "16px",
    borderRadius: "4px",
    margin: "24px 0",
  },
  sectionHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0 0 16px",
    color: "#1e293b",
  },
  detailRow: {
    margin: "0 0 8px",
    fontSize: "15px",
    color: "#334155",
  },
  messageText: {
    whiteSpace: "pre-wrap",
    color: "#334155",
    fontSize: "15px",
    lineHeight: "22px",
  },
  divider: {
    borderColor: "#e2e8f0",
    margin: "24px 0",
  },
  buttonContainer: {
    textAlign: "center" as const,
    margin: "32px 0 16px",
  },
  button: {
    backgroundColor: "#3b82f6",
    borderRadius: "4px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 24px",
  },
  calendarSection: {
    textAlign: "center" as const,
    margin: "24px 0",
  },
  calendarIcon: {
    margin: "0 auto 12px",
  },
  calendarText: {
    fontSize: "14px",
    color: "#64748b",
    margin: "0",
  },
  signature: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#334155",
    margin: "24px 0 0",
  },
};
