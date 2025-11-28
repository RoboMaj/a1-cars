import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            title: '24/7 Availability',
            description: 'We are always here for you, day or night. Whether it\'s an early morning flight or a late-night ride home.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Best Rates Guaranteed',
            description: 'Competitive pricing with no hidden fees. We offer the best value for your money in the city.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Professional Drivers',
            description: 'Our drivers are licensed, vetted, and experienced professionals dedicated to your safety and comfort.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">Why Choose A1 Cars?</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We are more than just a taxi service. We are your partners in travel, ensuring you reach your destination safely, comfortably, and on time. With years of experience and a commitment to excellence, we have earned the trust of thousands of passengers.
                        </p>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-600 rounded-full p-3 mr-4">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Professional Driver"
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
