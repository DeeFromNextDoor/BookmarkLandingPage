import React from "react";
import { Link } from "react-router-dom";

const ExtensionBox = ({ image, title, version, btnText }) => {
  return (
    <div className="box">
      <div className="boxTop">
        <img src={image} alt="" />
        <div className="boxTexts">
          <h3 className="title">{title}</h3>
          <p className="version">{version}</p>
        </div>
      </div>
      <div className="boxBottom">
        <Link>{btnText}</Link>
      </div>
    </div>
  );
};

export default ExtensionBox;
