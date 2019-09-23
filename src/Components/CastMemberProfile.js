import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API_KEY from "../Helpers/key";
import "../ComponentStyles/CastMemberProfile.css";
import MovieList from "./MovieList";
import MoviesWorkedIn from './MoviesWorkedIn';




class CastMemberProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peronToShow: ""
        }
    }
    componentDidMount() {
        this.getCastMember(this.props.match.params.id);
    }

    async getCastMember(id) {
        let result;
        await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                return res.json()
            }).then(data => {
                this.setState({ peronToShow: data })
                console.log("person to show", this.state.peronToShow);

            });
        return result;
    }

    render() {

        if (this.state.peronToShow != "") {
            const { birthday, known_for_department, name, biography, profile_path, imdb_id } = this.state.peronToShow;
            return (
                <div className="CastMemberProfile">
                    <div className="CastMemberProfile-wrapper">
                        <div className="CastMemberProfile-wrapper-col1">
                            <img src={`http://image.tmdb.org/t/p/original//${profile_path}`} alt={name} />
                        </div>
                        <div className="CastMemberProfile-wrapper-col2">
                            <h1 className="CastMemberProfile-name">
                                {name}
                            </h1>
                            <p className="CastMemberProfile-dob">
                                {birthday}
                            </p>
                            <h1 className="bio-title">
                                Biography
                            </h1>
                            <p className="CastMemberProfile-bio">
                                {biography}
                            </p>
                            <button className="back-btn" onClick={() => this.props.history.goBack()}>
                                {"Back"}
                            </button>
                        </div>
                    </div>
                    <MoviesWorkedIn id={this.props.match.params.id} />

                </div>
            );
        }
        return <div>lol</div>

    }
}

export default CastMemberProfile;