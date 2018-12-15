import React from 'react';
import Card from './Card';

const CardList = ({robots, onRouteChange}) => {
	return (
		<div>
			{
				robots.map( ({id, name, email}, i) => {
					return (
						<Card 
							key={i} 
							id={id} 
							name={name} 
							email={email}
							onRouteChange = {onRouteChange} 
						/>
					);
				})
			}
		</div> 
	);
}

export default CardList;