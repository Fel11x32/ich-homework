import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './UserProfile.module.css'

function UserProfile() {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const fetchUser = async () => {
		setLoading(true)
		try {
			const response = await axios.get('https://randomuser.me/api/')
			setUser(response.data.results[0])
		} catch (error) {
			console.error('Ошибка загрузки пользователя:', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchUser()
	}, [])

	if (loading) {
		return <p className={styles.loading}>Loading...</p>
	}

	if (!user) {
		return <p className={styles.error}>Не удалось загрузить данные.</p>
	}

	return (
		<div className={styles.card}>
			<img src={user.picture.large} alt='User' className={styles.avatar} />
			<h2 className={styles.name}>
				{user.name.first} {user.name.last}
			</h2>
			<p className={styles.email}>Email: {user.email}</p>
			<p className={styles.location}>
				{user.phone},
			</p>
			<button className={styles.button} onClick={fetchUser}>
				Загрузить нового пользователя
			</button>
		</div>
	)
}

export default UserProfile
