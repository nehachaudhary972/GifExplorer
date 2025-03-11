import { useState } from "react";
// import axios from "axios";
import Sipnner from "./Sipnner";
import useGif from "../hooks/useGif";
// const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  const [tag, setTag] = useState("car");
  // const urlTag = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${tag}`;
  // const [gif, setGif] = useState("");
  // const [Loading, setLoading] = useState(false);

  // const generateGif = async () => {
  //   setLoading(true);
  //   const response = await axios.get(urlTag);
  //   const gifUrl = response.data.data.images.downsized_large.url;
  //   console.log(response);
  //   setGif(gifUrl);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   generateGif();
  // }, []);

  // function handleGenerateGifs() {
  //   generateGif();
  // }
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
