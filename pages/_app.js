import "../styles/globals.css";
import "../styles/Home.module.css";
import { LanguageProvider } from "../context/languageContext";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
