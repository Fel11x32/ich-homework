import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'
import ArticlePage from './components/ArticlePage'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/articles' element={<ArticlesList />} />
				<Route path='/articles/:id' element={<ArticlePage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App