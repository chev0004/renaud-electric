import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Renaud Electric LLC | Licensed Electrician | O'Fallon, MO",
  description:
    "Fully licensed and insured electrical services by Drew Renaud. Serving O'Fallon, Lake Saint Louis, Wentzville, Wright City, Troy, Washington, and Chesterfield. Real estate repair addendums, residential electrical, and service upgrades. Preferred partner of Tech Inspect Home Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
