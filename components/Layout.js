import Head from "next/head";
import Navbar from "./navbar";
import SideBar from "./SideBar";
import { UseLanguage } from "../context/languageContext";
import { useState } from "react";
import Script from "next/script";

const Layout = ({ children }) => {
  const { content, language, toggle_language } = UseLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggle_nav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>Oscar Portfolio</title>
        <meta
          name="description"
          content="Portfolio as developer and data scientist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar isOpen={isOpen} toggle_nav={toggle_nav} />
      <Navbar toggle_nav={toggle_nav} />
      <main className="main">{children}</main>
      <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" />
    </>
  );
};

export default Layout;
