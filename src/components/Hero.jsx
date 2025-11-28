import React from 'react';

const TestHero2 = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
                }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

            <div className="container mx-auto px-4 z-20 text-center relative">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
                        Reliable & <span className="text-blue-500">Comfortable</span> <br /> Taxi Service
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
                        Your journey, our priority. Experience premium travel with A1 Cars.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="#booking"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                        >
                            Book a Ride
                        </a>
                        <a
                            href="#services"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestHero2;
