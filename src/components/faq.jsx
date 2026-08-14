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

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-12 px-4 sm:px-6 lg:py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl mb-8 sm:mb-10">
          Frequently Asked{" "}
          <span className="text-violet-600 bg-violet-50 px-2 py-0.5 rounded-md">
            Questions
          </span>
        </h2>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => handleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition hover:text-violet-600 focus:outline-none"
              >
                <span className="text-base sm:text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>

                <span
                  className={`flex shrink-0 items-center justify-center w-6 h-6 rounded-full border-2 text-sm font-bold transition-colors ${openIndex === index
                    ? "border-indigo-500 text-indigo-500"
                    : "border-slate-400 text-slate-500"
                    }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
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