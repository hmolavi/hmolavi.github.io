import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hossein Molavi - Computer Engineering @ UWaterloo",
  description:
    "Portfolio of Hossein Molavi - Computer Engineering student at the University of Waterloo. Embedded systems, IoT, firmware development, and full-stack engineering.",
  metadataBase: new URL("https://hmolavi.com"),
  openGraph: {
    title: "Hossein Molavi - Computer Engineering @ UWaterloo",
    description:
      "Embedded systems, IoT, firmware development, and full-stack engineering.",
    url: "https://hmolavi.com",
    siteName: "Hossein Molavi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
