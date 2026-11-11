import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chessplay",
  description: "Play chess 1v1, in rooms, or against the machine",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
