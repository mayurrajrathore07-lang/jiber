'use client';

import { useState } from "react";

const faqs = [
  {
    question: "Does Jiber hold my funds?",
    answer: "No, Jiber is non-custodial. Your funds remain entirely under your control in your own wallet.",
  },
  {
    question: "How fast are transaction settlements?",
    answer: "Transactions are processed instantly on-chain with real-time updates and minimal delay.",
  },
  {
    question: "What security measures are in place?",
    answer: "We use audited smart contracts, modern encryption, and secure wallet connections to protect your assets.",
  },
  {
    question: "Are there any hidden transaction fees?",
    answer: "No hidden fees. You only pay transparent network gas fees and standard minimal service rates.",
  },
  {
    question: "How can I contact customer support?",
    answer: "Our team is available 24/7 via live chat and community channels to help with any questions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-14 px-4 sm:px-6 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl mb-10">
          Frequently Asked{" "}
          <span className="text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md">
            Questions
          </span>
        </h2>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-2">
                <button
                  onClick={() => handleFAQ(index)}
                  className="w-full flex items-center justify-between py-4 text-left transition hover:text-violet-600 focus:outline-none group"
                >
                  <span className="text-lg sm:text-xl font-medium text-slate-900 group-hover:text-violet-600 transition-colors pr-4">
                    {faq.question}
                  </span>

                  <span
                    className={`flex shrink-0 items-center justify-center w-7 h-7 rounded-full border text-base font-medium transition-colors ${
                      isOpen
                        ? "border-violet-600 bg-violet-600 text-white"
                        : "border-slate-300 text-slate-500 group-hover:border-violet-600 group-hover:text-violet-600"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="pb-4 pt-1 text-base sm:text-lg text-slate-600 leading-relaxed transition-all">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}