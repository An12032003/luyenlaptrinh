import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, message } = await request.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "dakkenbro003@gmail.com", // ← email của bạn, người ngoài không nhìn thấy được vì nằm trong code server
      subject: `Liên hệ mới từ ${name}`,
      html: `<p><b>Tên:</b> ${name}</p><p><b>Lời nhắn:</b> ${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}