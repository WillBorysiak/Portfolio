interface LayoutProps {
	children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
	return <div className="overflow-y-hidden">{props.children}</div>;
};

export default Layout;
