import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// import { Metadata } from "next";

export const metadata = {
  title: {
    template: "%s | Tuition By Flutterwave",
    default: "Tuition By Flutterwave",
  },
  description: "Tuition By Flutter Project.",
  // metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
