import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
// import Content from './components/Content';
import Footer from './components/footer' ;
import './App.css';  

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <About />
            {/* <Content /> */}
            <Footer />
        </div>
    );
}

export default App;
