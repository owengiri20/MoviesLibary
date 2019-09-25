import React, { Component } from 'react';
import MovieList from "./MovieList";
import API_KEY from '../Helpers/key';



class DisplayCarousels extends Component {
    render() {
        return (
            <div style={{ marginTop: "3rem" }}>
                <MovieList
                    apiLink={`
        https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`} listTitle="Trending" />
                <MovieList
                    apiLink={`
        https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`} listTitle="Popular" />

                <MovieList
                    apiLink={`
        https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`} listTitle="Now Playing" />

                <MovieList
                    apiLink={`
        https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`} listTitle="Upcoming" />
            </div>
        );
    }
}

export default DisplayCarousels;