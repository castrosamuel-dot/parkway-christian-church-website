import React from 'react';

const CurrentSeries: React.FC = () => {
    return (
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
            {/* Split Background */}
            <div className="absolute inset-0 flex flex-col md:flex-row">
                {/* Left Side - Blue Gradient/Image */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-600 relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                        alt="Blue landscape"
                    />
                </div>

                {/* Right Side - Yellow/Gold Image */}
                <div className="w-full md:w-1/2 relative bg-yellow-500">
                    <img
                        src="https://images.unsplash.com/photo-1533227297464-9be1a72d73f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Golden field"
                    />
                </div>
            </div>

            {/* Skewed Divider (CSS Trick) */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-40 bg-transparent hidden md:block" style={{ transform: 'skewX(-15deg)' }}>
                {/* This is hard to perfect with just one div, simpler approach: overlapping overlay */}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center h-full py-12">
                <div className="w-full md:w-1/2 text-white pr-0 md:pr-12 lg:pr-24">
                    <h3 className="text-brand-red font-bold tracking-widest uppercase mb-2">Our Current Series</h3>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
                        First<br />Things<br />First
                    </h2>
                    <p className="text-sm md:text-base opacity-90 leading-relaxed mb-8 max-w-lg">
                        When we put God first—in our priorities, our practices, and our posture—He brings divine order, provision, and purpose to our lives. Through seeking His kingdom, fasting in dependence, giving with open hands, and praying with surrendered hearts, we realign our world around His will.
                    </p>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button className="bg-brand-red text-white py-3 px-6 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
                            Watch Our Latest Message
                        </button>
                        <button className="bg-brand-red text-white py-3 px-6 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
                            View The Playlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentSeries;
