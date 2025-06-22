"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./hero.css";
import Image from "next/image";
import quran from "@/public/quran.jpg";
import islam from "@/public/islam2.jpg";
import islam2 from "@/public/islam3.jpg";
import islam3 from "@/public/islam4.jpg";
import learningImg1 from "@/public/learn.jpg";
import learningImg2 from "@/public/learn2.jpg";
import learningImg3 from "@/public/learn3.jpg";
import learningImg4 from "@/public/learning4.jpg";
import learningImg5 from "@/public/learn5.jpg";
import learningImg6 from "@/public/learn6.jpg";
import learningImg7 from "@/public/learn7.jpg";
import learningImg8 from "@/public/learn8.jpg";
import whatsappLogo from "@/public/whatsapp logo.png";
import {
  FaLaptop,
  FaVideo,
  FaBook,
  FaClock,
  FaChalkboardTeacher,
  FaChild,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

const Hero = () => {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      heading:
        "I'm Alima Bakhtawar Fatima — Your Guide to Authentic Islamic Learning",
      description:
        "Alima Bakhtawar Fatima offers online Islamic education rooted in Quran and Sunnah. From beginner to advanced levels, learn at your own pace with personalized attention, live sessions, and clear concepts — for children, women, and anyone eager to grow in Deen.",
      getStarted: "Get Started",
      learnMore: "Learn More",
    },
    ur: {
      heading:
        "میں عالمہ بختاور فاطمہ ہوں — آپ کی رہنمائی قرآن و سنت کی روشنی میں",
      description:
        "عالمہ بختاور فاطمہ آن لائن اسلامی تعلیم فراہم کرتی ہیں، جو قرآن و سنت پر مبنی ہے۔ ابتدائی سے اعلیٰ سطح تک، بچوں، خواتین، اور ہر دین سیکھنے والے کے لیے ذاتی توجہ کے ساتھ، لائیو سیشنز اور آسان اسباق فراہم کیے جاتے ہیں۔",
      getStarted: "شروع کریں",
      learnMore: "مزید جانیں",
    },
    ar: {
      heading: "أنا العالمة بختاور فاطمة — مرشدتك لتعلُّم الإسلام الأصيل",
      description:
        "تُقدّم العالمة بختاور فاطمة تعليمًا إسلاميًا عبر الإنترنت قائمًا على القرآن والسنة. من المستوى المبتدئ إلى المتقدم، تعلّم على وتيرتك الخاصة مع جلسات مباشرة وشرح واضح للأطفال والنساء وكل من يرغب في التعلُّم.",
      getStarted: "ابدأ الآن",
      learnMore: "اقرأ المزيد",
    },
    fa: {
      heading:
        "من عالِمه بختاور فاطمه هستم — راهنمای شما برای یادگیری واقعی اسلام",
      description:
        "عالِمه بختاور فاطمه آموزش اسلامی آنلاین را بر اساس قرآن و سنت ارائه می‌دهد. از سطح مبتدی تا پیشرفته، با جلسات زنده و توضیحات روشن، مخصوص کودکان، زنان و هرکسی که می‌خواهد دین بیاموزد.",
      getStarted: "شروع کنید",
      learnMore: "بیشتر بدانید",
    },
  };

  const current = content[language];

  return (
    <div className="home-section">
      <div className="hero-section">
        <div className="top-bar">
          <div className="custom-select">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">🌐 English</option>
              <option value="ur">🌐 Urdu</option>
              <option value="ar">🌐 Arabic</option>
              <option value="fa">🌐 Farsi</option>
            </select>
            <span className="arrow">&#9662;</span>
          </div>
        </div>

        <div className="headings">
          <h1 className="main-heading">{current.heading}</h1>
          <p className="description">{current.description}</p>
        </div>

        <div className="hero-btn">
          <Link href="/contact" className="primary-btn">
            {current.getStarted}
          </Link>
          <Link href="/about" className="secondary-btn">
            {current.learnMore}
          </Link>
        </div>
      </div>
      <div className="skills">
        <div className="heading-skills">
          <h2 className="main-heading-skills">Why Learn With Me</h2>
          <p className="sub-heading">
            At Alima Bhaktawar Fatima's Academy, we focus on authentic Islamic
            education with a personal touch. Every student — child, woman, or
            beginner — is guided with care, clarity, and consistency. Our aim is
            not just to teach, but to nurture a love for the Quran and Sunnah in
            every heart.
          </p>
        </div>
        <div className="skills-slider">
          <div className="skills-track">
            <div className="skills-cards">
              {[quran, islam, islam2, islam3, quran, islam, islam2, islam3].map(
                (img, index) => (
                  <div className="card-skill" key={index}>
                    <div className="card-image">
                      <Image src={img} alt="skill-img" />
                    </div>
                    <div className="card-heading">
                      <h3 className="main-card-heading">
                        {
                          [
                            "Quran with Tajweed",
                            "40 Hadith Course",
                            "Women's Fiqh",
                            "Seerah of the Prophet ﷺ",
                            "Daily Duas & Adhkar",
                            "Aqeedah (Beliefs)",
                            "Kids' Islamic Course",
                            "Live Q&A & Reviews",
                          ][index % 8]
                        }
                      </h3>
                      <p className="desc-card">
                        {
                          [
                            "Learn the correct pronunciation of Quranic verses with expert Tajweed rules and daily revision.",
                            "Memorize and understand 40 authentic Ahadith from Imam Nawawi with practical applications.",
                            "Learn about taharat, hijab, salah, and other essentials of women's Islamic rulings with references.",
                            "Dive into the blessed life of the Prophet Muhammad ﷺ and understand his role as a leader and guide.",
                            "Learn morning/evening supplications and memorize powerful Duas for protection and blessings.",
                            "Understand the foundations of Islamic beliefs like Tawheed, Angels, Qadr, and more in a simple way.",
                            "Fun and engaging Islamic learning for kids — Surahs, manners, stories of Prophets, and basic Aqeedah.",
                            "Get your questions answered live, weekly reviews, and detailed feedback on progress and performance.",
                          ][index % 8]
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="learn-section">
        <div className="learn-headings">
          <h1 className="learn-main-heading">What Will You Learn.</h1>
          <p className="learn-description">
            At Alima Bhaktawar Fatima's Academy, you'll learn not only knowledge
            but a heartfelt connection to Islamic values. Dive into Quranic
            sciences, spiritual teachings, and practical guidance that shape
            your Imaan, character, and soul.
          </p>
        </div>

        <div className="learn-slider-wrapper">
          {[
            {
              img: learningImg1,
              engTitle: "Quran with Tajweed",
              engText: "Recite with precision and deep understanding.",
              urTitle: "قرآن مع تجوید",
              urText:
                "قرآن کو صحیح تجوید کے ساتھ روانی سے پڑھنا سیکھیں اور اس کے مفاہیم کو سمجھیں۔",
            },
            {
              img: learningImg2,
              engTitle: "Mufti al-Jinan",
              engText: "Connect spiritually through timeless duas.",
              urTitle: "مفتی الجنان",
              urText:
                "مخصوص اوقات اور حالات کے لیے اہلِ بیتؑ کی روحانی دعائیں۔",
            },
            {
              img: learningImg3,
              engTitle: "Nahjul Balagha",
              engText: "Explore the eloquence and wisdom of Imam Ali (a.s.).",
              urTitle: "نہج البلاغہ",
              urText: "امام علیؑ کے خطبات سے عدل، قیادت اور روحانیت کے درس۔",
            },
            {
              img: learningImg4,
              engTitle: "Sahifa Sajjadiya",
              engText:
                "Supplications that reflect deep spirituality and emotion.",
              urTitle: "صحیفہ سجادیہ",
              urText: "دل کو جھنجھوڑنے والی دعائیں امام زین العابدینؑ سے۔",
            },
            {
              img: learningImg5,
              engTitle: "Bihar al-Anwar",
              engText:
                "Comprehensive Islamic knowledge from Ahlul Bayt (a.s.).",
              urTitle: "بحار الانوار",
              urText: "اسلامی عقائد، تاریخ اور احادیث کا عظیم مجموعہ۔",
            },
            {
              img: learningImg6,
              engTitle: "Usool al-Kafi",
              engText:
                "Learn the core beliefs of Islam with authentic narrations.",
              urTitle: "اصول کافی",
              urText: "توحید، امامت اور اخلاقیات پر مبنی صحیح روایات۔",
            },
            {
              img: learningImg7,
              engTitle: "Tahdhib al-Islam",
              engText: "Moral training based on Quran and Hadith.",
              urTitle: "تہذیب الاسلام",
              urText: "اخلاقی زندگی گزارنے کے لیے قرآنی اور نبوی اصول۔",
            },
            {
              img: learningImg8,
              engTitle: "Al-Shafi",
              engText: "Defense of Imamate using intellect and scripture.",
              urTitle: "الشفی",
              urText: "عقلی اور قرآنی دلائل کے ساتھ امامت کا دفاع۔",
            },
          ].map((item, i) => (
            <div className="slider-pair" key={`pair-${i}`}>
              <div className="learn-card eng">
                <img src={item.img.src} alt="learn-img" className="learn-img" />
                <h3 className="learn-card-title">{item.engTitle}</h3>
                <p className="learn-card-text">{item.engText}</p>
              </div>
              <div className="learn-card urdu">
                <img src={item.img.src} alt="learn-img" className="learn-img" />
                <h3 className="learn-card-title">{item.urTitle}</h3>
                <p className="learn-card-text">{item.urText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials">
        <div className="main-heading-testimonials">
          <h1 className="testimonials-heading">Testimonials</h1>
          <p className="description-testimonials">
            Real voices, real impact. Hear what our students and parents have to
            say about their learning experience with Alima Bhaktawar Fatima.
            From spiritual growth to academic excellence, their words reflect
            the trust, care, and transformation they experienced on this journey
            of Islamic knowledge.
          </p>
        </div>

        <div className="testimonials-grid">
          {[
            {
              name: "Zain",
              desc: "Zain has completed 3 Juz with accurate recitation and understanding. He loves the weekly story sessions about the Prophets!",
            },
            {
              name: "Fatima",
              desc: "Fatima confidently recites Surah Al-Baqarah with Tajweed and is improving day by day.",
            },
            {
              name: "Ali",
              desc: "Ali enjoys learning duas and actively takes part in every class activity with excitement.",
            },
            {
              name: "Ayesha",
              desc: "Ayesha completed the Seerah course and now teaches what she learned to her younger siblings.",
            },
            {
              name: "Nimra",
              desc: "Nimra has memorized 40 Hadith with meanings and practices them in daily life.",
            },
            {
              name: "Ibrahim",
              desc: "Ibrahim recites fluently with Tajweed and has built a strong connection with the Quran.",
            },
            {
              name: "Khadija",
              desc: "Khadija memorized daily duas and confidently leads her family in reciting them.",
            },
            {
              name: "Musa",
              desc: "Musa completed the Fiqh for Men course and helps his peers understand Islamic rulings.",
            },
          ].map((child, index) => (
            <div className="testimonial-card" key={index}>
              <h3 className="child-name">{child.name}</h3>
              <p className="child-desc">{child.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="features-section">
        <h2 className="features-heading">
          What Makes Our Online Classes Special
        </h2>
        <p className="features-subheading">
          Our teaching is designed with convenience, clarity, and care — so that
          every student learns at their pace with proper Islamic understanding.
        </p>

        <div className="features-grid">
          {[
            {
              icon: <FaLaptop />,
              title: "Live Zoom Classes",
              desc: "Real-time learning with interactive sessions.",
            },
            {
              icon: <FaVideo />,
              title: "Recordings Available",
              desc: "Watch missed classes anytime for revision.",
            },
            {
              icon: <FaBook />,
              title: "PDF Notes & Study Material",
              desc: "Well-structured resources sent after every session.",
            },
            {
              icon: <FaClock />,
              title: "Flexible Timings",
              desc: "Multiple time slots to fit your schedule.",
            },
            {
              icon: <FaChalkboardTeacher />,
              title: "Separate Classes for Sisters",
              desc: "Comfortable & private learning for women.",
            },
            {
              icon: <FaChild />,
              title: "Kids-Friendly Curriculum",
              desc: "Fun, age-appropriate Islamic education for children.",
            },
            {
              icon: <FaPhoneAlt />,
              title: "1-on-1 Guidance",
              desc: "Private sessions for personal queries and improvement.",
            },
            {
              icon: <FaGlobe />,
              title: "Global Access",
              desc: "Join from anywhere — classes available internationally.",
            },
          ].map((item, index) => (
            <div className="feature-card" key={index} style={{ "--i": index }}>
              <div className="feature-icon">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://wa.me/923467785512?text=Assalamu%20Alaikum%20I%20want%20to%20learn%20online%20Islamic%20courses"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={whatsappLogo} alt="WhatsApp Chat" width={60} height={60} />
      </a>
      <div className="fees-structure">
        <h2 className="fee-heading">📚 Fee Plans / Course Packages</h2>
        <p className="fee-subheading">
          We provide quality Islamic education 5 days a week. Get personalized
          attention, live classes, and complete study support — all at an
          affordable fee.
        </p>

        <div className="fee-card">
          <h3 className="fee-title">Standard Monthly Plan</h3>
          <ul className="fee-details">
            <li>✅ 5 Days Classes (Mon–Fri)</li>
            <li>✅ Live Zoom Sessions</li>
            <li>✅ PDF Notes & Study Material</li>
            <li>✅ Missed Class Recordings</li>
            <li>✅ One-on-One Attention</li>
          </ul>
          <div className="fee-price">20,000 PKR / Month</div>
          <a
            href="https://wa.me/923467785512?text=I%20want%20to%20enroll%20for%20Islamic%20course"
            target="_blank"
            rel="noopener noreferrer"
            className="enroll-btn"
          >
            Enroll Now via WhatsApp
          </a>
        </div>

        <h2 className="fee-heading" style={{ marginTop: "60px" }}>
          📲 Follow Us on Social Media
        </h2>
        <div className="social-cards">
          <div className="fee-card social">
            <h3 className="fee-title">TikTok</h3>
            <p className="social-text">
              Watch short Islamic videos and reminders.
            </p>
            <a
              href="https://www.tiktok.com/@alima_bakhtawar_fatima?_t=ZS-8xOhLZeXfhY&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="enroll-btn"
            >
              Visit TikTok
            </a>
          </div>

          <div className="fee-card social">
            <h3 className="fee-title">Instagram</h3>
            <p className="social-text">
              Daily Islamic quotes, reels & updates.
            </p>
            <a
              href="https://www.instagram.com/alima_bakhtawarfatima_official?igsh=NjZ5ajh4c2RvcW0x&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="enroll-btn"
            >
              Visit Instagram
            </a>
          </div>

          <div className="fee-card social">
            <h3 className="fee-title">YouTube</h3>
            <p className="social-text">
              Full Islamic lectures and video series.
            </p>
            <a
              href="https://youtube.com/@bakhtawarfatima5?si=1ZTNfcdWEgEmxZep"
              target="_blank"
              rel="noopener noreferrer"
              className="enroll-btn"
            >
              Visit YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
