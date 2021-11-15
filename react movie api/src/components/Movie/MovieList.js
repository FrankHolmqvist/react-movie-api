import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
    

return (
    <>
        {props.movies.map((movie, index) => (
            <div className="container" key={index}>
                
                
                <Movie movie={movie} />
                
            </div>
        ))}
    </>
);
};

export default MovieList
