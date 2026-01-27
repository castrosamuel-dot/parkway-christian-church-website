import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold tracking-tighter uppercase">
                    PARKWAY <span className="text-brand-red">CHRISTIAN</span> CHURCH
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
                    <a href="#" className="hover:text-brand-red transition-colors">WHO WE ARE</a>
                    <a href="#" className="hover:text-brand-red transition-colors">GET CONNECTED</a>
                    <a href="#" className="hover:text-brand-red transition-colors">MESSAGES</a>
                    <a href="#" className="hover:text-brand-red transition-colors">GIVE</a>
                    <button className="bg-brand-red px-6 py-2 rounded text-white font-bold hover:bg-red-700 transition-colors">
                        LIVE
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-red">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-md md:hidden flex flex-col items-center py-8 space-y-6 shadow-xl"
                    >
                        <a href="#" className="text-lg font-semibold hover:text-brand-red" onClick={() => setIsOpen(false)}>WHO WE ARE</a>
                        <a href="#" className="text-lg font-semibold hover:text-brand-red" onClick={() => setIsOpen(false)}>GET CONNECTED</a>
                        <a href="#" className="text-lg font-semibold hover:text-brand-red" onClick={() => setIsOpen(false)}>MESSAGES</a>
                        <a href="#" className="text-lg font-semibold hover:text-brand-red" onClick={() => setIsOpen(false)}>GIVE</a>
                        <button className="bg-brand-red px-8 py-3 rounded text-white font-bold hover:bg-red-700 transition-colors w-3/4">
                            LIVE
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
