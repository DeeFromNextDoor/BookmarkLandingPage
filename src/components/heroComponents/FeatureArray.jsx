import React, { useState } from "react";
import { features, slideContents } from "../../utils/Data";

const FeatureArray = () => {
  const [itemState, setItemState] = useState([slideContents[0]]);
  const handleSwitch = (id) => {
    const item = id.id;
    setItemState([slideContents[item]]);
  };

  const displayFeatureBtns = (
    <div className="slider">
      {features.map((elem) => (
        <button
          className="slideBtn"
          id={elem.id}
          key={elem.id}
          onClick={() => handleSwitch(elem)}
        >
          {elem.btnTag}
        </button>
      ))}
    </div>
  );
  const slidingItems = (
    <div className="slideWrapper">
      {itemState &&
        itemState.map((slideItem, idx) => (
          <div key={idx} className="slides">
            <span>
              <img src={slideItem.img} alt="" />
            </span>
            <div className="content">
              <h2>{slideItem.title}</h2>
              <p>{slideItem.desc}</p>
              <button onClick={handleSwitch}>{slideItem.btnTag}</button>
            </div>
          </div>
        ))}
    </div>
  );
  return (
    <div className="slideHolder">
      {displayFeatureBtns}
      {slidingItems}
    </div>
  );
};

export default FeatureArray;
