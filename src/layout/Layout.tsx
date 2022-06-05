import React, { useEffect } from 'react';
import { ThemeProvider } from '../components/context/ThemeContext';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.add('dark');
	}, []);

	return (
		<>
			<ThemeProvider>
				<div className="overflow-y-hidden">{props.children}</div>
			</ThemeProvider>
		</>
	);
};

export default Layout;
