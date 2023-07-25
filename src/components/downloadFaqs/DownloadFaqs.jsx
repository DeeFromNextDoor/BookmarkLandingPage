import React from "react";
import { downloadsFaqs } from "../../utils/Data";
import Downloads from "./Downloads";
import Faqs from "./Faqs";

const DownloadFaqs = () => {
  return (
    <div className="download-faqs">
      <div className="top box">
        <Downloads {...downloadsFaqs.downloads} />
      </div>
      <div className="down box">
        <Faqs faqs={downloadsFaqs.faqs} />
      </div>
    </div>
  );
};

export default DownloadFaqs;
