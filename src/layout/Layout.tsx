import React from 'react';
import { ThemeProvider } from '../components/context/ThemeContext';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	return (
		<>
			<ThemeProvider>
				<div className="overflow-y-hidden">{props.children}</div>
			</ThemeProvider>
		</>
	);
};

export default Layout;
