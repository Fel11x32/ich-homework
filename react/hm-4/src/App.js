import React, { useState } from 'react'
import CitySelector from './components/CitySelector'
import CityCard from './components/CityCard'
import { citiesData } from './data/cities'
import './App.scss'

function App() {
	const [selectedCity, setSelectedCity] = useState(null)

	const handleSelect = cityName => {
		const city = citiesData.find(c => c.name === cityName)
		setSelectedCity(city || null)
	}

	return (
		<div className='app-container'>
			<h1>Выберите город:</h1>
			<CitySelector cities={citiesData} onSelect={handleSelect} />
			<CityCard city={selectedCity} />
		</div>
	)
}

export default App
