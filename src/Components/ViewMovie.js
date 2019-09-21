import React, { Component } from 'react';
import "../ComponentStyles/ViewMovie.css"

class ViewMovie extends Component {
    render() {
        return (
            <div className="ViewMovie">
                <div className="ViewMovie-wrapper">
                    <div className="ViewMovie-wrapper-col1">
                        <img src="http://image.tmdb.org/t/p/original///w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg" alt="" />
                    </div>
                    <div className="ViewMovie-wrapper-col2">
                        <h1 className="ViewMovie-title">Avengers: Endgame</h1>
                        <p className="ViewMovie-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit, animi obcaecati commodi tempore nobis fugiat beatae eveniet consequatur nulla odit rerum cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, cupiditate illo!
                        </p>
                        <p className="ViewMovie-rating">
                            Action Adventure</p>
                        <p className="ViewMovie-rating">
                            7.7 &#9734;</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default ViewMovie;