import React from "react";
import Downloads from "./downloads/Downloads";
import Faqs from "./faqs/Faqs";
import { downloadsFaqs } from "../../utils/Data";

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
