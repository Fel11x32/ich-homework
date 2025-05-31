import { useContext } from 'react'
import { LanguageContext } from '../LanguageContext'

function LanguageSwitcher() {
	const { language, setLanguage } = useContext(LanguageContext)

	const toggleLanguage = () => {
		setLanguage(prev => (prev === 'en' ? 'ru' : 'en'))
	}

	return (
		<button onClick={toggleLanguage}>
			Switch to {language === 'en' ? 'Russian' : 'English'}
		</button>
	)
}

export default LanguageSwitcher
