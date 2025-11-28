import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">A1 Cars</h3>
                        <p className="text-gray-400">
                            Providing reliable and comfortable taxi services for all your travel needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                            <li><a href="#booking" className="text-gray-400 hover:text-white transition">Book Now</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Phone: +1 234 567 8900</li>
                            <li>Email: info@a1cars.com</li>
                            <li>Address: 123 Taxi Lane, Cityville</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} A1 Cars. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
