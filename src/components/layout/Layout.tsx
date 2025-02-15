import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div id="layout" className="overflow-x-hidden overflow-y-hidden">
      {props.children}
    </div>
  );
};

export default Layout;
