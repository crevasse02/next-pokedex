import React from "react";
import Image from "next/image";
import Cards from "../../../components/card";

async function getData(search) {
  const res = await fetch("http://pokeapi.co/api/v2/pokemon/" + search.name, {
    cache: "force-cache",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function page({ params }) {
  const data = await getData(params);

  return (
    <div className="shadow-lg flex flex-row justify-center  flex-wrap gap-1 w-100 max-h-[75vh] overflow-y-auto">
      <Cards props={data} />
    </div>
  );
}

export default page;
