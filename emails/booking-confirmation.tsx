import { BookingConfirmationTemplate } from "@/components/emails/BookingConfirmationTemplate";

export default function Email() {
  return (
    <BookingConfirmationTemplate
      name="Alex Johnson"
      date="June 5, 2025"
      time="2:00 PM"
      service="videography"
      location="123 Main St, San Diego, CA"
      notes="Please arrive 10 minutes early and bring your storyboard notes."
    />
  );
}
