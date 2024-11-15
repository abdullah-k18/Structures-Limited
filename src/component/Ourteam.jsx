import React from "react";

const teamMembers = [
  { name: "Malik Ibrahim Awan", position: "CEO", image: "link_to_image" },
  { name: "Saira Ramzan", position: "Managing Director", image: "link_to_image" },
  { name: "Hammad Sajid", position: "Director of Designs and Editing", image: "link_to_image" },
  { name: "Sheraz Ahmad", position: "Finance Officer", image: "link_to_image" },
  { name: "Savaira Adil", position: "Legal Advisor", image: "link_to_image" },
  { name: "Rashid Imran", position: "Admin", image: "link_to_image" },
  { name: "Mubashir Hussain", position: "Business Development Officer", image: "link_to_image" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-12 px-6 sm:px-12 min-h-screen sm:h-auto flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-[#002b3f] text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center bg-white cursor-pointer p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-[#002b3f]">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
