import React, { useState } from 'react'

const List = () => {
	const [people, setPeople] = useState([
		{ id: 1, name: 'Иван', age: 20 },
		{ id: 2, name: 'Мария', age: 22 },
		{ id: 3, name: 'Алексей', age: 21 },
		{ id: 4, name: 'Марина', age: 19 },
		{ id: 5, name: 'Даша', age: 23 },
		{ id: 6, name: 'Глеб', age: 24 },
		{ id: 7, name: 'Дима', age: 18 },
		{ id: 8, name: 'Гриша', age: 20 },
		{ id: 9, name: 'Серафим', age: 21 },
	])

	const handleRemove = idToRemove => {
		setPeople(prev => prev.filter(person => person.id !== idToRemove))
	}

	return (
		<div className='list-container'>

			<h2>Список приглашённых</h2>

			{people.length === 0 ? (
				<p>Все участники удалены.</p>
			) : (

				<ul className='people-list'>
					{people.map(({ id, name, age }) => (
						<li key={id} className='person-item'>
							<span>
								{name}, {age} лет
							</span>
							<button
								onClick={() => handleRemove(id)}
								className='remove-button'
							>
								Удалить
							</button>
						</li>
					))}
				</ul>
				
			)}
		</div>
	)
}

export default List
