import React from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function card({ props }) {
  // const router = useRouter();
  // const value = props.value;
  console.log(props);
  // const goDetail = (id) => {
  //   // console.log(id);
  //   router.push("http://localhost:3000/detail?id=" + id);
  // };
  return (
    // Wrong! There is no need to specify the key here:
    <Link href={"/detail/" + props.id}>
      <div className="px-2 py-4 bg-gradient-to-r from-tahiti-300 to-tahiti-500 rounded cursor-pointer">
        <h3 className="text-black">{props.name}</h3>
        <Image
          src={props.sprites.front_default}
          width="200"
          height="200"
          alt={props.name}
        />
      </div>
    </Link>
  );
}

export default card;
