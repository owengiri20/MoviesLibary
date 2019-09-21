import React, { Component } from 'react';
import "../ComponentStyles/Footer.css";

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer-row-1">
                    <div className="footer-col-1">
                        <a href="">
                            <h1>Back To Top</h1>
                        </a>
                        <a href="">
                            <h1>Explore</h1>
                        </a>
                        <a href="">
                            <h1>MoviesDB</h1>
                        </a>
                        <div className="footer-row-2">
                            <a href="">Facebook</a> -
                            <a href="">Twitter</a> -
                            <a href="">Instagram</a> -
                            <a href="">Youtube</a>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <p>
                            <h1>Designed/Delveloped by: </h1>
                            <a href="">Owen Giri</a> -
                            <a href=""> Github</a> -
                            <a href="">Linkedin</a>
                        </p>


                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;