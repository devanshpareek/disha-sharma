import React, { useEffect, useState } from "react";
import styles from "./AboutUs.module.css";
import DishaImg from "../../assets/img/DishaImage.jpg";
import DiyaImg from "../../assets/img/DiyaImg.jpg";
import FolderIcon from "../../assets/img/FlamesFolderIcon.png";
import { useNavigate } from "react-router-dom";
import img1 from "./Media/1.png";
import img2 from "./Media/2.png";
import img3 from "./Media/3.png";
import img4 from "./Media/4.png";
import img5 from "./Media/5.png";
import img6 from "./Media/6.png";
import combined from "./Media/Combined.png";
import { isMobileDevice } from "../WorldIAmSurroundedWith";
import navIcon3 from "../../assets/img/nav-icon3.svg"
const people = [
  {
    name: "Disha Sharma",
    image: DishaImg,
    description: `I’m a digital content curator, but honestly, that’s just one piece of the puzzle. Some call me a creative head, others see me as a designer, and at times, I’m simply a photographer with a camera in hand, capturing fleeting moments.

But if I’m being real, I’ve never quite fit into just one category or community. I’ve always been someone who thrives in the in-between spaces, exploring new things and finding inspiration in most random things in life. Whether it’s playing with colors in a design or in a canvas, or framing the perfect shot, my work is all about what I connect with the most, what feels closer.

I can proudly say I’m an artist at heart, an artist with too many passions to count. And I’ve come to realize that I don’t need to put myself into a box. The world is full of so much to create, to share, to be, and I’m here for it all.

So, welcome to my little corner of creativity. Let’s make something beautiful together.`,
  },
  {
    name: "Diya Shekhawat",
    image: DiyaImg,
    description: `I'm the creative wizard who can find the fun in 
a font and the jest in a JPEG. My work is as 
lively and talkative as I am, because who says 
design can't have a punchline?
 PS:  When I'm not weaving design magic, you 
might catch me murmuring “Don ko pakadna 
mushkil hi nahin…`,
  },
];

const AboutUs = () => {
  const navigate = useNavigate();
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

  const softwareTools = [img1, img2, img3, img4, img5, img6];
  const isMobile = isMobileDevice();
  return (
    <div
      style={{
        paddingTop: navHeight,
      }}
      className={styles.container}
    >
      {people.map((person, index) => (
        <div
          key={index}
          className={
            isMobile
              ? `${styles.halfMobile} ${
                  index === 0 ? styles.topHalfMobile : styles.bottomHalfMobile
                }`
              : `${styles.half} ${
                  index === 0 ? styles.topHalf : styles.bottomHalf
                }`
          }
        >
          {index === 1 && (
            <div
              className={
                isMobile
                  ? styles.workBuddyWrapperMobile
                  : styles.workBuddyWrapper
              }
            >
              <div
                className={isMobile ? styles.workBuddyMobile : styles.workBuddy}
              >
                {"MY#WORK#BUDDY".split("").map((item) => {
                  return (
                    <div
                      style={{
                        ...(item == "#" && { marginTop: "10px" }),
                      }}
                    >
                      {item == "#" ? "" : item}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {index === 1 ? (
            <div className={styles.content}>
              <div className={styles.imageWrapper}>
                <img
                  src={person.image}
                  alt={person.name}
                  className={styles.image}
                />
                <h1 className={styles.name}>{person.name}</h1>
              </div>
              <div className={styles.details}>
                <div className={styles.description}>
                  <p>
                    I'm the creative wizard who can find the fun in a font and
                    the jest in a JPEG. My work is as lively and talkative as I
                    am, because who says design can't have a punchline? PS: When
                    I'm not weaving design magic, you might catch me murmuring
                    “Don ko pakadna mushkil hi nahin…
                  </p>
                </div>
                {index === 1 && (
                  <a
                    className={styles.diyaBehaneLink}
                    href="http://www.behance.net/diyasinghshekhawat"
                    target="#blank"
                  >
                    <div className={styles.BehanceLink}>
                      <div className={styles.FolderIcon}>
                        <img src={FolderIcon} />
                      </div>
                      <div className={styles.BehanceLinkText}>
                        Checkout my work.
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.content}>
                <div className={styles.imageWrapper}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className={styles.image}
                  />
                  <h1 className={styles.name}>{person.name}</h1>
                </div>
                <div className={styles.details}>
                  <div className={styles.description}>
                    <p>
                      I’m a digital content curator, but honestly, that’s just
                      one piece of the puzzle. Some call me a creative head,
                      others see me as a designer, and at times, I’m simply a
                      photographer with a camera in hand, capturing fleeting
                      moments.
                    </p>
                    <p>
                      But if I’m being real, I’ve never quite fit into just one
                      category or community. I’ve always been someone who
                      thrives in the in-between spaces, exploring new things and
                      finding inspiration in most random things in life. Whether
                      it’s playing with colors in a design or in a canvas, or
                      framing the perfect shot, my work is all about what I
                      connect with the most, what feels closer.
                    </p>
                    <p>
                      I can proudly say{" "}
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        {" "}
                        I’m an artist at heart
                      </span>
                      , an artist with too many passions to count. And I’ve come
                      to realize that I don’t need to put myself into a box. The
                      world is full of so much to create, to share, to be, and
                      I’m here for it all.
                    </p>
                    <p>
                      So,
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        {" "}
                        welcome to my little corner of creativity.
                      </span>{" "}
                      Let’s make something beautiful together.
                    </p>
                  </div>
                  {index === 1 && (
                    <a
                      className={styles.diyaBehaneLink}
                      href="http://www.behance.net/diyasinghshekhawat"
                    >
                      <div className={styles.BehanceLink}>
                        <div className={styles.FolderIcon}>
                          <img src={FolderIcon} />
                        </div>
                        <div className={styles.BehanceLinkText}>
                          Checkout my work.
                        </div>
                      </div>
                    </a>
                  )}
                </div>
                {index === 0 && (
                  <div className={styles.softwareTools}>
                    <h2>Tools</h2>
                    {/* {softwareTools.map((item) => {
                      return (
                        <div className={styles.softwareTool}>
                          <img src={item} />
                        </div>
                      );
                    })} */}
                    <div>
                      <img className={styles.tools} src={combined}></img>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
      {/* <div className={styles.divider}></div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "black",
          marginLeft: "-10vw",
          paddingTop: "2rem",
          // marginBottom: "-2vh",
        }}
        className="insta-icon"
      >
        <h4>Follow our art page</h4>
        <a
          // className="nav-link"
          style={{
            display:"flex",
            alignContent:"center",
            marginLeft:"0.7vw"
          }}
          href="https://www.instagram.com/kalakaarr/"
          target="#blank"
        >
          <img  src={navIcon3} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
