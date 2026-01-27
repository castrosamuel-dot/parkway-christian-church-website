import { motion } from 'framer-motion';

const StatementOfFaith = () => {
    const beliefs = [
        {
            title: "The Bible",
            content: "We believe that the Bible is God's Word. It is accurate, authoritative and applicable to our every day lives."
        },
        {
            title: "God",
            content: "We believe in one eternal God who is the Creator of all things. He exists in three Persons: God the Father, God the Son and God the Holy Spirit. He is totally loving and completely holy."
        },
        {
            title: "Humanity & Sin",
            content: "We believe that sin has separated each of us from God and His purpose for our lives."
        },
        {
            title: "Jesus Christ",
            content: "We believe that the Lord Jesus Christ as both God and man is the only One who can reconcile us to God. He lived a sinless and exemplary life, died on the cross in our place, and rose again to prove His victory and empower us for life."
        },
        {
            title: "Salvation",
            content: "We believe that in order to receive forgiveness and the 'new birth' we must repent of our sins, believe in the Lord Jesus Christ, and submit to His will for our lives."
        },
        {
            title: "The Holy Spirit",
            content: "We believe that in order to live the holy and fruitful lives that God intends for us, we need to be baptised in water and be filled with the power of the Holy Spirit. The Holy Spirit enables us to use spiritual gifts, including speaking in tongues."
        },
        {
            title: "The Church",
            content: "We believe in the power and significance of the Church and the necessity of believers to meet regularly together for fellowship, prayer and the 'breaking of bread'."
        },
        {
            title: "Purpose",
            content: "We believe that God has individually equipped us so that we can successfully achieve His purpose for our lives which is to worship God, fulfil our role in the Church and serve the community in which we live."
        }
    ];

    return (
        <div className="bg-[#e3e3e3] min-h-screen text-brand-black pt-20">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-[#e3e3e3] border-b border-gray-300">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-brand-black"
                    >
                        WHAT WE <span className="text-brand-red">BELIEVE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Our faith is anchored in scripture and centered on Jesus. Here is a summary of our core beliefs.
                    </motion.p>
                </div>
            </section>

            {/* Beliefs Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                        {beliefs.map((belief, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group"
                            >
                                <h3 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
                                    <span className="text-brand-red text-sm font-mono opacity-50">0{index + 1}</span>
                                    {belief.title}
                                </h3>
                                <div className="h-px w-full bg-gradient-to-r from-brand-red/50 to-transparent mb-4 transform origin-left transition-transform duration-500 group-hover:scale-x-110" />
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {belief.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Statement */}
            <section className="py-20 bg-[#e3e3e3]">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-brand-black">WANT TO KNOW MORE?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            We explore these truths every week in our services and Life Groups.
                        </p>
                        <button className="bg-brand-red text-white py-3 px-8 rounded font-bold hover:bg-red-700 transition-colors">
                            PLAN A VISIT
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default StatementOfFaith;
