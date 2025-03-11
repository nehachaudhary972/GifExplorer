import Sipnner from "./Sipnner";
// import { useEffect, useState } from "react";
// import axios from "axios";
import useGif from "../hooks/useGif";
// const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}
export default function Random() {
  // const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`;
  // console.log(url);
  // const [gif, setGif] = useState("");
  // const [Loading, setLoading] = useState(false);

  // const generateGif = async () => {
  //   setLoading(true);
  //   const response = await axios.get(url);
  //   const gifUrl = response.data.data.images.downsized_large.url;

  //   setGif(gifUrl);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   generateGif();
  // }, []);

  // console.log(gif);
  // function handleGenerateGifs() {
  //   generateGif();
  // }
  const { gif, Loading, generateGif } = useGif();
  return (
    <div
      className="w-1/2  bg-yellow-400 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
    >
      {" "}
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        {" "}
        A Random Gif
      </h1>
      {/* <img
          src={gif}
          alt="Random GIF"
          className="max-w-[30rem] px-4 object-contain"
        /> */}
      {Loading ? (
        <Sipnner />
      ) : (
        <img src={gif} className="max-w-[30rem] px-4 object-contain" />
      )}
      <button
        onClick={generateGif}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}
