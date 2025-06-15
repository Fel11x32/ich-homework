import React, { useEffect, useState } from 'react'

const List = () => {
	const [items, setItems] = useState([])
	const [inputValue, setInputValue] = useState('')

	const addItem = () => {
		if (inputValue.trim() !== '') {
			setItems([...items, inputValue])
			setInputValue('')
		}
	}

	useEffect(() => {
		console.log('Компонент ListItems обновлен')
	}, [])

	return (
		<div>
			<input
				type='text'
				value={inputValue}
				onChange={event => setInputValue(event.target.value)}
				placeholder='Введите элемент'
			/>
			<button onClick={addItem}>Добавить элемент</button>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default List