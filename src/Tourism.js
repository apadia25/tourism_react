import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Places from './Places';
import Contact from './Contact';
import About from './About';
import './Tourism.css';
import a from './assets/orange.jpg';
import ab from './assets/orange tours.png'

export default function Tourism() {
    return (
        <>
            <BrowserRouter>
                <div className="bg_container">
                    <nav className="navbar">
                            <div class="nav_links">
                                <Link to="/Home" className='a'>Home</Link>
                                <Link to="/About" className='a'>About Nagpur</Link>
                                <Link to="/Places" className='a'>Places</Link>
                                <Link to="/Contact" className='a'>Contact Us</Link>
                               
                            </div>
                            <img src={ab} width={200} height={100}></img>
                            {/* <h2><span>N</span>
                            <span>A</span>
                            <span>G</span>
                            <span>P</span>
                            <span>U</span>
                            <span>R</span></h2> */}
                            
                            
                    </nav>
                    <Routes>
                        <Route path='/Home' element={<Home />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Places' element={<Places />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Routes>
                </div>
            </BrowserRouter>

        </>
    )
}
