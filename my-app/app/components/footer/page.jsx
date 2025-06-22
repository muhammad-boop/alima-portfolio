import React from "react";
import "./footer.css";

const page = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-column">
            <h3 className="footer-logo">Alima Bhaktawar Fatima</h3>
            <p className="footer-about">
              Providing online Islamic education with sincerity, love, and a
              deep connection to the Quran and Sunnah for kids, women, and
              families.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="./work">Work</a>
              </li>
              <li>
                <a href="./contact">Contact</a>
              </li>
              <li>
                <a href="./blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-socials">
              <li>
                <a href="https://wa.me/923467785512" target="_blank">
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alima_bakhtawarfatima_official"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@bakhtawarfatima5" target="_blank">
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@alima_bakhtawar_fatima"
                  target="_blank"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Alima Bhaktawar Fatima Academy.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
