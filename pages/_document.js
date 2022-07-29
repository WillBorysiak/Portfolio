import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script id="dark-mode" strategy="beforeInteractive">
					{`document.documentElement.classList.add('dark')`}
				</Script>
			</body>
		</Html>
	);
};

export default Document;
