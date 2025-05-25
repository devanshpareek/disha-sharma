import React, { useEffect, useState } from "react";
import "./BrandStore.css";
import Minimilist1 from "./Media/Minimilist1.jpg";
import Minimilist2 from "./Media/Minimilist2.jpg";
import Plum1 from "./Media/Plum Store 1.jpg";
import Plum2 from "./Media/Plum Store 2.jpg";
import Sukoon1 from "./Media/sukoon page 1.png";
import Sukoon2 from "./Media/sukoon page 2.png";
import { isMobileDevice } from "../../WorldIAmSurroundedWith";

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
  const brands = ["Sukoon", "Minimalist", "Plum"];
  const images =
    selectedBrand === "Minimalist"
      ? [Minimilist1, Minimilist2]
      : selectedBrand === "Plum"
      ? [Plum1, Plum2]
      : [Sukoon1, Sukoon2];

  const isMobile = isMobileDevice();

  console.log(selectedBrand);
  return (
    <div
      style={{
        paddingTop: navHeight,
      }}
      className="brand-store-wrapper"
    >
      <div
        className={
          isMobile
            ? "photography-list--mobile photography-list"
            : "photography-list"
        }
        style={{
          ...(isMobile && {
            marginBottom: "1rem",
          }),
        }}
      >
        {brands.map((item, index) => {
          return (
            <div
              className={
                index < brands.length - 1
                  ? "photography-list-item"
                  : "photography-list-iteem"
              }
              onClick={() => {
                setSelectedBrand(item);
              }}
              style={{
                ...(selectedBrand === item && {
                  color: "black",
                }),
                fontFamily: "Quicksand",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div>
        <img
          className={
            selectedBrand == "Sukoon"
              ? isMobile
                ? "brand-store-sukoon-mobile"
                : "brand-store-sukoon"
              : ""
          }
          src={images[0]}
        />
      </div>
      <div>
        <img
          className={
            selectedBrand == "Sukoon"
              ? isMobile
                ? "brand-store-sukoon-mobile"
                : "brand-store-sukoon"
              : ""
          }
          src={images[1]}
        />
      </div>
    </div>
  );
};

export default BrandStore;
