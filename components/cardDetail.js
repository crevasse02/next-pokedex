import React from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function cardDetail({ props }) {
  // const dataAbility = await getDetail();
  const baseStats = props.stats;
  const abilities = props.abilities;

  return (
    <div className="bg-gradient-to-r from-tahiti-300 to-tahiti-500 rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">{props.name}</h1>
        <img
          src={props.sprites.front_default}
          alt={`${props.name} sprite`}
          className="w-16 h-16"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Abilities:</h2>
        <ul className="list-disc list-inside">
          {abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Base Stats:</h2>
        <ul className="list-disc list-inside">
          {baseStats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default cardDetail;
