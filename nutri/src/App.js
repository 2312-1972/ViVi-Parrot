import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import AboutMe from './pages/AboutMe';
import Programmes from './pages/Programmes';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/footer';
const App = () => {
  return (
    
    <Router>
        <Header /> 
       <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Programmes" element={<Programmes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
