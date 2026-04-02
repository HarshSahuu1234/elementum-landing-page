import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-purple-200" style={{ background: '#ffffff' }}>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;