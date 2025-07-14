import { Geist, Geist_Mono } from "next/font/google";
import { Figtree } from "next/font/google";
import "../styles/globals.css";

// Existing Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Figtree font with all needed weights
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Light, Regular, Medium, Semibold, Bold
  display: "swap",
});

// Quiche Display

export const metadata = {
  title: "Maedric HomePage",
  description: "A homepage built on Next.js for Maedric",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
