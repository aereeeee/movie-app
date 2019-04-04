import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

function Movie({title, img}){
    return (
        <div>
            <MoviePoster img={img} />
            <h1>{title}</h1> 
        </div>
    )
}

function MoviePoster({img}){
    return (
        <img src={img} alt="movie poster"/>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
export default Movie;
