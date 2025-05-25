import React, { useEffect, useState } from "react";
import "./Baaten.css";
import GharImg from "../assets/img/baaten.PNG";

const Baaten = () => {
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
  return (
    <div
      style={{
        paddingTop: navHeight,
      }}
      className="baaten"
    >
      <h2 className="ghar-title">Ghar</h2>

      <div className="ghar-wrapper">
        <div className="ghar-img">
          <img src={GharImg} />
        </div>
        <div className="ghar-text">
          Ghar…. kya hota hai ghar? jaha maa hoti hai vahi toh hota hai ghar..
          <br></br>
          Jab bachapan me koi badi se cheez carton k dabbe me band aati thi toh
          khel<br></br> khel me vahi ban jata tha humara ghar.. <br></br>Kya
          hoti hai is ghar ki ahmiyat?<br></br> Kaun bana ta hai ye ghar?
          <br></br> Majdoor ki mehnat ya maa baap ka pyaar.. Ieet pathttar ya
          paise hazaar.
          <br></br> Jab bhi koi pareshani hoti hai hume pata hota kiske pass
          jana hai aur zor se gale lag jaana hai,<br></br> kya vo isan bhi mera
          ghar hai, Kabhi kabhi soch ti hu agar ye 4 deewar memere saath koi aur
          rehene lag jaye<br></br> toh kya tab bhi ye ghar mera ghar hoga?
          <br></br> Kya hota hai ghar kaun bana ta hai ye ghar.
        </div>
      </div>
    </div>
  );
};

export default Baaten;
