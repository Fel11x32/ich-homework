import React, { useState } from 'react'

const ratingList = [
	'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png',

	'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
	
	'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',

	'https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating.png',
]

const ratingLabels = ['Плохо', 'Приемлемо', 'Хорошо', 'Отлично']

const Rating = () => {
	const [ratingValue, setRatingValue] = useState(0)

	return (
		<div className='rating-container'>
			<img
				src={ratingList[ratingValue]}
				alt={`Рейтинг: ${ratingLabels[ratingValue]}`}
				className='rating-image'
			/>
			<div className='button-group'>
				{ratingLabels.map((label, index) => (
					<button
						key={index}
						onClick={() => setRatingValue(index)}
						className={`rating-button ${ratingValue === index ? 'active' : ''}`}
					>
						{label}
					</button>
				))}
			</div>
		</div>
	)
}

export default Rating
