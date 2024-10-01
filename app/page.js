import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="mylogo logo"
          width={180}
          height={38}
        />

        <div className="text-center">
          <p className="block"> Welcome to my website</p>
          <p className="text-lg text-gray-600">We are glad to have you here. Explore and enjoy!</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/news" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
            Nieuws
          </Link>
          <Link href="/account" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Login / Register
          </Link>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">
          {/* copy-left */}
          
          &copy; {new Date().getFullYear()} <Link href="https://github.com/thop01">THOP01</Link>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
