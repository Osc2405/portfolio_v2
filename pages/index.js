import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import SideBar from "../components/SideBar";
import { UseLanguage } from "../context/languageContext";
import { useState } from "react";

export default function Home() {
  const { content, language, toggle_language } = UseLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggle_nav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
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
      <main className="main">
        <label className="switch">
          <input type="checkbox" onClick={toggle_language} />
          <span className="slider round"></span>
        </label>
        <h1>Portfolio of {content.name}</h1>
        <p>{content.text}</p>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </main>
    </div>
  );
}
