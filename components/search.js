"use client";
import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

function search() {
  const [search, setSearch] = useState("");
  // const router = useRouter();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <input
        className="placeholder-gray-500 text-black border rounded-xl p-3 mb-3 mr-3"
        placeholder="jane@example.com"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + "?" + createQueryString("name", search));
        }}
        className="bg-tahiti-500 hover:bg-tahiti-700 text-white font-bold py-2 px-4 rounded text-lg"
      >
        Search
      </button>
    </div>
  );
}

export default search;
