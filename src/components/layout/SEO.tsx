import Head from 'next/head';

const SEO = () => {
	return (
		<Head>
			<title>Will Borysiak | Portfolio</title>
			<meta
				name="description"
				content="Welcome to my software development portfolio. Here you will find out more about me, my projects and my experience."
			/>
			<meta
				content="Welcome to my software development portfolio. Here you will find out more about me, my projects and my experience."
				property="og:description"
			/>
			<link href="/favicons/favicon.ico" rel="shortcut icon" type="image/x-icon" />
			<link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
			<link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
			<link href="/favicons/android-chrome-192x192.png" rel="icon" sizes="192x192" type="image/png" />
			<link href="/favicons/android-chrome-512x512.png" rel="icon" sizes="512x512" type="image/png" />
			<link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
		</Head>
	);
};

export default SEO;
