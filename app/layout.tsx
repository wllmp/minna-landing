import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minna — Long-term Memory for AI Agents",
  description: "The local-first context engine that gives AI agents persistent memory. Index your digital footprint, expose it via MCP, and never start from zero again.",
  keywords: ["AI", "context", "memory", "MCP", "Model Context Protocol", "local-first", "privacy"],
  authors: [{ name: "Minna" }],
  openGraph: {
    title: "Minna — Long-term Memory for AI Agents",
    description: "The local-first context engine that gives AI agents persistent memory.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minna — Long-term Memory for AI Agents",
    description: "The local-first context engine that gives AI agents persistent memory.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
