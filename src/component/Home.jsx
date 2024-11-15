import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    titlePartOne: "Delivering Cutting-Edge Solutions",
    titlePartTwo: "At Structures Limited",
    description:
      "At Structures Limited, we specialize in delivering cutting-edge digital solutions across a wide range of services, including web development, mobile app development (React Native, Flutter), AI & machine learning integration, graphic design, and video editing. Our team is committed to creating high-performance, scalable, and innovative applications tailored to meet the unique needs of our clients.",
    video: "https://videos.pexels.com/video-files/3141208/3141208-sd_640_360_25fps.mp4",
  },
  {
    titlePartOne: "Grow Your Business",
    titlePartTwo: "With Our Expert Services",
    description:
      "Take your business to the next level with our comprehensive IT services and consulting. We provide web development, mobile app solutions, and AI integration that can help scale your business and improve performance.",
    video: "https://videos.pexels.com/video-files/3141210/3141210-sd_640_360_25fps.mp4",
  },
  {
    titlePartOne: "Learn & Grow",
    titlePartTwo: "With Our Specialized Courses",
    description:
      "Our courses cover everything from web development to AI & ML, equipping students with the skills they need to succeed in the future. These courses will help you build a strong foundation and advance your career.",
    video: "https://videos.pexels.com/video-files/3129576/3129576-sd_640_360_30fps.mp4",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">

      <div className="absolute inset-0 w-full h-full">
        <video
          src={slides[currentSlide].video}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="block">{slides[currentSlide].titlePartOne}</span>
          <span className="block text-white">{slides[currentSlide].titlePartTwo}</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          {slides[currentSlide].description}
        </p>
      </div>

      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition hidden md:block"
      >
        <ChevronLeft color="white" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hidden md:block transition"
      >
        <ChevronRight color="white" />
      </button>

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-[#002136]" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
