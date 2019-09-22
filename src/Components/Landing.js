import React, { Component } from 'react';
import API_KEY from "../Helpers/key"
import "../ComponentStyles/Landing.css"

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showcaseMovie: {}
        }
    }

    async getPopularMovies() {
        let result;
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => {
                return res.json()
            }).then(data => {
                result = data.results;
            });
        return result;
    }
    async setShowcaseMovie(params) {
        // get and put movie to obj
        let movie = {}
        let num = 8;
        this.getPopularMovies().then(data => {
            movie = {
                movieTitle: data[num].title,
                movieRating: data[num].vote_average,
                movieGenre: "Action/Adventure",
                moviePoster: `http://image.tmdb.org/t/p/original//${data[num].poster_path}`,
                movieDate: data[num].release_date.substring(0, 4)
            }
            // setState of Shacase movie
            this.setState({ showcaseMovie: movie })
            console.log(this.state.showcaseMovie);

        })
    }

    componentDidMount() {
        this.setShowcaseMovie();
    }
    render() {
        if (this.state.showcaseMovie === {}) {
            return (
                <div>nada</div>
            )
        } else {

            const { movieTitle, movieRating, movieGenre, moviePoster, movieDate } = this.state.showcaseMovie;

            return (
                <section id="landing">
                    <div class="landing-content" style={{ backgroundImage: `url(${moviePoster})` }}>
                        <img src="" alt="" />
                        <div className="landing-movie-details">
                            <h1 className="movie-title big-text">{movieTitle} ({movieDate})</h1>
                            <h2 className="movie-genre med-text">{movieGenre}</h2>
                            <div className="movie-rating">{movieRating}&#9734;</div>
                        </div>
                    </div>
                </section>
            );
        }

    }
}

export default Landing;