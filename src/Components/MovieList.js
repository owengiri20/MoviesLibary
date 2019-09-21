import React, { Component } from 'react';
import MovieCard from "./MovieCard";
import "../ComponentStyles/MovieList.css";


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesList: []
        }
    }

    componentDidMount() {
        this.setMovies();
    }

    async getMovies(apiLink) {
        let result;
        await fetch(apiLink)
            .then(res => {
                return res.json()
            }).then(data => {
                result = data.results;
            });
        return result;
    }

    async setMovies() {
        this.getMovies(this.props.apiLink)
            .then(movies => {
                let moviesToAdd = []
                movies.forEach(movie => {
                    let movieToAdd = {
                        movieTitle: movie.title,
                        movieRating: movie.vote_average,
                        movieGenre: "Action/Adventure",
                        moviePoster: `http://image.tmdb.org/t/p/original//${movie.poster_path}`
                    }
                    moviesToAdd.push(movieToAdd);
                });
                this.setState({ moviesList: moviesToAdd })
            })
        console.log("popop", this.state.moviesList);

    }

    displayMovies() {
        return this.state.moviesList
            .map(movie => {
                return (
                    <MovieCard
                        movieTitle={movie.movieTitle}
                        movieGenre={movie.movieGenre}
                        movieRating={movie.movieRating}
                        moviePoster={movie.moviePoster}
                    />)
            })
    }
    render() {
        if (this.state.moviesList.length > 0) {
            return (
                <section class="MovieList container">
                    <h1 class="MovieList-title big-text">{this.props.listTitle}</h1>
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

export default MovieList;