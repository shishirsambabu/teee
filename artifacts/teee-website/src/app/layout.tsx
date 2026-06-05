import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CustomCursor } from "../components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://teee.in"),
  title: "TEEE — The Employee Experience Experiment",
  description:
    "TEEE helps HR leaders map, diagnose, and improve how it actually feels to work in their organization — using a rigorous, science-led method.",
  openGraph: {
    title: "TEEE — The Employee Experience Experiment",
    description: "Employee experience, run like an experiment.",
    images: ["/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
