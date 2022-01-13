import React, { useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppleIcon from "./assets/apple.svg";
import GoogleIcon from "./assets/googlePlay.svg";
import Playstation from "./assets/playstation.svg";
import Blackberry from "./assets/blackberry.svg";
import Redbull from "./assets/redbull.svg";
import TikTok from "./assets/tiktok.svg";
import Sennheiser from "./assets/sennheiser.svg";
import AB1 from "./assets/albumCover1.png";
import AB2 from "./assets/albumCover2.png";
import AB3 from "./assets/albumCover3.png";
import AB4 from "./assets/albumCover4.png";
import AB5 from "./assets/albumCover5.png";
import AB6 from "./assets/albumCover6.png";
import Arrow from "./assets/arrow.svg";
import Playlist1 from "./assets/playlist1.svg";
import Playlist2 from "./assets/playlist2.svg";


function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      document.querySelector(".preloader").classList.add("fade-out");
      setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
      }, 600);
    });
  }, []);

  return (
    <div className="app">
      <div className="preloader">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Navbar />
      <section className="app-content">
        <div className="app-landing">
          <div className="app-landing-details">
            <h3>
              Discover, search, and play any song featuring voice control.
            </h3>
            <button className="btn-flip" data-back="Try it free" data-front="Try it free"></button>
            <div className="details-download">
              <a className="apple">
                <img src={AppleIcon} alt="Apple download icon" />
              </a>
              <a className="google">
                <img src={GoogleIcon} alt="Google download icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="app-partners">
          <div className="partners-content">
            <img className="partners1" src={Playstation} alt="Playstation icon" />
            <img className="partners2" src={Blackberry} alt="Blackberry icon" />
            <img className="partners3" src={Redbull} alt="Redbull icon" />
            <img className="partners3" src={TikTok} alt="TikTok icon" />
            <img className="partners4" src={Sennheiser} alt="Sennheiser icon" />
          </div>
        </div>
        
        <div className="app-music">

          <div className="music-content">
            <div className="music-cover">
              <img className="cover-ab-first2" src={AB1} alt="music cover"/>
              <img src={AB2} alt="music cover"/>
              <img src={AB3} alt="music cover"/>
              <img className="cover-ab-first2" src={AB4} alt="music cover"/>
              <img src={AB5} alt="music cover"/>
              <img src={AB6} alt="music cover"/>
            </div>

            <div className="music-details">
              <h3>The music you love</h3>
              <p>With over 60 million tracks and tons of exclusive interviews and videos, TIDAL is here to bring you closer to the artists you listen to.</p>
              <a href="#">
                <img src={Arrow} alt=""/>
                  <p>More Featured</p>
                </a>
            </div>
          </div>
        </div>

        <div className="app-playlist">
          <div className="playlist-content">
          <div className="playlist-details">
              <h3>Hand-picked playlists</h3>
              <p>Stream guest playlists curated by the artists you love. Also, check out our original playlists hand-picked by our team of experts.</p>
              <a href="#">
                <img src={Arrow} alt=""/>
                  <p> Discover Radioheat</p>
                </a>
            </div>

            <div className="playlist-music">
              <img src={Playlist1} alt="music cover"/>
              <img src={Playlist2} alt="music cover"/>
            </div>
          </div>
        </div>

        <div className="app-why">
          <h3 className="app-why-header">Why radiohead?</h3>
          <div className="why-content">
            <div>
              <h3>A world of music in your pocket.</h3>
              <p>Find new loves and old favourites from over 56 million tracks.</p>
            </div>

            <div>
              <h3>Craft your collection.</h3>
              <p>Create playlists from millions of tracks and take them with you wherever you go.</p>
            </div>

            <div>
              <h3>No WiFi? No problem.</h3>
              <p>With Deezer Premium, you don't need to be connected to enjoy your favourite tracks.</p>
            </div>

            <div>
              <h3>Made for you.</h3>
              <p>Flow gets to know what you like and what you don't. Discover your personal soundtrack.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
