import React, { useState, useEffect } from 'react'
import Form from './Form';
import MovieList from './MovieList';



const MovieAPI = () => {
    const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [error, setErrors] = useState([]);
	

	

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
		console.log(responseJson)
		console.log()
		if (responseJson.Search) {
			setMovies(responseJson.Search);
			const success = 'Success!!!';
			setErrors(success);	
		}else if (responseJson.Response === 'False'){
			console.log(responseJson.Error);
			setErrors(responseJson.Error);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	

	

	

	

	return (
		<div className="">
			<div >
				
				
				<Form 
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					error={error}
					
				/>
			</div>
			<div className="grid-container">
				
				<MovieList
					
					movies={movies}
					
				/>
			</div>
			
		</div>
	);
};

export default MovieAPI
