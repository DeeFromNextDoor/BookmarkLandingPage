import React from "react";
import ExtensionBox from "../extensions/ExtensionBox";

const Downloads = ({ title, texts, chrome, fireFox, opera }) => {
  return (
    <div className="downloads">
      <div className="downloadTexts">
        <h2 className="title">{title}</h2>
        <p className="texts">{texts}</p>
      </div>
      <div className="extensions">
        <div className="extension chrome">
          <ExtensionBox {...chrome} />
        </div>
        <div className="extension fireFox">
          <ExtensionBox {...fireFox} />
        </div>
        <div className="extension opera">
          <ExtensionBox {...opera} />
        </div>
      </div>
    </div>
  );
};

export default Downloads;
