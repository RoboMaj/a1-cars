import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import TestHero from './components/TestHero';
// import TestHero2 from './components/TestHero2';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        {/* <TestHero /> */}
        {/* <TestHero2 /> */}
        <Services />
        <WhyChooseUs />
        <BookingForm />
        {/* <div className="p-10 text-center">App Loaded</div> */}
      </main>
      <a target="_blank" href="https://icons8.com/icon/qRo6mXkL8iFE/car">Car</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      <Footer />
    </div>
  );
}

export default App;
