import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Vedansh Pachori — Senior DevOps Engineer | Available for Contracts",
  description:
    "Senior DevOps & Cloud Engineer with 8+ years of experience. Available for remote contracts in EU, US, and UAE. Expert in Kubernetes, AWS/Azure/GCP, DevSecOps, and CI/CD.",
  keywords: [
    "DevOps Engineer", "Kubernetes", "Cloud Architect", "AWS", "Azure", "GCP",
    "DevSecOps", "SRE", "Remote Contract", "Freelance DevOps", "Platform Engineer",
  ],
  authors: [{ name: "Vedansh Pachori", url: "https://www.iamvedansh.com" }],
  openGraph: {
    title: "Vedansh Pachori — Senior DevOps Engineer",
    description: "8+ years building secure, scalable cloud infrastructure. Available for contracts in EU · US · UAE.",
    url: "https://www.iamvedansh.com",
    siteName: "Vedansh Pachori",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedansh Pachori — Senior DevOps Engineer",
    description: "Available for remote DevOps contracts · EU · US · UAE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
