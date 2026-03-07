import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import BestsellingPackages from './components/BestsellingPackages';
import StatsSection from './components/StatsSection';
import TopDestinations from './components/TopDestinations';
import ExperienceCategories from './components/ExperienceCategories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SearchSection />
      <BestsellingPackages />
      <StatsSection />
      <TopDestinations />
      <ExperienceCategories />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
