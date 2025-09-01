import type { Metadata } from "next";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import "./globals.css";

export const metadata: Metadata = {
  title: "MemePulse",
  description: "Casual, community-driven memecoin landing with clear sections and CTA."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}