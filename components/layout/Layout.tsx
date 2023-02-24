interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	return <div className="overflow-y-hidden">{props.children}</div>;
};

export default Layout;
