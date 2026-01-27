
const Live = () => {
    // Placeholder IDs - User needs to update these
    const CHANNEL_ID = 'UCo1RodoIDLtHMXIc_BdIaGQ';
    const PLAYLIST_ID = 'PLNHewxce_fZdpvuZF8T5jmNN7BaMWeCyd';

    return (
        <div className="bg-brand-black min-h-screen pt-20">
            {/* Hero / Live Stream Section */}
            <section className="relative w-full bg-black py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-8 text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                                WATCH <span className="text-brand-red">LIVE</span>
                            </h1>
                            <p className="text-gray-400 text-lg">
                                Join us online for our Sunday services.
                            </p>
                        </div>

                        {/* 16:9 Aspect Ratio Container for Live Stream */}
                        <div className="relative aspect-video w-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                            <iframe
                                src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}`}
                                title="Parkway Christian Church Live Stream"
                                className="absolute top-0 left-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-500">
                                Having trouble viewing? <a href="#" className="text-brand-red hover:underline">Watch directly on YouTube</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Previous Streams / Playlist Section */}
            <section className="py-16 bg-brand-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-800 pb-4">
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">
                                    PREVIOUS <span className="text-brand-red">MESSAGES</span>
                                </h2>
                                <p className="text-gray-400 mt-2">Catch up on what you missed.</p>
                            </div>
                            <a href="https://www.youtube.com/@ParkwayChristianChurch" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 text-brand-red hover:text-white transition-colors font-semibold uppercase text-sm tracking-widest">
                                View All on YouTube &rarr;
                            </a>
                        </div>

                        {/* Playlist Embed */}
                        <div className="w-full">
                            <div className="relative aspect-video md:aspect-[21/9] w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
                                <iframe
                                    src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
                                    title="Parkway Christian Church Previous Messages"
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Live;
