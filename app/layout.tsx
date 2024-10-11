import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "membership",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-120">
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}
