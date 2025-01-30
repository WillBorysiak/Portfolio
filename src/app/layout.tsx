import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import { Amatic_SC, Kalam } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

const amaticSC = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${amaticSC.className} ${kalam.className}`}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
