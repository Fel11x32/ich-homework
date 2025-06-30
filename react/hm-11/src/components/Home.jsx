import React from 'react'
import styles from '../styles/Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className={styles.container}>
			<h1>Добро пожаловать в блог</h1>
			<Link to='/articles' className={styles.link}>
				Перейти к статьям
			</Link>
		</div>
	)
}

export default Home