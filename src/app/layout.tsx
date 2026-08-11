import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Kumawat | Data Analyst Portfolio",
  description:
    "Dynamic portfolio of Aryan Kumawat — Data Analyst specializing in Python, SQL/BigQuery, Tableau, and Power BI. Discover retail performance dashboards, banking customer churn analytics, and end-to-end data pipelines.",
  keywords: [
    "Aryan Kumawat",
    "Data Analyst Portfolio",
    "Python Data Analytics",
    "SQL BigQuery Analyst",
    "Tableau Executive Dashboards",
    "Power BI Reports",
    "Customer Churn Analysis",
    "Google Data Analytics Certified"
  ],
  authors: [{ name: "Aryan Kumawat" }],
  openGraph: {
    title: "Aryan Kumawat | Data Analyst Portfolio",
    description:
      "Explore retail performance dashboards, banking customer churn analysis, and end-to-end analytics pipelines.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 antialiased selection:bg-cyan-500 selection:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
