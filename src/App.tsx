import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceTimes from './components/ServiceTimes';
import GridSection from './components/GridSection';
import QuoteBanner from './components/QuoteBanner';
import NextGen from './components/NextGen';
import CurrentSeries from './components/CurrentSeries';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <ServiceTimes />
        <GridSection />
        <QuoteBanner />
        <NextGen />
        <CurrentSeries />
      </main>
      <Footer />
    </div>
  );
}

export default App;
