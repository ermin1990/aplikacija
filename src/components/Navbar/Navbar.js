import React from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Design Todo Aplikacija</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName={styles.active} className="nav-link">Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/todos" activeClassName={styles.active} className="nav-link">Zadaci</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink to="/newtodo" activeClassName={styles.active} className="nav-link">Novi zadatak</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" activeClassName={styles.active} className="nav-link">O aplikaciji</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
