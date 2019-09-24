import React, { Component } from 'react';
import API_KEY from "../Helpers/key";
import { genres, getGenres } from "../Helpers/genres";
import "../ComponentStyles/MovieSearchResults.css";
import MovieCard from "./MovieCard";


class MovieSearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.getMovies(this.props.match.params.query)
    }

    async getMovies(query) {
        let result;
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({ movies: data.results })
            })
    }

    displayMovies() {
        return this.state.movies
            .map(movie => {
                return (
                    <MovieCard
                        movieId={movie.id}
                        movieTitle={`${movie.title} (${movie.release_date ? movie.release_date.substring(0, 4) : ""})`}
                        movieGenre={getGenres(movie.genre_ids)}
                        movieRating={movie.vote_average}
                        moviePoster={`http://image.tmdb.org/t/p/original//${movie.poster_path}`}
                    />)
            })
    }

    render() {
        if (this.state.movies != []) {
            return (
                <div className="MovieSearchResults">
                    <div className="MovieSearchResults-wrapper">
                        {this.displayMovies()}
                    </div>
                </div>
            );
        } else {
            return <div>lol</div>
        }

    }
}

export default MovieSearchResults;