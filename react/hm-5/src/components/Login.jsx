import apple from '../assets/company/apple.svg'
import google from '../assets/company/google.svg'
import xIcon from '../assets/company/twitter-x.svg'
import styles from '../styles/Login.module.scss'

export default function Login() {
	return (
		<div className={styles.container}>
			<h1>Life is wasted on the living</h1>
			<p>Sign in with</p>
			<div className={styles.buttons}>
				<button>
					<img src={apple} alt='Sign in with Apple' />
				</button>
				<button>
					<img src={google} alt='Sign in with Google' />
				</button>
				<button>
					<img src={xIcon} alt='Sign in with X' />
				</button>
			</div>
		</div>
	)
}
