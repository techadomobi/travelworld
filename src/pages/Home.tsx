import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import BestsellingPackages from '../components/BestsellingPackages';
import StatsSection from '../components/StatsSection';
import TopDestinations from '../components/TopDestinations';
import ExperienceCategories from '../components/ExperienceCategories';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
