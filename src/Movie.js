import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, img, genres, synopsis,}){
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster img={img} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1> 
                <div className="genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="synopsis">
                    <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}

function MoviePoster({img, alt}){
    return (
        <img src={img} alt={alt} title= {alt} className="Movieposter"/>
    )
}
function MovieGenre({genre}){
    return (
        <span className="Moviegenre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    img : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

// MovieGenre.PropTypes = {
//     genre : PropTypes.string
// }

export default Movie;
