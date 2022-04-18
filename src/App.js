import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import MoviDetils from './components/MovieDetils/MoviDetils';
import Home from './components/Home/Home';
import PageNofound from './components/PageNofound/PageNofound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/movie/:imdbID" element={<MoviDetils />} />
            <Route element={<PageNofound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
