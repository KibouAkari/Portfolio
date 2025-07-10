"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Profilbild oben links nur auf Unterseiten anzeigen */}
        {!isHome && (
          <div className="fixed top-6 left-6 z-50">
            <Link href="/">
              <motion.div
                layoutId="profile-pic"
                initial={false}
                animate={{
                  scale: 0.9, // Noch größer als vorher (fast 90% von Originalgröße)
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 1.8, // Etwas länger
                    ease: [0.42, 0, 0.58, 1], // Standard easeInOut cubic bezier (langsamer-start-schneller-langsam-ende)
                  },
                }}
                className="cursor-pointer rounded-full shadow-md overflow-hidden"
                style={{ width: 72, height: 72 }} // Größere Fläche
              >
                <Image
                  src="/kibouakari.png"
                  alt="Kibou"
                  fill
                  sizes="72px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </motion.div>
            </Link>
          </div>
        )}

        {/* Navbar nur auf Subpages */}
        {!isHome && <Navbar />}

        {/* Animated Page Transitions */}
        <motion.main
          key={pathname} // Damit bei Seitenwechsel neu animiert wird
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
          className="pt-32 px-6 md:px-12"
        >
          {children}
        </motion.main>
      </body>
    </html>
  );
}
