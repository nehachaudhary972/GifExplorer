import { useEffect, useState } from "react";
import axios from "axios";

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${tag}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [Loading, setLoading] = useState(false);
  const urlFormation = tag ? `${url}&tag=${tag}` : url;
  console.log(urlFormation);
  const generateGif = async () => {
    setLoading(true);
    const response = await axios.get(urlFormation);
    const gifUrl = response.data.data.images.downsized_large.url;

    setGif(gifUrl);
    setLoading(false);
  };

  useEffect(() => {
    generateGif();
  }, []);

  return { gif, Loading, generateGif };
};

export default useGif;
