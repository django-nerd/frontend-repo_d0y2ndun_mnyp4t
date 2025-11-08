import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import JoinNow from './components/JoinNow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070a13] text-white antialiased">
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <JoinNow />
      <Footer />
    </div>
  );
}

export default App;
