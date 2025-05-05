import React from 'react'
import Greeting from './components/Greeting'
import ShoppingList from './components/ShoppingList'
import OrdersList from './components/OrdersList'

const App = () => {
	const items = ['Хлеб', 'Молоко', 'Яйца']

	const orders = [
		{ orderId: 101, status: 'обработан' },
		{ orderId: 102, status: 'в пути' },
		{ orderId: 103, status: 'доставлен' },
	]

	return (
		<div>
			<Greeting name='Vlad' />
			<ShoppingList items={items} />
			<OrdersList orders={orders}/>
		</div>
	)
}

export default App
