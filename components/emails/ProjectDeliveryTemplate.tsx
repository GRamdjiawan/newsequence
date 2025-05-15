import type React from "react";
import { Section, Text, Button, Hr, Img } from "@react-email/components";
import { BaseEmailTemplate } from "@/emails/template";

interface ProjectDeliveryProps {
  name: string;
  projectName: string;
  deliverables: string[];
  downloadLink: string;
  expiryDate: string;
}

export const ProjectDeliveryTemplate: React.FC<ProjectDeliveryProps> = ({
  name,
  projectName,
  deliverables,
  downloadLink,
  expiryDate,
}) => {
  return (
    <BaseEmailTemplate
      previewText={`Your ${projectName} project files are ready for download`}
      heading="Your Project Files Are Ready"
    >
      <Text style={styles.text}>Hi {name},</Text>
      <Text style={styles.text}>
        Great news! Your project files for <strong>{projectName}</strong> are
        now ready for download.
      </Text>

      <Section style={styles.detailsSection}>
        <Text style={styles.sectionHeader}>Project Deliverables:</Text>
        <ul style={styles.deliverablesList}>
          {deliverables.map((item, index) => (
            <li key={index} style={styles.deliverableItem}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section style={styles.downloadSection}>
        <Img
          src="https://placeholder.com/download-icon.png"
          alt="Download"
          width="48"
          height="48"
          style={styles.downloadIcon}
        />
        <Text style={styles.downloadText}>
          Your files will be available for download until{" "}
          <strong>{expiryDate}</strong>.
        </Text>
      </Section>

      <Section style={styles.buttonContainer}>
        <Button href={downloadLink} style={styles.button}>
          Download Files
        </Button>
      </Section>

      <Hr style={styles.divider} />

      <Text style={styles.text}>
        <strong>What's next?</strong>
      </Text>
      <Text style={styles.text}>
        Please review the files and let us know if you need any revisions or
        have any questions.
      </Text>
      <Text style={styles.text}>
        If you're happy with your project, we'd love to hear your feedback!
      </Text>

      <Section style={styles.reviewButtonContainer}>
        <Button
          href="https://newsequence.com/review"
          style={styles.reviewButton}
        >
          Leave a Review
        </Button>
      </Section>

      <Text style={styles.text}>
        Thank you for choosing New Sequence for your real estate media needs!
      </Text>
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
  deliverablesList: {
    margin: "0",
    paddingLeft: "20px",
  },
  deliverableItem: {
    fontSize: "15px",
    color: "#334155",
    margin: "0 0 8px",
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
  downloadSection: {
    textAlign: "center" as const,
    margin: "24px 0",
  },
  downloadIcon: {
    margin: "0 auto 12px",
  },
  downloadText: {
    fontSize: "14px",
    color: "#64748b",
    margin: "0",
  },
  reviewButtonContainer: {
    textAlign: "center" as const,
    margin: "24px 0",
  },
  reviewButton: {
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    color: "#3b82f6",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "10px 20px",
    border: "2px solid #3b82f6",
  },
  signature: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#334155",
    margin: "24px 0 0",
  },
};
