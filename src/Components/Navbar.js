import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../ComponentStyles/Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <header>
                <Link to="/" className="logo">
                    <h1>Logo</h1></Link >
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <nav>
                    <ul>
                        <li className="search-container">
                            <input className="nav-search" type="text" name="" id="" placeholder="search movie" />
                            <button className="search-btn">Search</button>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <label for="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
            </header>
        );
    }
}

export default Navbar;