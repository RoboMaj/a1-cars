import React from 'react';

const BookingForm = () => {
    return (
        <section id="booking" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-blue-600 py-6 px-8">
                        <h2 className="text-3xl font-bold text-center text-white">Book Your Ride Now</h2>
                        <p className="text-blue-100 text-center mt-2">Fill out the form below and we'll confirm your booking instantly.</p>
                    </div>

                    <div className="p-4 md:p-8 flex justify-center">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLScbRh6OmVIAsrsK6wyOzDoiXO5i1PRPHvfeIKxQNyCC4qRJRw/viewform?embedded=true"
                            width="640"
                            height="2423"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            className="w-full max-w-full"
                            title="Booking Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
