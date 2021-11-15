import React from 'react'

const Form = (props) => {
	let helpText ="";
	
    
	console.log('this is the value enterd' + props.searchValue);


	if (props.searchValue === '') {
		helpText ="you need to type somthing a-z A-Z 0-9 ";
		
		
	} else {
		helpText ="Search movies, series, or even games ";
	}

	return (

			<div className="form">
				<p className="errorText">{props.error}</p>
				<p className="helpText">{helpText}</p>
				<input
					className=""
					value={props.value}
					onChange={(event) => props.setSearchValue(event.target.value)}
					placeholder='Type to search...'
				></input>
				
			</div>
		);
    
};

export default Form
