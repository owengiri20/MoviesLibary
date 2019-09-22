import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../ComponentStyles/CastProfileCard.css";


class CastProfileCard extends Component {
    render() {
        const { name, role, poster } = this.props
        return (
            <Link to={`/ViewMovie/1`} class="CastCard">
                <img src={poster} alt={name} />
                <p class="CastCard-name">{name}</p>
                <p class="CastCard-genre">{role}</p>
            </Link>
        );
    }
}

export default CastProfileCard;