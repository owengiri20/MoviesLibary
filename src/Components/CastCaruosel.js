import React, { Component } from 'react';
import API_KEY from "../Helpers/key";
import "../ComponentStyles/CastCarousel.css";
import CastProfileCard from './CastProfileCard';

class CastCaruosel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            castToDisplay: []
        }

    }

    componentDidMount() {
        this.setCast(this.props.movieId)
        console.log("props", this.props);
    }
    async getCast(id) {
        let result;
        await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
            .then(res => {
                return res.json()
            }).then(data => {
                result = data.cast;
            })
        console.log(result);
        return result
    }

    async setCast(id) {
        let castToAdd;
        this.getCast(id)
            .then(cast => {
                castToAdd = cast.map(person => {
                    return {
                        creditId: person.credit_id,
                        id: person.id,
                        order: person.order,
                        name: person.name,
                        role: person.character,
                        poster: `http://image.tmdb.org/t/p/original//${person.profile_path}`
                    }
                });
                this.setState({ castToDisplay: castToAdd })
                console.log("CAST TO DISPLAY:", this.state.castToDisplay);
            })
    }

    displayCast() {
        return this.state.castToDisplay.map(castMember => {
            return <CastProfileCard
                id={castMember.id}
                name={castMember.name}
                role={castMember.role}
                poster={castMember.poster} />
        })
    }

    render() {
        if (this.state.castToDisplay !== []) {
            return (
                <section class="CastCarousel container">
                    <h1 class="CastCarousel-title big-text">Cast</h1>
                    <div class="CastCarousel-carousel">
                        {/* <!-- Cast carousel goes here --> */}
                        {this.displayCast()}
                    </div>
                </section>
            );
        }
        return <div>lol</div>

    }
}

export default CastCaruosel;

// get movie id
// return res.cast 