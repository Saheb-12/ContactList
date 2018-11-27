import React from 'react';

const SearchBox = (props) => {
		return (
		<div className = 'pa2'>
			<input 
			className='tc pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='Search Robots' 
			onChange = {props.searchChange}
			style = {{width: '300px'}}/>
		</div>
		);
	}

export default SearchBox;