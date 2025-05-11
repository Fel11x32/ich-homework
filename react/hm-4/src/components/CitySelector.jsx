import React from 'react'

const CitySelector = ({ cities, onSelect }) => {
	return (
		<div>
			<select onChange={event => onSelect(event.target.value)}>
				<option value=''>-- выбрать --</option>

				{cities.map(city => (
					<option key={city.name} value={city.name}>
						{city.name}
					</option>
				))}
			</select>
		</div>
	)
}
export default CitySelector