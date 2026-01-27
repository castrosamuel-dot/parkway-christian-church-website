import { motion } from 'framer-motion';
import { videoPlaylists } from '../data/videoPlaylists';

const Videos = () => {
    return (
        <div className="bg-brand-black min-h-screen pt-20 text-white">
            {/* Hero Section */}
            <section className="relative w-full bg-black py-12 md:py-20 border-b border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
                    >
                        VIDEO <span className="text-brand-red">ARCHIVES</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Explore our collection of message series, worship moments, and special events.
                    </motion.p>
                </div>
            </section>

            {/* Playlists Section */}
            <section className="py-16 bg-brand-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto flex flex-col gap-20">
                        {videoPlaylists.map((playlist, index) => (
                            <motion.div
                                key={playlist.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="w-full"
                            >
                                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-800 pb-4">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                            {playlist.title}
                                        </h2>
                                        {playlist.description && (
                                            <p className="text-gray-400 mt-2 text-sm md:text-base">{playlist.description}</p>
                                        )}
                                    </div>
                                    <a
                                        href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-brand-red hover:text-white transition-colors font-semibold uppercase text-xs tracking-widest whitespace-nowrap"
                                    >
                                        View Playlist &rarr;
                                    </a>
                                </div>

                                <div className="relative aspect-video md:aspect-[21/9] w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
                                    <iframe
                                        src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`}
                                        title={playlist.title}
                                        className="absolute top-0 left-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    >
                                    </iframe>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Videos;
