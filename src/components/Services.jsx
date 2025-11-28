import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Airport Transfers',
            description: 'Stress-free pickup and drop-off services to and from all major airports. We track your flight to ensure timely service.',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'City Travel',
            description: 'Quick, safe, and easy rides around the city. Perfect for daily commutes, shopping trips, or nights out.',
            image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Corporate Accounts',
            description: 'Professional transport solutions for businesses. Priority booking, monthly invoicing, and executive vehicles.',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">We offer a range of transport solutions tailored to your needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 group">
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
