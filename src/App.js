import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WaveCarousel from "./components/WaveCarousel/WaveCarousel";
import { useEffect, useRef, useState } from "react";
import WorldIAmSurroundedWith from "./components/WorldIAmSurroundedWith";
import ComplexWavyLineWithNodes from "./components/curvedLine";
import JewlsByAs from "./components/JewlsByAS/JewlsByAs";
import TbhStore from "./components/TbhStore/TbhStore";
import Sukoon from "./components/Sukoon/Sukoon";
import BrandDescription from "./components/BrandDescription/BrandDescription";
import WordCloudContainer from "./components/WordCloudContainer/WordCloudContainer";
import Melange from "./components/Milange/Milange";
import Photography from "./components/Skills/Photography";
import Jewllery from "./components/Skills/Photography/Jewllery";
import Ceremics from "./components/Skills/Photography/Ceremics";
import Candles from "./components/Skills/Photography/Candles";
import InteriorDesign from "./components/Skills/Photography/InteriorDesign";
import Lifestyle from "./components/Skills/Photography/Lifestyle";
import TshirtPrinting from "./components/Skills/Photography/TshirtPrinting";
import AboutUs from "./components/AboutUs/AboutUs";
import Reels from "./components/ReelsSkills/Reels";
import SocialMedia from "./components/ReelsSkills/SocialMedia";
import BrandStore from "./components/Skills/BrandStore/BrandStore";
import ScrollToTop from "./ScrollOnTop";
import Baaten from "./components/Baaten";

function App() {
  const elementRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     if (event.deltaY > 0) {
  //       window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  //     } else {
  //       window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
  //     }
  //   };

  //   window.addEventListener('wheel', handleScroll);

  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: (
              <>
                <Banner />
                <WorldIAmSurroundedWith />
                <Projects />
                <WaveCarousel />
                <Footer />
              </>
            ),
          },
          {
            path: "/my-work/jewls-by-as",
            element: (
              <>
                <ScrollToTop />
                <BrandDescription brandName={"JewlsByAs"} />
                <WordCloudContainer brandName={"JewlsByAs"} />
                <JewlsByAs />
                <Footer />
              </>
            ),
          },
          {
            path: "/my-work/tbh-store",
            element: (
              <>
                {/* <BrandDescription brandName={"TbhStore"} /> */}
                <ScrollToTop />
                <TbhStore />
                <Footer />
              </>
            ),
          },

          {
            path: "/my-work/sukoon",
            element: (
              <>
                <ScrollToTop />
                <BrandDescription brandName={"Sukoon"} />
                <WordCloudContainer brandName={"Sukoon"} />
                <Sukoon />
                <Footer />
              </>
            ),
          },
          {
            path: "/my-work/melange",
            element: (
              <>
                <ScrollToTop />
                <BrandDescription brandName={"Melange"} />
                <WordCloudContainer brandName={"Melange"} />
                <Melange />
                <Footer />
              </>
            ),
          },
          {
            path: "/skills/photography",
            element: (
              <>
                <ScrollToTop />
                <Photography />
                <Footer />
              </>
            ),
          },
          {
            path: "/skills/photography/jewllery",
            element: (
              <>
                <ScrollToTop />
                <Jewllery />
                <Footer />
              </>
            ),
          },
          {
            path: "/skills/photography/ceremics",
            element: (
              <>
                <ScrollToTop />
                <Ceremics />
                <Footer />
              </>
            ),
          },
          {
            path: "/skills/photography/candles",
            element: (
              <>
                <ScrollToTop />
                <Candles />
                <Footer />
              </>
            ),
          },
          {
            path: "/skills/photography/lifestyle",
            element: (
              <>
                <ScrollToTop />
                <Lifestyle />
                <Footer />
              </>
            ),
          },
          {
            path: "/skills/social-media",
            element: (
              <>
                <ScrollToTop />
                <SocialMedia />
                <Footer />
              </>
            ),
          },
          {
            path: "/skills/brand-store",
            element: (
              <>
                <ScrollToTop />
                <BrandStore />
                <Footer />
              </>
            ),
          },
          {
            path: "/skills/apparel-designing",
            element: (
              <>
                <ScrollToTop />
                <TshirtPrinting />
                <Footer />
              </>
            ),
          },
          {
            path: "/skills/बातें",
            element: (
              <>
                <ScrollToTop />
                <Baaten/>
                <Footer />
              </>
            ),
          },
          {
            path: "/about-us",
            element: (
              <>
                <ScrollToTop />
                <AboutUs />
                <Footer />
              </>
            ),
          },
        ])}
      />
    </div>
  );
}

export default App;
