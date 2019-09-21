import React, { Component } from 'react';
import "../ComponentStyles/MovieCard.css"

class MovieCard extends Component {
    render() {
        const { movieTitle, movieRating, movieGenre, moviePoster } = this.props;
        return (
            <div class="MovieCard">
                <img src={moviePoster} alt={movieTitle} />
                <p class="MovieCard-name">{movieTitle}</p>
                <p class="MovieCard-genre">{movieGenre}</p>
                <p class="MovieCard-rating">{movieRating}&#9734;</p>
            </div>
        );
    }
}

export default MovieCard;