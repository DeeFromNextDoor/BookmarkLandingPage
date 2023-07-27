import React, { useState } from "react";

const SingleFaq = ({ id, question, answer, expand, collapse }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  return (
    <div className={`single ${showAnswer ? "expanded" : ""}`}>
      <div className="faqTitle" onClick={toggleAnswer}>
        <p>{question}</p>
        <span
          dangerouslySetInnerHTML={{ __html: showAnswer ? collapse : expand }}
        />
      </div>
      {showAnswer ? (
        <div className="faqAnswer" style={{ height: "auto" }}>
          <p>{answer}</p>
        </div>
      ) : (
        <div className="faqAnswer" style={{ height: "0" }} />
      )}
    </div>
  );
};

export default SingleFaq;
