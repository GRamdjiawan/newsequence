import { ProjectDeliveryTemplate } from "@/components/emails/ProjectDeliveryTemplate";

export default function Email() {
  return (
    <ProjectDeliveryTemplate
      name="Jane Doe"
      projectName="Modern Villa Showcase"
      deliverables={["Edited Photos", "Drone Footage", "Video Tour"]}
      downloadLink="https://newsequence.com/download/abc123"
      expiryDate="June 30, 2025"
    />
  );
}
