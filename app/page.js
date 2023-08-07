import Image from "next/image";
import logoPoke from "../public/img/poke_logo.png";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  ">
      <Image src={logoPoke} width="300" height="100" alt="logo" />
      <Link href="/dashboard">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl">
          Pokedex
        </button>
      </Link>
    </main>
  );
}
