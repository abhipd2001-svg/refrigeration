import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import ProjectShowcase from './components/ProjectShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceArea from './components/ServiceArea';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <ProjectShowcase />
        <WhyChooseUs />
        <ServiceArea />
        <HowItWorks />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
