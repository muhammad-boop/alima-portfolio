"use client";
import React, { useState, useEffect } from "react";
import "./nav.css";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <h3>
          <Link href="/">
            {isMobile ? "Quran Academy" : "Alima Bakhtawar Fatima"}
          </Link>
        </h3>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="./work">Work</Link>
          </li>
          <li>
            <Link href="./blog">Blog</Link>
          </li>
          <li>
            <Link href="./contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="contact-btn">
        <Link href="/contact" passHref legacyBehavior>
          <a className="btn-link">Contact Me</a>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar rotate-top" : "bar"}></span>
        <span className={isOpen ? "bar hide-bar" : "bar"}></span>
        <span className={isOpen ? "bar rotate-bottom" : "bar"}></span>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/work" onClick={closeMenu}>
            Work
          </Link>
          <Link href="/blog" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <a className="btn-link" onClick={closeMenu}>
              Contact Me
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
