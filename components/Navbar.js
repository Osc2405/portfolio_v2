import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { UseLanguage } from "../context/languageContext";

export default function Navbar({ toggle_nav }) {
  const { content, language, toggle_language } = UseLanguage();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/">
            <a className="nav-logo"> OSCAR</a>
          </Link>

          <div className="mobile-icon" onClick={toggle_nav}>
            <FaBars />
          </div>
          <ul className="nav-menu">
            <li className="nav-link">
              <Link href="/about">
                <a>{content.navbar.about}</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/projects">
                <a>{content.navbar.projects}</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/contact">
                <a>{content.navbar.contact}</a>
              </Link>
            </li>
          </ul>
          <div className="btn_lang_div">
            <button className="btn_lang" onClick={toggle_language}>
              {content.btn_lang}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
