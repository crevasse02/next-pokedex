import "../../globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import logoPoke from "/public/img/poke_logo.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="flex mb-4">
        <div className="w-full bg-tahiti-400 h-auto p-2 flex justify-center">
          <Link href="/dashboard">
            <Image src={logoPoke} width="50" height="50" alt="logoPoke" />
          </Link>
        </div>
      </div>
      <div className={inter.className}>{children}</div>
    </div>
  );
}
