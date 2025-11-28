import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">A1 Cars</div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                    <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
                    <a href="#booking" className="text-gray-700 hover:text-blue-600 transition">Book Now</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#booking" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Book Now</a>
                    <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            )}
        </header>
    );
};

export default Header;
