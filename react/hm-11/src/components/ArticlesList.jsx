import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/ArticlesList.module.css'

const ArticlePage = () => {
	const articles = [
		{ id: 1, title: 'Первая статья' },
		{ id: 2, title: 'Вторая статья' },
		{ id: 3, title: 'Третья статья' },
	]

	return (
		<div className={styles.container}>
			<h1>Список статей</h1>
			<ul className={styles.list}>
				{articles.map(article => (
					<li key={article.id}>
						<Link to={`/articles/${article.id}`} className={styles.link}>
							{article.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ArticlePage
