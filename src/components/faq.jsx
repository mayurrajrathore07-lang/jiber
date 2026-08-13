'use client';

import { useState } from "react";

const faqs = [
  {
    question: "Does Jiber hold my funds?",
    answer: "i don't know.",
  },
  {
    question: "Does Jiber hold my funds?",
    answer: "i don't know.",
  },
  {
    question: "Does Jiber hold my funds?",
    answer: "i don't know.",
  },
  {
    question: "Does Jiber hold my funds?",
    answer: "i don't know.",
  },
  {
    question: "Does Jiber hold my funds?",
    answer: "i don't know.",
  },
  {
    question: "Does Jiber hold my funds?",
    answer: "i don't know.",
  },
  {
    question: "Does Jiber hold my funds?",
    answer: "i don't know.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-16 px-5">
      <div className="max-w-3xl mx-auto" id="faq">


        <h2 className="text-center text-4xl font-bold text-slate-900 mb-10 ">
          Frequently Asked{" "}
          <span className="text-violet-600 bg-violet-50 px-1 rounded-md">
            Questions
          </span>
        </h2>


        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => handleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-medium text-slate-900 font-bold">
                  {faq.question}
                </span>

                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full border-2 ${openIndex === index
                    ? "border-indigo-500 text-indigo-500"
                    : "border-slate-500 text-slate-500"
                    }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="pb-6 text-lg text-slate-500">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}