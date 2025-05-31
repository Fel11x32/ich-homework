import { useContext } from 'react'
import { LanguageContext } from '../LanguageContext'

function Text() {
	const { language } = useContext(LanguageContext)

	return <p>{language === 'en' ? 'Hello, world!' : 'Привет, мир!'}</p>
}

export default Text
