import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Livexcellence – Buy Property Across India | Verified Real Estate Projects & Listings",
  description: "Livexcellence is your trusted real estate partner across India, offering verified residential and commercial properties in top cities. Discover luxury apartments, plots, and new project launches from leading developers—all in one place.",
  keywords: "Livexcellence, real estate India, property for sale, buy apartment India, flats for sale, residential projects India, real estate platform, plots in India, new project launches, luxury apartments India, property listings, property investment India",
  alternates: {
    canonical: 'https://www.livexcellence.in/',
  },
  other: {
    "google-site-verification": "x8hC-JPBXHCYvTOSCftj2yC1XoM1oh9dTKzfE33SCkM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
        <Header/>
        {children}
        </ReduxProvider>
        <Footer/>
      </body>
    </html>
  );
}
