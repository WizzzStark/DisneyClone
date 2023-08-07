import React from "react";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`faq ${faq.open ? "open" : ""}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer text-[#c0c0c0] text-[20px]">{faq.answer}</div>
    </div>
  );
};

export default FAQ;