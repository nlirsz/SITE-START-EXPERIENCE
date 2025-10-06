import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';
import { BenefitsSection } from './components/BenefitsSection';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <BenefitsSection />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}