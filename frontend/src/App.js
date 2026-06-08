import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import StudentResults from './components/StudentResults';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

const Landing = () => (
  <div className="App">
    <Header />
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <StudentResults />
      <SignupForm />
    </main>
    <Footer />
    <Toaster />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
