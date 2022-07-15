import React from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { SidebarContainer } from "./SideBarElements";
import { UseLanguage } from "../context/languageContext";

const SideBar = ({ isOpen, toggle_nav }) => {
  const { content, language, toggle_language } = UseLanguage();
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle_nav}>
        <div className="icon" onClick={toggle_nav}>
          <FaTimes className="close-icon"></FaTimes>
        </div>
        <div className="sidebar-wrapper">
          <div className="sidebar-menu">
            <Link href="/">
              <a className="sidebar-link" onClick={toggle_nav}>
                {content.navbar.home}
              </a>
            </Link>
            <Link href="/about">
              <a className="sidebar-link" onClick={toggle_nav}>
                {content.navbar.about}
              </a>
            </Link>
            <Link href="/projects">
              <a className="sidebar-link" onClick={toggle_nav}>
                {content.navbar.projects}
              </a>
            </Link>
            <Link href="/contact">
              <a className="sidebar-link" onClick={toggle_nav}>
                {content.navbar.contact}
              </a>
            </Link>
          </div>
          <div className="side-btn-lang">
            <button className="btn_lang" onClick={toggle_language}>
              {content.btn_lang}
            </button>
          </div>
        </div>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
