import React, { useState, useEffect } from 'react'
import Landing from './Components/Landing';
import Header from './Components/Header'
import './css/Navbar.css';
import './css/Landing.css';
import './css/About.css';
import './css/App.css';
import './css/Footer.css';
import './css/Media.css';
import './css/Contact.css';
import './css/Service.css';
import './css/Graduate.css';
import './css/Why.css';
import './css/Signup.css';
import './css/Login.css';
import './css/Month.css';
import './css/Subject.css';
import './css/Campus.css';
import './css/Refer.css';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Graduate from './Components/Graduate';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Month from './Components/Month';
import Subject from './Components/Subject';
import Campus from './Components/Campus';
import Refer from './Components/Refer';

const App = () => {

  return (
    <>

      <Header />

      <Routes>
        <Route exact path="/" element={<Landing />}>

        </Route>

        <Route exact path="/about" element={<About />}>

        </Route>
        <Route exact path="/service" element={<Service />}>

        </Route>
        <Route exact path="/contact" element={<Contact />}>

        </Route>
        <Route exact path="/graduate" element={<Graduate />} >

        </Route>
        <Route exact path="/signup" element={<Signup />}>

        </Route>
        <Route exact path="/login" element={<Login />}>

        </Route>
        <Route exact path="/month" element={<Month />}>

        </Route>
        <Route exact path="/subject" element={<Subject />}>

        </Route>
        <Route exact path="/campus" element={<Campus />}>

        </Route>
        <Route exact path="/refer" element={<Refer />}>

        </Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App