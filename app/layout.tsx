import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moabdirahim Portfolio",
  description: "Moabdirahim Portfolio - Creative Developer Constructing Digital Experiences",
};

import SmoothScrolling from "@/components/SmoothScrolling";

const notoSans = Noto_Sans({variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={notoSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white selection:bg-white/20`}
      >
        <SmoothScrolling>
          <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
