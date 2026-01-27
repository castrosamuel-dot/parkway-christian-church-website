import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { photoGalleries } from '../data/photoGalleries';

const Gallery = () => {
    return (
        <div className="bg-brand-black min-h-screen pt-20 text-white">
            {/* Hero Section */}
            <section className="relative w-full bg-black py-20 border-b border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
                    >
                        PHOTO <span className="text-brand-red">GALLERY</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Capturing moments from our community, worship, and events.
                    </motion.p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-brand-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {photoGalleries.map((gallery, index) => (
                            <motion.a
                                key={gallery.id}
                                href={gallery.googlePhotosUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group block relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-zinc-900 border border-white/10 hover:border-brand-red/50 transition-colors"
                            >
                                {/* Cover Image */}
                                <img
                                    src={gallery.coverImage}
                                    alt={gallery.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">
                                        {gallery.title}
                                    </h3>
                                    <div className="flex items-center text-sm font-semibold text-gray-300 uppercase tracking-wider gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        View Album <ExternalLink size={16} />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
