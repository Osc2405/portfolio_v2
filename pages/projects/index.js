import Link from "next/link";
import Navbar from "../../components/navbar";
import SideBar from "../../components/SideBar";
import { useState } from "react";
import { UseLanguage } from "../../context/languageContext";

export default function Projects() {
  const { content, language, toggle_language } = UseLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggle_nav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle_nav={toggle_nav} />
      <Navbar toggle_nav={toggle_nav} />
      <main className="main">
        <h1>This are my projects</h1>
        <Link href="/">
          <a>Regresar al Home</a>
        </Link>
      </main>
    </>
  );
}
