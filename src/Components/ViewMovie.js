import React, { Component } from 'react';
import "../ComponentStyles/ViewMovie.css";
import API_KEY from '../Helpers/key';

class ViewMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieToDisplay: ""
        }
    }

    componentDidMount() {
        this.setMovie(this.props.match.params.id)
        console.log("PROPS", this.props.match.params.id);



    }
    async getMovie(id) {
        let result;
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                result = data;
                console.log("spider", data, this.props.movieId);

            })
        return result;
    }

    setMovie(id) {
        let movieOutput;
        this.getMovie(id)
            .then(movie => {
                movieOutput = {
                    movieTitle: movie.title,
                    movieGenre: "Action/Adveture",
                    movieDescription: movie.overview,
                    moviePoster: `http://image.tmdb.org/t/p/original//${movie.poster_path}`,
                    movieRating: movie.vote_average,
                    movieTagline: movie.tagline
                }
                this.setState({ movieToDisplay: movieOutput })

            })
    }
    render() {
        console.log("MOVIIIE: ", this.state.movieToDisplay);
        if (this.state.movieToDisplay !== "") {
            const { movieTitle, movieDescription, movieTagline, movieGenre, movieRating, moviePoster } = this.state.movieToDisplay;
            return (
                <div className="ViewMovie">
                    <div className="ViewMovie-wrapper">
                        <div className="ViewMovie-wrapper-col1">
                            <img src={moviePoster} alt="" />
                        </div>
                        <div className="ViewMovie-wrapper-col2">
                            <h1 className="ViewMovie-title">{movieTitle}</h1>
                            <p className="ViewMovie-description">
                                {movieTagline} <br /> {movieDescription}
                            </p>
                            <p className="ViewMovie-rating">
                                {movieGenre}</p>
                            <p className="ViewMovie-rating">
                                {movieRating} &#9734;</p>

                        </div>
                    </div>
                </div>
            );
        }
        return <div>lol</div>

    }
}

export default ViewMovie;