import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";

// Add Figtree font with all needed weights
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Light, Regular, Medium, Semibold, Bold
  display: "swap",
});

// Quiche Display
const quicheDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/Quiche_Display_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Quiche_Display_Medium.otf',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: "--font-quiche-display",
  display: "swap",
});

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
        className={`${figtree.variable} ${quicheDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
