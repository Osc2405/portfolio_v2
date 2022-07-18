import "../styles/globals.css";
import "../styles/Home.module.css";
import "../public/scripts";
import { LanguageProvider } from "../context/languageContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
