import { useState } from "react";

import Sipnner from "./Spinner";
import useGif from "../hooks/useGif";
// const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  const [tag, setTag] = useState("car");

  const { gif, Loading, generateGif } = useGif(tag);

  return (
    <div
      className="w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
    >
      {" "}
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        {" "}
        Random {tag} Gif
      </h1>{" "}
      {Loading ? (
        <Sipnner />
      ) : (
        <img
          src={gif}
          className="max-w-[30rem] px-4 object-contain"
          alt="gif"
        />
      )}
      <input
        onChange={(event) => setTag(event.target.value)}
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      />
      <button
        onClick={() => generateGif(tag)}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}
