import Hero from '../components/Hero';
import ServiceTimes from '../components/ServiceTimes';
import GridSection from '../components/GridSection';
import QuoteBanner from '../components/QuoteBanner';
import NextGen from '../components/NextGen';
import CurrentSeries from '../components/CurrentSeries';

const Home = () => {
    return (
        <main>
            <Hero />
            <ServiceTimes />
            <GridSection />
            <QuoteBanner />
            <NextGen />
            <CurrentSeries />
        </main>
    );
};

export default Home;
