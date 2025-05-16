import type React from "react";
import { Section, Text, Button, Hr } from "@react-email/components";
import { BaseEmailTemplate } from "@/emails/template";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  isClientCopy?: boolean;
}

export const ContactEmailTemplate: React.FC<ContactEmailProps> = ({
  name,
  email,
  phone,
  service,
  message,
  isClientCopy = false,
}) => {
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
      previewText={
        isClientCopy
          ? "Thank you for contacting New Sequence"
          : `New contact form submission from ${name}`
      }
      heading={
        isClientCopy
          ? "Thank You for Contacting Us"
          : "New Contact Form Submission"
      }
    >
      {isClientCopy ? (
        // Client copy version
        <>
          <Text style={styles.text}>Hi {name},</Text>
          <Text style={styles.text}>
            Thank you for reaching out to New Sequence. We've received your
            inquiry about our {serviceDisplay.toLowerCase()} services.
          </Text>
          <Text style={styles.text}>
            Our team will review your message and get back to you as soon as
            possible, usually within 1-2 business days.
          </Text>
          <Text style={styles.text}>
            Here's a summary of the information you provided:
          </Text>

          <Section style={styles.detailsSection}>
            <Text style={styles.detailRow}>
              <strong>Service Requested:</strong> {serviceDisplay}
            </Text>
            <Text style={styles.detailRow}>
              <strong>Message:</strong>
            </Text>
            <Text style={styles.messageText}>{message}</Text>
          </Section>

          <Text style={styles.text}>
            If you need immediate assistance, please don't hesitate to call 
            at +31 6 19826246.
          </Text>

          <Section style={styles.buttonContainer}>
            <Button
              href="https://newsequence.com/gallery"
              style={styles.button}
            >
              View Our Portfolio
            </Button>
          </Section>
        </>
      ) : (
        // Team copy version
        <>
          <Text style={styles.text}>
            You have received a new message from your website contact form.
          </Text>

          <Section style={styles.detailsSection}>
            <Text style={styles.sectionHeader}>Contact Details:</Text>
            <Text style={styles.detailRow}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={styles.detailRow}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={styles.detailRow}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={styles.detailRow}>
              <strong>Service Interested In:</strong> {serviceDisplay}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailsSection}>
            <Text style={styles.sectionHeader}>Message:</Text>
            <Text style={styles.messageText}>{message}</Text>
          </Section>

          <Section style={styles.buttonContainer}>
            <Button href={`mailto:${email}`} style={styles.button}>
              Reply to {name}
            </Button>
          </Section>
        </>
      )}
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
};
