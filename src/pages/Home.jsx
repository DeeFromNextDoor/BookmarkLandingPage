import React from "react";

import SimpleBookmark from "../components/heroComponents/SimpleBookmark";
import DownloadFaqs from "../components/downloadFaqs/DownloadFaqs";

const Home = () => {
  return (
    <div className="home">
    <SimpleBookmark />
      <DownloadFaqs />
    </div>
  );
};

export default Home;
