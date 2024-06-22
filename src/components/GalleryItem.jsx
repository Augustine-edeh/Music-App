import { useState, useEffect } from "react";
import { allAssets } from "../apiRequest/ApiRequest";
import Items from "./Items";
import { Albums } from "../assets/asset";

const GalleryItem = () => {
  const [assets, setAssets] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const asset = async () => {
      try {
        const res = await allAssets();
        console.log(res, "this is the response");

        setAssets(res?.data);
      } catch (error) {
        setError(error.message);
        console.log(error, "this is from errror");
      }
    };

    asset();
  }, []);
  console.log(assets);
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5 overflow-auto h-full">
      {error && <p>{error}</p>}

      {Albums &&
        Albums.map((item, id) => (
          <Items
            key={id}
            name={item.name}
            desc={item.desc}
            image={item.image}
          />
        ))}
    </div>
  );
};
export default GalleryItem;
