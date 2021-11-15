import React from 'react'

const Movie = (props) => {




    return (
        <>
            
            <div className="card">
                <p alt='movie title'>{props.movie.Title}</p>
                <img src={props.movie.Poster} alt='movie poster'></img>
                <div className="container">
                    <p alt='movie type'>{props.movie.Type}</p>
                    <p alt='movie year'>{props.movie.Year}</p>
                </div>
            </div>
            
        </>
    );
}

export default Movie
