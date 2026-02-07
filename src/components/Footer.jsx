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
                            <li>
                                Phone: <a href="tel:07528133960" className="hover:text-white transition">07528133960</a>
                            </li>
                            <li>
                                Email: <a href="mailto:a1taxichippingnorton@gmail.com" className="hover:text-white transition">a1taxichippingnorton@gmail.com</a>
                            </li>
                            <li>Address: 68 Walterbush Road, Chipping Norton, OX7 5DW</li>
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
