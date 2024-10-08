"use client";

import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi"; // Import Plus and X icons

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null); // Close the currently opened FAQ if it's clicked again
    } else {
      setOpenFaq(index); // Open the clicked FAQ
    }
  };

  const faqData = [
    {
      question:
        "How does Tuition ensure the quality of assistance provided to students?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Dui cursus sit donec pharetra ligula vulputate tellus eget volutpat. Convallis dolor facilisis ut sed felis adipiscing duis massa. Morbi ornare penatibus ac viverra. Aliquet ultrices.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Dui cursus sit donec pharetra ligula vulputate tellus eget volutpat. Convallis dolor facilisis ut sed felis adipiscing duis massa. Morbi ornare penatibus ac viverra. Aliquet ultrices.",
    },
    {
      question:
        "How long will it take for my institution to receive the payment?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Dui cursus sit donec pharetra ligula vulputate tellus eget volutpat. Convallis dolor facilisis ut sed felis adipiscing duis massa. Morbi ornare penatibus ac viverra. Aliquet ultrices.",
    },
    {
      question: "How can I confirm that my school has received the payment?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Dui cursus sit donec pharetra ligula vulputate tellus eget volutpat. Convallis dolor facilisis ut sed felis adipiscing duis massa. Morbi ornare penatibus ac viverra. Aliquet ultrices.",
    },
  ];

  return (
    <section className='container mx-auto p-4 mb-28'>
      <h1 className='text-textColor text-80px text-center font-millik font-normal mx-24'>
        Frequently Asked Questions
      </h1>

      <div className='container mx-auto px-8 pt-10 '>
        {faqData.map((faq, index) => (
          <div key={index} className='border-b border-gray-300 py-10 '>
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => toggleFaq(index)}
            >
              <h3 className='text-2xl font-medium text-textColor'>
                {faq.question}
              </h3>
              <span className='text-xl  '>
                {openFaq === index ? (
                  <FiX className='bg-black text-white rounded-full ' />
                ) : (
                  <FiPlus className='bg-gray-300 rounded-full ' />
                )}{" "}
                {/* Use Icons */}
              </span>
            </div>
            {openFaq === index && (
              <p className='mt-3 text-lg text-textColor'>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
