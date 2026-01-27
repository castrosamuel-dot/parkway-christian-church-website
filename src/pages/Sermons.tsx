import { motion } from 'framer-motion';

const Sermons = () => {
    // Placeholder Playlist ID
    const PLAYLIST_ID = 'PLNHewxce_fZdpvuZF8T5jmNN7BaMWeCyd';

    return (
        <div className="bg-brand-black min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative w-full bg-black py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4"
                    >
                        PREVIOUS <span className="text-brand-red">MESSAGES</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Catch up on what you missed. Watch our recent sermons and series.
                    </motion.p>
                </div>
            </section>

            {/* Playlist Section */}
            <section className="py-16 bg-brand-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-800 pb-4">
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">
                                    SERMON <span className="text-brand-red">ARCHIVE</span>
                                </h2>
                            </div>
                            <a href="https://www.youtube.com/@ParkwayChristianChurch" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 text-brand-red hover:text-white transition-colors font-semibold uppercase text-sm tracking-widest">
                                View Channel on YouTube &rarr;
                            </a>
                        </div>

                        {/* Playlist Embed */}
                        <div className="w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="relative aspect-video md:aspect-[21/9] w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800"
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
                                    title="Parkway Christian Church Previous Messages"
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                >
                                </iframe>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sermons;
