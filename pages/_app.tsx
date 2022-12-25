import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../components/context/ThemeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
