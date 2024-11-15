import React, { useState } from "react";
import {ArrowRight} from "lucide-react";

const testimonials = [
  {
    text: "Travel Air provided us with an excellent booking platform that significantly improved our customers' experience. The user interface is seamless, and the team was always ready to assist with any modifications we needed. Highly recommend!",
    name: "Adeel Butt",
    position: "CEO, Travel Air",
  },
  {
    text: "The PITT platform transformed the way we manage and track our project development lifecycle. It’s fast, intuitive, and tailored to meet the specific needs of our team. A game-changer for our organization!",
    name: "Kashan",
    position: "CEO, PITT",
  },
  {
    text: "Yousaf Travels' collaboration with Structures Limited helped us create an online booking system that boosted our efficiency and customer satisfaction. The site is easy to navigate, and we’ve received nothing but positive feedback from our users.",
    name: "Asim",
    position: "Management Director, Yousaf Travels",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div id="testimonials" className="bg-gray-100 p-8 flex justify-center items-center">
      <div className="flex flex-col w-full max-w-5xl space-y-12 relative">
        
        <div className="w-full space-y-4">
          <p className="text-gray-600 text-center">
            "{currentTestimonial.text}"
          </p>
          <p className="font-bold text-[#002b3f] text-center">
            {currentTestimonial.name}
          </p>
          <p className="text-gray-500 text-center">
            {currentTestimonial.position}
          </p>
        </div>

        <div className="flex justify-end">
          <button 
            onClick={handleNext} 
            className="px-4 py-2 text-[#002b3f] rounded-md transition flex items-center">
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
