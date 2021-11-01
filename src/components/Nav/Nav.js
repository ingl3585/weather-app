import React from 'react';

const Nav = ({ handleSubmit, setWeatherSearch }) => {
	return (
		<div className='nav'>
			<div>
				<h1>Logo</h1>
			</div>
			<div>
				<input
					onChange={(event) => {
						let input = event.target.value;
						setWeatherSearch(input.replace(/\s+/g, '')); //Remove spaces from input -> https://stackoverflow.com/questions/24580912/remove-all-white-space-from-string-javascript
					}}
					type='text'
					placeholder='Denver, CO'></input>
				<button onClick={handleSubmit} type='submit'>
					Submit
				</button>
			</div>
			<div>
				<h3>Favorites</h3>
			</div>
		</div>
	);
};

export default Nav;
