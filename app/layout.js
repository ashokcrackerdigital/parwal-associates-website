import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DisclaimerGate from "../components/DisclaimerGate";
import Footer from "../components/Footer";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Parwal & Associates",
    template: "%s | Parwal & Associates",
  },
  description:
    "Chartered Accountancy firm — audit, taxation, corporate advisory, and related professional services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <DisclaimerGate />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
