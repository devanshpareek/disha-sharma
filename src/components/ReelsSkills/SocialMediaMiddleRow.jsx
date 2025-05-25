import React from "react";
import styles from "./SocialMediaMiddleRow.module.css";
import img1 from "./Media/SocialMediaRightRow1-1.jpg";
import img2 from "./Media/SocialMediaRightRow1-2.jpg";
import img3 from "./Media/SocialMediaRightRow1-3.jpg";
import reel from "./Media/2-2.mp4";
import PhoneWithVideo from "./PhoneWithVideo/PhoneWithVideo";
import JewlsLogo from "../../assets/work/JewlsByAs/JBASLogo.png";
import SukoonLogo from "../../assets/work/Sukoon/Logo.png";
import MelangeLogo from "../../assets/work/Melange/MelangeLogo.jpg";
import TbhStoreLogo from "../../assets/work/TbhStore/Logo.png";
import { useNavigate } from "react-router-dom";
import { isMobileDevice } from "../WorldIAmSurroundedWith";
import JTCLogo from "../../assets/Logos/JTCLogo.png";
const SocialMediaMiddleRow = () => {
  const images = [img1, img2, img3, img1, img2, img3, img1, img2, img3];
  const navigate = useNavigate();
  const brands = [
    {
      logo: SukoonLogo,
      title: "Sukoon",
      link: "/my-work/sukoon",
    },
    {
      logo: JTCLogo,
      title: "Jaipur Trekkers Community",
      link: "https://www.instagram.com/jaipurtrekkerscommunity/",
      href: "https://www.instagram.com/jaipurtrekkerscommunity/",
    },
    {
      logo: MelangeLogo,
      title: "Melange",
      link: "/my-work/melange",
    },
    {
      logo: JewlsLogo,
      title: "Jewels By AS",
      link: "/my-work/jewls-by-as",
    },
  ];

  const isMobile = isMobileDevice();

  return (
    <div
      className={
        isMobile
          ? styles.SocialMediaMiddleRowMobile
          : styles.SocialMediaMiddleRow
      }
    >
      <div
        className={
          isMobile
            ? styles.socialMediaFourImagesGridWrapperMobile
            : styles.socialMediaFourImagesGridWrapper
        }
      >
        <div className={styles.imageGrid}>
          {brands.map((item, index) => (
            <a href={item.href}>
              <div
                onClick={() => {
                  if (item.title != "Jaipur Trekkers Community") {
                    navigate(item.link);
                  }
                }}
                key={index}
                className={styles.imageContainer}
              >
                <img src={item.logo} alt={`Image ${index + 1}`} />
                <h4>{item.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div
        className={
          isMobile
            ? styles.SocialMediaMiddleRowgridContainerMobile
            : styles.SocialMediaMiddleRowgridContainer
        }
      >
        {images.map((image, index) => (
          <div
            className={
              isMobile
                ? styles.SocialMediaMiddleRowgridItemMobile
                : styles.SocialMediaMiddleRowgridItem
            }
          >
            {index == 4 ? (
              <PhoneWithVideo images={images} />
            ) : (
              <img
                src={image}
                alt={"alt"}
                className={
                  isMobile
                    ? styles.SocialMediaMiddleRowgridImageMobile
                    : styles.SocialMediaMiddleRowgridImage
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaMiddleRow;
