import React from 'react'

const CityCard = ({ city }) => {
	if (!city) return null

	return (
		<div className='city-card'>
			<h2>{city.name}</h2>
			<img src={city.imageUrl} alt={city.name} />
			<p>{city.description}</p>
			<ul>
				{city.facts.map((fact, i) => (
					<li key={i}>{fact}</li>
				))}
			</ul>
		</div>
	)

}

export default CityCard