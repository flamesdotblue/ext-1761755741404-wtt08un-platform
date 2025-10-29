import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioPreview from './components/PortfolioPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter antialiased">
      <Header />
      <main>
        <Hero />
        <PortfolioPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
