// "use client";
import Image from "next/image";
import Cards from "../../components/card";
import SearchBar from "../../components/search";
import { useRouter } from "next/navigation";

// import React, { useState } from "react";

async function getData() {
  let pokemonList = [];
  await fetch("http://pokeapi.co/api/v2/pokemon/?limit=20&offset=0", {
    cache: "force-cache",
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
    .then((data) => {
      let results = data.results;
      let promisesArray = results.map((result) => {
        return fetch(result.url).then((response) => response.json());
      });
      return Promise.all(promisesArray);
    })
    .catch((error) => console.log(error))
    .then((data) => (pokemonList = data));

  return pokemonList;
}

async function searchData(search) {
  const res = await fetch("http://pokeapi.co/api/v2/pokemon/" + search.name, {
    cache: "force-cache",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home({ searchParams }) {
  console.log(searchParams);
  let data = [];
  if (searchParams.name) {
    data = await searchData(searchParams);
  } else {
    data = await getData();
  }
  console.log(data);

  return (
    <div className="w-100 text-center">
      <div>
        <SearchBar />
      </div>
      <div className="shadow-lg flex flex-row justify-center  flex-wrap gap-1 w-100 max-h-[75vh] overflow-y-auto">
        {data.length > 1 ? (
          data.map((datas) => <Cards props={datas} />)
        ) : (
          <Cards props={data} />
        )}
      </div>
    </div>
  );
}
