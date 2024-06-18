import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "indusspay-assignment",
  description: "An Assignment from Indusspay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
