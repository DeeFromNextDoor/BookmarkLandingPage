import React from "react";
import { Link } from "react-router-dom";
import SingleFaq from "./SingleFaq";

const Faqs = ({ faqs }) => {
  return (
    <div className="faqs">
      {faqs.map((section) => (
        <div key={section.title}>
          <div className="faqsHead">
            <h2 className="title">{section.title}</h2>
            <p className="subTitle">{section.texts}</p>
          </div>
          <div className="faqsWrapper">
            {section.questions.map((faq, index) => (
              <div className={`singleFaq faq-${index}`} key={index}>
                <SingleFaq
                  id={section.title}
                  question={faq.question}
                  answer={faq.answer}
                  expand={faq.expand}
                  collapse={faq.collapse}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <Link>More info</Link>
    </div>
  );
};

export default Faqs;
