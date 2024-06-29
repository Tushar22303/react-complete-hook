import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Home from './Home';
import About from './About';
import Section from './Section';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        document.title = scrolled ? 'Scrolled Navbar' : 'Navbar';
    }, [scrolled]);

    return (
        <>
            <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className="navbar__logo">My Navbar</div>
                <ul className='nav_menu'>
                    <li className='nav__item'>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to="about" duration={500} smooth={true}>About</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to="section" duration={500} smooth={true}>Section</Link>
                    </li>
                </ul>
            </div>

            <Home />
            <About />
            <Section />
        </>
    )
}

export default Navbar