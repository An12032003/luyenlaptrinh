import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import BackgroundMusic from "@/components/BackgroundMusic";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nguyễn Hồng Ân",
    template: "%s | Nguyễn Hồng Ân",
  },
  description: "Trang cá nhân của Nguyễn Hồng Ân — hành trình học tập, gia đình, ơn gọi và cộng đoàn SVCG Thánh Linh.",
  openGraph: {
    title: "Nguyễn Hồng Ân",
    description: "Trang cá nhân của Nguyễn Hồng Ân — hành trình học tập, gia đình, ơn gọi và cộng đoàn SVCG Thánh Linh.",
    images: ["/avtar.jpg"],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">  
        <ThemeProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <ScrollToTop />
          <BackgroundMusic />
        </ThemeProvider>
      </body>
    </html>
  );
}