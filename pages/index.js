import Link from "next/link";
import { UseLanguage } from "../context/languageContext";
import Hero from "../components/Hero";

export default function Home() {
  const { content, language, toggle_language } = UseLanguage();
  return (
    <>
      <Hero />
      <section>
        <h1>Portfolio of {content.name}</h1>
        <p>{content.text}</p>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </section>
    </>
  );
}
