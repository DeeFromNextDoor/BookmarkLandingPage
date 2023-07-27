import React from "react";
import "../heroComponents/hero.css";
import FeatureArray from "./FeatureArray";

const SimpleBookmark = () => {
  const innerHero = (
    <div className="innerHeroSect">
      <div className="simpleManager">
        <h2>A simple Bookmark Manager</h2>
        <p>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="forBtns">
          <button className="onChromeBtn">Get it on Chrome</button>
          <button className="onFoxBtn">Get it on Firefox</button>
        </div>
      </div>

      <div className="span-logo">
        <img src="undraw_Books_re_8gea.png" alt="" />
      </div>
    </div>
  );
  return (
    <div className="heroSect">
      {innerHero}
      <div className="features">
        <div className="featureDetail">
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your favorite
            websites. Your Bookmarks sync with your device so you can access
            them on the go.
          </p>
        </div>
      </div>
      <FeatureArray />
    </div>
  );
};

export default SimpleBookmark;
