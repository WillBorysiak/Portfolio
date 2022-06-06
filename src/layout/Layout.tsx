import React, { useEffect, useContext } from 'react';

import { ThemeContext } from '../components/context/ThemeContext';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	const theme = useContext(ThemeContext);

	useEffect(() => {
		if (theme.dark) {
			const root = window.document.documentElement;
			root.classList.add('dark');
		}
		if (!theme.dark) {
			return;
		}
	}, []);

	return <div className="overflow-y-hidden">{props.children}</div>;
};

export default Layout;
