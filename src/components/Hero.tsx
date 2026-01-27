import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="People gathering"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">

                {/* Main Title - Roboto with Frame */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-roboto text-brand-red text-5xl md:text-8xl font-bold uppercase tracking-widest border-4 border-brand-red px-8 py-4 mb-6 select-none bg-black/20 backdrop-blur-sm"
                >
                    Parkway Christian Church
                </motion.h1>

                {/* Subtitle - Script Font */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-['Dancing_Script'] text-white text-4xl md:text-6xl transform -rotate-3"
                >
                    Come, Journey With Us
                </motion.h2>

            </div>
        </section>
    );
};

export default Hero;
