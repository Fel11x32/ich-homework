import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from '../styles/ArticlePage.module.css'

const ArticlePage = () => {
	const articles = [
		{ id: 1, title: 'Первая статья', content: 'Содержимое первой статьи...' },
		{ id: 2, title: 'Вторая статья', content: 'Содержимое второй статьи...' },
		{ id: 3, title: 'Третья статья', content: 'Содержимое третьей статьи...' },
	]

	const { id } = useParams()
	const navigate = useNavigate()

	const article = articles.find(a => a.id === parseInt(id))

	if (!article) {
		return <h2>Статья не найдена</h2>
	}
	return (
		<div className={styles.container}>
			<h1>{article.title}</h1>
			<p>{article.content}</p>
			<button onClick={() => navigate(-1)} className={styles.button}>
				Назад
			</button>
		</div>
	)
}

export default ArticlePage