import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components_Navbar/Navbar.js';
import  './components_Navbar/Navbar.css';
import Intro from './components_Navbar/Intro/Intro.js';
import About from './components_Navbar/About/About.js';
import Resume from './components_Navbar/Resume/Resume';
import Project from './components_Navbar/Project/Project';
import Contact from './components_Navbar/Contact/Contact';
// import { createBrowserRouter, createRoutesFromElements, Route, Link } from 'react-router-dom'; 'react-router-dom';
import {Routes, Route } from "react-router-dom"

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  return(    
    <div className="App">
       <Navbar/>
         <Routes>
           <Route path="/" element={<Intro/>}/>
           <Route path="/about" element={<About />} />
           <Route path="/resume"element={<Resume/>}/>
           <Route path="/project"element={<Project/>}/>
           <Route path="/contact"element={<Contact/>}/>
          
   </Routes> 
      
      {/* <Intro/>
      <About/>
      <Resume/>
      <Project/>
      <Contact/> */}
    </div>
    
  );
 }


export default App;
