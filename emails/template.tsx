import type React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
} from "@react-email/components";

interface BaseEmailTemplateProps {
  previewText: string;
  heading: string;
  children: React.ReactNode;
}

export const BaseEmailTemplate: React.FC<BaseEmailTemplateProps> = ({
  previewText,
  heading,
  children,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={styles.body}>
        {/* Header */}
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Img
              src="https://placeholder.com/logo.png" // Replace with your actual logo URL in production
              alt="New Sequence"
              width="150"
              height="40"
              style={styles.logo}
            />
          </Section>

          {/* Main Content */}
          <Section style={styles.content}>
            <Heading style={styles.heading}>{heading}</Heading>
            {children}
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Hr style={styles.divider} />
            <Row>
              <Column>
                <Text style={styles.footerText}>
                  New Sequence | Professional Real Estate Media
                </Text>
                <Text style={styles.footerText}>
                  123 Photography Lane, New York, NY 10001
                </Text>
                <Text style={styles.footerText}>
                  <Link href="tel:+1234567890" style={styles.link}>
                    (123) 456-7890
                  </Link>{" "}
                  |
                  <Link href="mailto:info@newsequence.com" style={styles.link}>
                    {" "}
                    info@newsequence.com
                  </Link>
                </Text>
              </Column>
            </Row>

            {/* Social Links */}
            <Row>
              <Column style={styles.socialLinks}>
                <Link href="https://instagram.com" style={styles.socialLink}>
                  Instagram
                </Link>
                <Link href="https://facebook.com" style={styles.socialLink}>
                  Facebook
                </Link>
                <Link href="https://linkedin.com" style={styles.socialLink}>
                  LinkedIn
                </Link>
              </Column>
            </Row>

            <Text style={styles.copyright}>
              © {currentYear} New Sequence. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#f8fafc",
    padding: "20px 0",
    textAlign: "center" as const,
    borderBottom: "1px solid #e2e8f0",
  },
  logo: {
    margin: "0 auto",
  },
  content: {
    padding: "40px 20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1e293b",
    margin: "0 0 24px",
  },
  footer: {
    backgroundColor: "#f8fafc",
    padding: "20px",
    borderTop: "1px solid #e2e8f0",
  },
  footerText: {
    fontSize: "14px",
    color: "#64748b",
    margin: "0 0 8px",
    textAlign: "center" as const,
  },
  divider: {
    borderColor: "#e2e8f0",
    margin: "0 0 20px",
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
  },
  socialLinks: {
    textAlign: "center" as const,
    margin: "16px 0",
  },
  socialLink: {
    color: "#3b82f6",
    textDecoration: "none",
    margin: "0 8px",
    fontSize: "14px",
  },
  copyright: {
    fontSize: "12px",
    color: "#94a3b8",
    textAlign: "center" as const,
    margin: "16px 0 0",
  },
};
