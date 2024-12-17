import React, { useEffect, useState } from "react";
import "./BrandStore.css";
import Minimilist1 from "./Media/Minimilist1.jpg";
import Minimilist2 from "./Media/Minimilist2.jpg";
import Plum1 from "./Media/Plum Store 1.jpg";
import Plum2 from "./Media/Plum Store 2.jpg";

const BrandStore = () => {
  const [navHeight, setNavHeight] = useState(
    document.getElementById("project-navbar")?.getBoundingClientRect().height +
      25
  );
  useEffect(() => {
    setNavHeight(
      document.getElementById("project-navbar")?.getBoundingClientRect()
        .height + 25
    );
  }, [document.getElementById("project-navbar")]);

  const [selectedBrand, setSelectedBrand] = useState("Minimalist");
  const brands = ["Minimalist", "Plum", "Sukoon"];
  const images =
    selectedBrand === "Minimalist"
      ? [Minimilist1, Minimilist2]
      : selectedBrand === "Plum"
      ? [Plum1, Plum2]
      : [Plum1, Plum2];
  return (
    <div
      style={{
        paddingTop: navHeight,
      }}
      className="brand-store-wrapper"
    >
      <div className="photography-list">
        {brands.map((item, index) => {
          return (
            <div
              className={
                index < brands.length - 1 ? "photography-list-item" : ""
              }
              onClick={() => {
                setSelectedBrand(item);
              }}
              style={{
                ...(selectedBrand === item && {
                  color: "black",
                }),
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div>
        <img src={images[0]} />
      </div>
      <div>
        <img src={images[1]} />
      </div>
    </div>
  );
};

export default BrandStore;
