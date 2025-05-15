import { ContactEmailTemplate } from "@/components/emails/ContactEmailTemplate";

export default function Email() {
  return (
    <ContactEmailTemplate
      name="Jane Doe"
      email="jane@example.com"
      phone="+1 555 123 4567"
      service="photography"
      message="Hi, I'm interested in your photography services for an upcoming event."
      isClientCopy={true} // set to false to preview the team version
    />
  );
}
