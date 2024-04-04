//This file is basically our Landing Page/Home page. We can add routes to other pages from here.

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './App.css'; --> don't think we need this?
import Home from './components/Home';
import Footer from './components/Footer';
import { GlobalProvider } from './utilities/addFavFunctions';
import Favorite from './pages/Favorites';
import About from './pages/About';
import SingleMovie from './pages/SingleMovie';
import Nav from './components/Nav';


function App() {
   

  return (
    <Router basename={'/ourmoviedb'}>
      <GlobalProvider> {/* Wrap your components with GlobalProvider */}
        <div>
          <Nav />

          <div className="movie-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<SingleMovie />} />
              <Route path='/about' element={<About />} />
              <Route path='/my-favorites' element={<Favorite />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;




