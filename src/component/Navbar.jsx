import React, { useState } from 'react';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 flex items-center justify-between">
                            <img src="/logo.png" alt="logo" height="50px" width="200px" />
                            <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-black">
                                <span className="sr-only">Open Menu</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        <nav className="hidden lg:flex gap-12 mr-10">
                            <a href="#home" className="text-[#002b3f] font-semibold hover:underline">Home</a>
                            <a href="#services" className="text-[#002b3f] font-semibold hover:underline">Services</a>
                            <a href="#courses" className="text-[#002b3f] font-semibold hover:underline">Courses</a>
                            <a href="#team" className="text-[#002b3f] font-semibold hover:underline">Team</a>
                            <a href="#testimonials" className="text-[#002b3f] font-semibold hover:underline">testimonials</a>
                        </nav>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <nav className="lg:hidden bg-gray-100">
                        <a href="#home" className="block px-4 py-2 text-[#002b3f] font-semibold hover:underline">Services</a>
                        <a href="#services" className="block px-4 py-2 text-[#002b3f] font-semibold hover:underline">Features</a>
                        <a href="#courses" className="block px-4 py-2 text-[#002b3f] font-semibold hover:underline">Courses</a>
                        <a href="#team" className="block px-4 py-2 text-[#002b3f] font-semibold hover:underline">Team</a>
                        <a href="#testimonials" className="block px-4 py-2 text-[#002b3f] font-semibold hover:underline">testimonials</a>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navigation;
