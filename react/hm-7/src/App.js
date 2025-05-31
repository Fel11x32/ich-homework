import { LanguageProvider } from './LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import Text from './components/Text'
import './App.css'

function App() {
	return (
		<LanguageProvider>
			<div className='App'>
				<Text />
				<LanguageSwitcher />
			</div>
		</LanguageProvider>
	)
}

export default App
