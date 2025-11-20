import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free onboarding call to get you up and running.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Of course! You can upgrade or downgrade your plan anytime.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time, and you won’t be billed again.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, we allow customization of billing information as needed.",
  },
  {
    question: "How does billing work?",
    answer:
      "We offer monthly and yearly subscriptions. All major payment methods are accepted.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-left">
        <p className="faq-tag">Frequently Asked Questions</p>
        <h2>
          We’re here to <span className="highlight">Answer</span>
          <br /> all your Questions
        </h2>
        <p className="faq-desc">
          Quick answers to questions you may have. Can’t find what you’re
          looking for? Check out our full documentation.
        </p>
      </div>

      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>
                {index + 1}. {faq.question}
              </span>
              <span
                className={`arrow ${activeIndex === index ? "up" : "down"}`}
              />
            </div>

            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
