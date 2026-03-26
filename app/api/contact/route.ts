import { NextResponse } from "next/server";

// POST /api/contact
// Receives booking form submissions and logs them.
// TODO: Replace console.log with a real email service (Resend, SendGrid, Nodemailer, etc.)

interface ContactPayload {
  name: string;
  email: string;
  date: string;
  groupSize: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Server-side validation — never trust client-only validation
    if (!body.name?.trim() || !body.email?.trim() || !body.date?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and date are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Send notification email here ──────────────────────────────
    // Example with Resend:
    //   await resend.emails.send({
    //     from: 'noreply@capturemoments.com',
    //     to: 'hello@capturemoments.com',
    //     subject: `New booking request from ${body.name}`,
    //     text: JSON.stringify(body, null, 2),
    //   });
    // ─────────────────────────────────────────────────────────────

    console.log("📸 New booking request:", {
      name: body.name,
      email: body.email,
      date: body.date,
      groupSize: body.groupSize,
      message: body.message ?? "",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
