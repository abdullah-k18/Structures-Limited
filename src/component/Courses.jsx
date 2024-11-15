import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Courses = [
  { name: "Web Development", description: "Master HTML, CSS, and JavaScript to create dynamic, responsive websites.", icon: "💻" },
  { name: "Shopify Development", description: "Build custom e-commerce stores using Shopify.", icon: "🛍️" },
  { name: "WordPress Development", description: "Develop and customize websites using WordPress.", icon: "🌐" },
  { name: "Freelancing", description: "Learn how to build a successful freelance career and secure clients.", icon: "💼" },
  { name: "Content Writing", description: "Write engaging content with a focus on SEO.", icon: "✍️" },
  { name: "Microsoft Office (Basic IT)", description: "Gain essential skills in Microsoft Office applications like Word, Excel, and PowerPoint.", icon: "📊" },
  { name: "Cybersecurity", description: "Learn how to protect websites and systems from cyber threats.", icon: "🔒" },
  { name: "Artificial Intelligence", description: "Explore the fundamentals of AI and its applications in various fields.", icon: "🤖" },
  { name: "Machine Learning", description: "Dive into machine learning algorithms and their practical use cases.", icon: "📈" },
  { name: "Software Development", description: "Develop robust software solutions from the ground up.", icon: "🖥️" },
  { name: "Mobile Application Development", description: "Learn to develop mobile apps for both iOS and Android.", icon: "📱" },
  { name: "Canva Designing", description: "Create stunning graphics using Canva for professional use.", icon: "🎨" },
  { name: "Video Editing", description: "Learn professional video editing techniques.", icon: "🎬" },
  { name: "UI/UX Designing", description: "Design user-friendly and aesthetically pleasing interfaces.", icon: "🖌️" },
  { name: "Graphic Designing", description: "Master the art of visual communication through design.", icon: "🖼️" },
  { name: "Motion Graphics", description: "Create eye-catching animations and motion graphics.", icon: "🎥" },
  { name: "Social Media Marketing", description: "Boost your brand’s presence through effective social media strategies.", icon: "📢" },
  { name: "English Spoken", description: "Enhance your English-speaking skills with expert guidance.", icon: "🗣️" },
  { name: "SEO", description: "Optimize websites to rank higher on search engine results.", icon: "🔍" },
  { name: "Data Science", description: "Analyze data to gain valuable business insights.", icon: "📊" },
  { name: "Animation", description: "Learn the art of creating animated videos.", icon: "🎞️" },
];

const CoursesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setCardsPerView(1);
    } else if (window.innerWidth < 1024) {
      setCardsPerView(2);
    } else {
      setCardsPerView(4);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + cardsPerView < Courses.length) {
        return prevIndex + 1;
      }
      return 0;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return Courses.length - cardsPerView;
    });
  };

  useEffect(() => {
    const autoSlide = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(autoSlide);
  }, [currentIndex, cardsPerView]);

  return (
    <div id="courses" className="py-12 px-6 sm:px-12 h-screen flex items-center justify-center">
      <div className="text-center w-full">
        <h2 className="text-3xl font-bold text-[#002b3f] mb-8">Courses We Provide</h2>
        <div className="relative flex items-center justify-center">
          <ChevronLeft
            className={`absolute left-4 text-2xl z-10 ${
              currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 cursor-pointer'
            }`}
            onClick={prevSlide}
          />
          <div className="flex overflow-hidden w-full justify-center">
            <div className="flex gap-8">
              {Courses.slice(currentIndex, currentIndex + cardsPerView).map((course, index) => (
                <div
                  key={index}
                  className="bg-white mb-10 p-6 rounded-lg shadow-xl transform cursor-pointer relative w-[250px] sm:w-[300px] flex flex-col items-center"
                >
                  <div className="w-full h-[80px] bg-[#002b3f] rounded-t-lg flex items-center justify-center">
                    <span className="text-4xl">{course.icon}</span>
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-[#002b3f] text-xl font-bold">{course.name}</h3>
                  </div>

                  <p className="text-center text-gray-500 text-sm mt-4">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ChevronRight
            className={`absolute right-4 text-2xl z-10 ${
              currentIndex + cardsPerView >= Courses.length ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 cursor-pointer'
            }`}
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
