import type { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
  title: "Ser um TI",
  description: "O que significa ser um ti?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
