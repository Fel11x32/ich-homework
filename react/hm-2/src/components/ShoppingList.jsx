import React from 'react'

const ShoppingList = ({ items }) => {
	if (!items.length) {
		return <p>Список покупок пуст</p>
	}

	return (
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	)
}

export default ShoppingList
