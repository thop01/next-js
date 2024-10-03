import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My News Website",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <header className="p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
              <img src="/logo.svg" alt="Logo" className="h-8 inline-block mr-2" />
            </div>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/news" className="hover:underline">News</Link></li>
              <li><Link href="/admin" className="hover:underline">Admin</Link></li>
              <li><Link href="/account" className="hover:underline">Account</Link></li>
            </ul>
          </nav>
        </header>

        <hr />
        {children}
      </body>
    </html>
  );
}
