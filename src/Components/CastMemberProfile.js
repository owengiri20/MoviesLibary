import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../ComponentStyles/CastMemberProfile.css";


class CastMemberProfile extends Component {
    render() {
        return (
            <div className="CastMemberProfile">
                <div className="CastMemberProfile-wrapper">
                    <div className="CastMemberProfile-wrapper-col1">
                        <img src="https://image.tmdb.org/t/p/w780/2qhIDp44cAqP2clOgt2afQI07X8.jpg" alt="" />
                    </div>
                    <div className="CastMemberProfile-wrapper-col2">
                        <h1 className="CastMemberProfile-name">
                            Tom Holland
                        </h1>
                        <p className="CastMemberProfile-dob">
                            2000-20-5
                        </p>
                        <h1 className="bio-title">
                            Biography
                        </h1>
                        <p className="CastMemberProfile-bio">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi voluptas voluptatem facilis expedita mollitia, odio sapiente impedit quam ducimus, quibusdam aspernatur! Totam, iste? Necessitatibus incidunt ipsum suscipit dignissimos. Quae.
                        </p>
                        <Link className="back-btn">
                            {"Back"}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CastMemberProfile;