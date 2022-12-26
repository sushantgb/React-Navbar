import React from 'react';
import './style.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Error from './Components/Pages/Error';
import Navbar from './Components/Navbar/Navbar';
//import {Route, Switch} from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* in v6 we cannot use component, therefore we need to use element instead */}
        {/*         <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        {/* for error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
