import React, { Component } from 'react';
import API_KEY from "../Helpers/key";
import MovieCard from "./MovieCard";

import { genres, getGenres } from "../Helpers/genres";
import "../ComponentStyles/MovieList.css";


class MoviesWorkedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesList: []
        }
    }

    componentDidMount() {
        this.getMovies(this.props.id)
    }

    async getMovies(id) {
        await fetch(`
        https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                return res.json()
            }).then(data => {
                this.setState({ moviesList: data.cast })
            });
    }

    displayMovies() {
        return this.state.moviesList
            .map(movie => {
                return (
                    <MovieCard
                        movieId={movie.id}
                        movieTitle={`${movie.title} (${movie.release_date ? movie.release_date.substring(0, 4) : "-"})`}
                        movieGenre={getGenres(movie.genre_ids)}
                        movieRating={movie.vote_average}
                        moviePoster={`http://image.tmdb.org/t/p/original//${movie.poster_path}`}
                    />)
            })
    }
    render() {
        if (this.state.moviesList.length > 0) {
            return (
                <section class="MovieList container">
                    <h1 class="MovieList-title big-text">Appeared In</h1>
                    <div class="MovieList-carousel">
                        {/* <!-- Popular carousel goes here --> */}
                        {this.displayMovies()}

                    </div>
                </section>
            );
        }
        return <div>lol</div>

    }
}

export default MoviesWorkedIn;