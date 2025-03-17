import Sipnner from "./Spinner";

import useGif from "../hooks/useGif";

export default function Random() {
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
      {Loading ? (
        <Sipnner />
      ) : (
        <img
          src={gif}
          className="max-w-[30rem] px-4 object-contain"
          alt="gif"
        />
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
