import type { Metadata } from "next";
import "./layout.css";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800',],
  subsets: ['latin'],
})

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
      <body className={archivo.className}>
        {children}
      </body>
    </html>
  );
}
