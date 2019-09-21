import React, { Component } from 'react';
import "../ComponentStyles/Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <header>
                <h1 class="logo">Logo</h1>
                <input type="checkbox" id="nav-toggle" class="nav-toggle" />
                <nav>
                    <ul>
                        <li>
                            <input type="text" name="" id="" />
                            <button>Search</button>
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
                <label for="nav-toggle" class="nav-toggle-label">
                    <span></span>
                </label>
            </header>
        );
    }
}

export default Navbar;