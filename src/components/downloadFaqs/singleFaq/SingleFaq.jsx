import React, { useState } from "react";

const SingleFaq = ({ id, question, answer, expand, collapse }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="single">
      <div className="faqTitle" onClick={toggleAnswer}>
        <p>{question}</p>
        <span
          dangerouslySetInnerHTML={{ __html: showAnswer ? collapse : expand }}
        />
      </div>
      {showAnswer && (
        <div className="faqAnswer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default SingleFaq;
