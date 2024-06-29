
import { Navbar } from './components/Navbar/Navbar.jsx';
import React from 'react';
import { Profile } from './components/profile/profile.jsx'
import './App.css';
import { About } from './components/AboutUs/aboutUs.jsx';
import { Contact } from './components/contact/contact.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar>
        </Navbar>
        <Profile></Profile>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>


      </div>
    </BrowserRouter>
  );
}
export default App;

