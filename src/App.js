import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WaveCarousel from "./components/WaveCarousel/WaveCarousel";
import { useEffect, useRef, useState } from "react";
import WorldIAmSurroundedWith from "./components/WorldIAmSurroundedWith";
import ComplexWavyLineWithNodes from "./components/curvedLine";

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
                <Skills />
                <WorldIAmSurroundedWith />
                <WaveCarousel />
                <Projects />

                {/* <Contact /> */}
                <Footer />
                {/* <ComplexWavyLineWithNodes /> */}
              </>
            ),
          },
        ])}
      />
    </div>
  );
}

export default App;
