import React from "react";

const ClientSection = () => {
  const logos = [
    "yousaf.png",
    "air.jpg",
    "auic.png",
    "iu.png",
    "numl.jpg",
    "pitt.png",
    "travelair.png"
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#002b3f]">Our Clients & Partners</h1>
      </div>

      <div className="mx-auto w-full px-6 sm:px-10 flex flex-wrap justify-center gap-10 cursor-pointer">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-2 rounded-full border-4 border-gray-200 w-20 h-20 sm:w-24 sm:h-24"
          >
            <img
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="rounded-full object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
