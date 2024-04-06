import React, { useState } from "react";
import { faq } from "../../assets/fakedata/faq";

const FAQ = () => {
  const [faqs, setFaqs] = useState(faq);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].expanded = !updatedFaqs[index].expanded;
    setFaqs(updatedFaqs);
  };

  return (
    <>
      <div className="sm:px-14 px-6 py-16 mb-5">
        <h1 className="font-semibold text-center text-[27px] text-primary">
          Frequently asked questions
        </h1>
        <div>
          <ul className="mt-8">
            {faqs.map((faq, index) => (
              <li key={index} className="bg-[#FAF8FF] px-5 py-8 rounded-lg mb-4">
                <button
                  className={`relative flex gap-2 items-center w-full text-[22px] text-left md:text-lg  ${
                    faq.expanded && "text-primary leading-[28px] font-medium"
                  }`}
                  aria-expanded={faq.expanded}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`flex-1 font-medium text-[22px]`}>
                    {faq.question}
                  </span>
                  {faq.expanded ? "-" : "+"}
                </button>
                <div
                  className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
                  style={{ maxHeight: faq.expanded ? "1000px" : "0" }}
                >
                  <div className="pb-5 leading-relaxed">
                    <p className="space-y-2 leading-[30px] text-[#6F6C90] text-[18px] mt-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FAQ;
