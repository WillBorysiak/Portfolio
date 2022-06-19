import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '../assets/images/favicons/favicon.ico';
import favicon16 from '../assets/images/favicons/favicon-16x16.png';
import favicon32 from '../assets/images/favicons/favicon-32x32.png';
import faviconAndroid192 from '../assets/images/favicons/android-chrome-192x192.png';
import faviconAndroid512 from '../assets/images/favicons/android-chrome-512x512.png';
import faviconApple from '../assets/images/favicons/apple-touch-icon.png';

interface SEOPropTypes {
	title: string;
	description: string;
}

const SEO = (props: SEOPropTypes) => {
	return (
		<Helmet
			htmlAttributes={{ lang: 'en' }}
			title={`${props.title}`}
			meta={[
				{
					name: `description`,
					content: props.description,
				},
			]}
			link={[
				{ rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}` },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon16}` },
				{ rel: 'icon', type: 'image/png', sizes: '96x96', href: `${favicon32}` },
				{ rel: 'icon', type: 'image/png', sizes: '192x192', href: `${faviconAndroid192}` },
				{ rel: 'icon', type: 'image/png', sizes: '512x512', href: `${faviconAndroid512}` },
				{ rel: 'apple-touch-icon', type: 'image/png', sizes: '76x76', href: `${faviconApple}` },
			]}
		></Helmet>
	);
};

export default SEO;
