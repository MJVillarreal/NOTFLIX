import React from "react";

import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero_banner from "../../assets/Hero-banner.webp";
import hero_title from "../../assets/Hero-title.webp";
import play_icon from "../../assets/play-icon.svg";
import info_icon from "../../assets/info-icon.svg";
import TitleCards from "../../components/TitleCards/TitleCards";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="bannerImg" />
        <div className="heroCaption">
          <img src={hero_title} alt="" className="captionImg"></img>
          <p>
            Framed for murder, Lincoln Burrows awaits execution at Fox River
            State Penitentiary - until his brilliant brother reveals an
            elaborate plan to escape.
          </p>
          <div className="heroButtons">
            <button className="button">
              {" "}
              <img src={play_icon} />
              Play
            </button>
            <button className="button darkButton">
              {" "}
              <img src={info_icon} />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="moreCards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics for You"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
