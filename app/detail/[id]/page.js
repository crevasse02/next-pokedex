import React from "react";
import Image from "next/image";
import CardDetail from "../../../components/cardDetail";

async function getData(id) {
  const res = await fetch("http://pokeapi.co/api/v2/pokemon/" + id.id, {
    cache: "force-cache",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Detail({ params }) {
  // console.log(params);
  const data = await getData(params);

  return (
    <div className="shadow-lg flex flex-row justify-center  flex-wrap gap-1 w-100 max-h-[75vh] overflow-y-auto">
      <CardDetail props={data} />
    </div>
  );
}
