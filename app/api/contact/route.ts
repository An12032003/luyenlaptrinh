import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "email-that-cua-ban@gmail.com", // ← đổi thành email thật của bạn
      subject: `Liên hệ mới từ ${name}`,
      html: `<p><b>Tên:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Lời nhắn:</b> ${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}