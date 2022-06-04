import React from 'react';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	return <div>{props.children}</div>;
};

export default Layout;
