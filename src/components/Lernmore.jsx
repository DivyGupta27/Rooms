import React from 'react';
import { FaWifi, FaSwimmingPool, FaUtensils, FaParking, FaSpa, FaConciergeBell } from 'react-icons/fa';

const LearnMore = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-rose-700 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Our World-Class Hospitality</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Experience luxury, comfort, and exceptional service at our premier hotel destinations worldwide.
                    </p>
                </div>
            </div>

            {/* About Us Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="lg:flex items-center gap-12">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <img
                            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
                            alt="Luxury Hotel"
                            className="rounded-xl shadow-2xl w-full h-auto"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Founded in 2010, we've grown from a single boutique hotel to an international chain with properties in 12 countries.
                            Our mission is to create unforgettable experiences by combining local culture with world-class service.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            Each of our properties is carefully designed to reflect the unique character of its location while maintaining
                            the consistent quality and comfort our guests expect.
                        </p>
                        <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-lg transition">
                            Explore Our Properties
                        </button>
                    </div>
                </div>
            </div>

            {/* Amenities Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Amenities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaWifi size={40} />, title: "High-Speed WiFi", description: "Complimentary high-speed internet throughout the property" },
                            { icon: <FaSwimmingPool size={40} />, title: "Infinity Pool", description: "Stunning pool with panoramic views and poolside service" },
                            { icon: <FaUtensils size={40} />, title: "Gourmet Dining", description: "Award-winning restaurants with locally-sourced ingredients" },
                            { icon: <FaParking size={40} />, title: "Valet Parking", description: "Complimentary valet service for all guests" },
                            { icon: <FaSpa size={40} />, title: "Luxury Spa", description: "Full-service spa with world-class treatments" },
                            { icon: <FaConciergeBell size={40} />, title: "24/7 Concierge", description: "Personalized service for all your needs" },
                        ].map((amenity, index) => (
                            <div key={index} className="bg-rose-50 p-8 rounded-xl text-center hover:shadow-lg transition">
                                <div className="text-rose-600 mb-4 flex justify-center">{amenity.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                                <p className="text-gray-600">{amenity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Guests Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "The attention to detail was incredible. From the moment we arrived, we felt like VIPs.",
                                author: "Sarah Johnson",
                                location: "New York, USA"
                            },
                            {
                                quote: "Best hotel experience of my life. The infinity pool at sunset is something I'll never forget.",
                                author: "Michael Chen",
                                location: "Toronto, Canada"
                            },
                            {
                                quote: "The staff went above and beyond to make our anniversary special. We'll definitely be back!",
                                author: "Emma & David Wilson",
                                location: "London, UK"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                                <p className="font-semibold">{testimonial.author}</p>
                                <p className="text-gray-500 text-sm">{testimonial.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-rose-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready for an Unforgettable Stay?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Book your dream vacation today and experience hospitality at its finest.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white text-rose-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition">
                            Book Now
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-rose-700 font-semibold py-3 px-8 rounded-lg transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;