import React from "react";

const services = [
  {
    name: "Website Development",
    logo: "🌐",
    description: "Building responsive and dynamic websites. Also custom Shopify and WordPress solutions.",
  },
  {
    name: "Content Writing",
    logo: "✍️",
    description: "Creating engaging and SEO-friendly content.",
  },
  {
    name: "SEO",
    logo: "🔍",
    description: "Optimize websites for search engines.",
  },
  {
    name: "Video Editing",
    logo: "🎬",
    description: "Professional video editing services.",
  },
  {
    name: "Graphic Designing",
    logo: "🖼️",
    description: "Stunning visuals and branding designs.",
  },
  {
    name: "Animation/Motion Graphics",
    logo: "🎥",
    description: "High-quality animation and motion graphics.",
  },
  {
    name: "Social Media Marketing",
    logo: "📢",
    description: "Boost your presence on social media platforms.",
  },
  {
    name: "Mobile Application Development",
    logo: "📱",
    description: "Building innovative mobile applications.",
  },
];

const ServicesPage = () => {
  return (
    <div
      id="services"
      className="p-10 flex flex-col justify-center items-center min-h-screen"
    >
      <h2 className="text-3xl font-bold text-[#002b3f] text-center mb-8">
        Services We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:bg-[#002b3f] hover:text-white group"
          >
            <div className="absolute top-0 left-0 w-full h-[50px] bg-[#002b3f] rounded-t-lg"></div>

            <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 text-4xl mb-4 text-center">
              {service.logo}
            </div>
            <h3 className="text-xl font-bold text-center mt-12 mb-4 text-[#002b3f] group-hover:text-white">
              {service.name}
            </h3>
            <p className="text-center text-gray-500 text-lg group-hover:text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
