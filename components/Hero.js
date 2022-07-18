import React from "react";
import { UseLanguage } from "../context/languageContext";
import Slide from "react-reveal/Slide";

const Hero = () => {
  const { content, language, toggle_language } = UseLanguage();
  return (
    <>
      <section className="hero-section" id="hero">
        <Slide right cascade>
          <div>
            <p className="hero-hi">{content.hero.hi}</p>
            <h1 className="hero-name">{content.hero.name}</h1>
            <div className="wrapper">
              <div className="static-txt">{content.hero.i_am}</div>
              <ul className="dynamic-txts">
                <li>
                  <span>{content.hero.title[0]}</span>
                </li>
                <li>
                  <span>{content.hero.title[1]}</span>
                </li>
                <li>
                  <span>{content.hero.title[0]}</span>
                </li>
                <li>
                  <span>{content.hero.title[1]}</span>
                </li>
              </ul>
            </div>
          </div>
        </Slide>
      </section>
    </>
  );
};

export default Hero;
