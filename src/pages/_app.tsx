import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${amaticSC.className} ${kalam.className}`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default MyApp;
