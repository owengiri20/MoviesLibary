import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../ComponentStyles/MovieCard.css"

class MovieCard extends Component {
    render() {
        const { movieTitle, movieRating, movieGenre, moviePoster, movieId } = this.props;
        return (
            <Link to={`/ViewMovie/${movieId}`} class="MovieCard">
                <img src={moviePoster} alt={movieTitle} />
                <p class="MovieCard-name">{movieTitle}</p>
                <p class="MovieCard-genre">{movieGenre}</p>
                <p class="MovieCard-rating">{movieRating}&#9734;</p>
            </Link>
        );
    }
}

export default MovieCard;