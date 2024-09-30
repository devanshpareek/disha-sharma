import React from "react";
import JewlsByAsLogo from "../../assets/work/JewlsByAs/JBASLogo.png";
import SukoonLogo from "../../assets/work/Sukoon/Logo.png";
import TbhLogo from "../../assets/work/TbhStore/Logo.png";
import MelangeLogo from "../../assets/work/Melange/MelangeLogo.jpg";

import "./BrandDescription.css";

const BrandDescription = ({ brandName }) => {
  return (
    <div className="brand-container">
      {brandName === "JewlsByAs" ? (
        <div className="brand-description">
          <div className="brand-logo">
            <img className="logo" src={JewlsByAsLogo} alt="Brand Logo" />
          </div>
          {/* <div className="line"></div> */}
          <div className="brand-text">
            Based in the heart of Jaipur, Jewels by AS specialize in creating
            minimalistic, sterling silver jewelry that is both beautiful and
            affordable. Each piece is thoughtfully designed for the modern woman
            who loves understated luxury. Using moissanite stones that sparkle
            just like diamonds but are more sustainable, making the jewelry
            perfect for those who care about the planet and their style.
          </div>
        </div>
      ) : brandName === "Sukoon" ? (
        <div className="brand-description">
          <div className="brand-logo">
            <img src={SukoonLogo}></img>
          </div>
          <div className="brand-text">
            Sukoon’ is the zenith of serenity- it's a sweet souvenir of
            self-love to remind you of the home within you. It is crafted to
            make self-care a warm and joyous part of your day with the help of
            bite-sized daily rituals to hearten your inner quench of stillness.
            At Sukoon, we believe even the smallest of rituals, and tiniest of
            intention is enough To unwind; To reconnect and To feel
            complete within.
          </div>
        </div>
      ) : brandName === "TbhStore" ? (
        <div className="brand-description">
          <div className="brand-logo">
            <img src={TbhLogo}></img>
          </div>
          <div className="brand-text">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </div>
        </div>
      ) : brandName === "Melange" ? (
        <div className="brand-description">
          <div className="brand-logo">
            <img src={MelangeLogo}></img>
          </div>
          <div className="brand-text">
            Melange By Sangeeta Kapoor, the art of bespoke interior design that
            transcends ordinary living. In a crowded lifestyle industry, Melange
            stands out by avoiding anything that is considered mainstream,
            infusing homes and spaces with a sense of freshness and 'joie de
            vivre' in their designs. They believe that a home should go beyond
            mere wood, brick and mortar, aiming to enhance our lives and evoke
            our emotions. Crafting spaces that are not just elegant, but truly
            reflect your personal style and comfort.
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BrandDescription;
