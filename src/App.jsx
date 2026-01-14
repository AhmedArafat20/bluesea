import './styles/theme.css'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStory from "./sections/OurStory";
import WhoWeAre from "./sections/WhoWeAre";
import OurVision from './sections/OurVision';
import CoreValues from './sections/CoreValues';
import Services from './sections/Services';
import WhyWeStandOut from './sections/WhyWeStandOut';
import HealthSafety from './sections/HealthSafety';
import Projects from './sections/Projects';
import OurPartners from './sections/OurPartners';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from "./context/LanguageContext";
function App() {
  return (
    <>
      <LanguageProvider>
      <Navbar />
      <Hero />
      <OurStory />
      <WhoWeAre />
      <OurVision />
      <CoreValues />
      <Services />
      <WhyWeStandOut />
      <HealthSafety />
      <Projects />
        <OurPartners />
        <Contact />
        <Footer />
        </LanguageProvider>
    </>
  );
}

export default App;


