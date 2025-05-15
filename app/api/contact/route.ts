import { NextResponse } from "next/server"
import { Resend } from "resend"
import { ContactEmailTemplate } from "@/components/email-template"

// Initialize Resend with API key
// In production, this would use the actual API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789")

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "New Sequence <contact@newsequence.com>",
      to: ["team@newsequence.com"], // This would be your actual team email
      subject: `New Contact Form Submission: ${service}`,
      react: ContactEmailTemplate({
        name,
        email,
        phone: phone || "Not provided",
        service,
        message,
      }),
      // Add CC to the customer for confirmation
      cc: [email],
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
