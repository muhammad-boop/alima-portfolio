// components/WorkPage.jsx

import React from "react";
import "./work.css";
import {
  FaChalkboardTeacher,
  FaUserShield,
  FaBullseye,
  FaEnvelopeOpenText,
  FaChild,
  FaBookOpen,
  FaSmile,
  FaCertificate,
  FaUsers,
  FaHandsHelping,
  FaPrayingHands,
  FaHeart,
  FaShieldAlt,
} from "react-icons/fa";
import whatsappLogo from "@/public/whatsapp logo.png";

const page = () => {
  const steps = [
    {
      step: "1",
      title: "Enroll Online",
      desc: "Fill our admission form and confirm your slot with the admin team.",
    },
    {
      step: "2",
      title: "Orientation & Setup",
      desc: "Receive class timings, Zoom links, and study material before starting.",
    },
    {
      step: "3",
      title: "Attend Live Classes",
      desc: "Join interactive Zoom sessions 5 days a week, guided by expert teachers.",
    },
    {
      step: "4",
      title: "Weekly Assessments",
      desc: "Track progress with short quizzes and personalized feedback.",
    },
    {
      step: "5",
      title: "Group Discussions",
      desc: "Interactive group sessions to reinforce learning and clear doubts.",
    },
    {
      step: "6",
      title: "Parent Feedback",
      desc: "Monthly parent meetings to discuss progress and suggestions.",
    },
    {
      step: "7",
      title: "Final Evaluation",
      desc: "Complete final test to evaluate overall performance before closing.",
    },
    {
      step: "8",
      title: "Certificate of Completion",
      desc: "Get a digital certificate when you successfully finish the course.",
    },
  ];

  const trustItems = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Qualified Female Scholars",
      desc: "Learn from certified female Islamic teachers with deep knowledge and experience.",
    },
    {
      icon: <FaUserShield />,
      title: "Safe Space for Sisters",
      desc: "Dedicated, respectful learning environment tailored for women and girls.",
    },
    {
      icon: <FaBullseye />,
      title: "Practical Islamic Learning",
      desc: "Real-life application of Islamic values with interactive and engaging classes.",
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Parent Feedback System",
      desc: "Regular updates, assessments, and communication with parents.",
    },
    {
      icon: <FaChild />,
      title: "Child-Friendly Curriculum",
      desc: "Age-appropriate lessons with stories, activities, and fun assessments.",
    },
    {
      icon: <FaBookOpen />,
      title: "Quran, Hadith & Akhlaq Focus",
      desc: "Balanced education rooted in Quran, Sunnah, and Islamic manners.",
    },
    {
      icon: <FaSmile />,
      title: "Friendly Class Environment",
      desc: "Students feel supported, heard, and excited to learn every day.",
    },
    {
      icon: <FaCertificate />,
      title: "Recognized Certificates",
      desc: "Get digital certificates on successful course completion.",
    },
  ];

  return (
    <div className="work-page">
      <div className="work-section">
        <h2 className="work-heading">How Our Online Classes Work</h2>
        <p className="work-subheading">
          From registration to certification — every step is designed to be
          simple, guided, and meaningful.
        </p>

        <div className="work-steps">
          {steps.map((item, index) => (
            <div className="work-card animate-fade-up" key={index}>
              <div className="step-number">{item.step}</div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="why-choiceUs">
        <h2 className="choice-heading">Why Students & Parents Trust Us</h2>
        <p className="choice-subheading">
          We go beyond just teaching — we build connections, confidence, and
          character in every student.
        </p>

        <div className="choice-grid">
          {trustItems.map((item, index) => (
            <div className="choice-card animate-fade-up" key={index}>
              <div className="choice-icon">{item.icon}</div>
              <h3 className="choice-title">{item.title}</h3>
              <p className="choice-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="community-section">
        <h2 className="community-heading">Community & Sisterhood</h2>
        <p className="community-subheading">
          A women-only space where Islamic learning is paired with real
          friendship, encouragement, and sisterly support.
        </p>

        <div className="community-slider-wrapper">
          <div className="community-slider-track">
            {[
              {
                icon: <FaUsers />,
                title: "Strong Sisterhood",
                desc: "Supportive women's community rooted in faith and care.",
              },
              {
                icon: <FaHandsHelping />,
                title: "Support & Guidance",
                desc: "Bonds built through help, mentoring, and shared faith.",
              },
              {
                icon: <FaChalkboardTeacher />,
                title: "Women-Led Teaching",
                desc: "Guidance by experienced female scholars and instructors.",
              },
              {
                icon: <FaPrayingHands />,
                title: "Spiritual Upliftment",
                desc: "Group reflections and shared Imaan-building moments.",
              },
              {
                icon: <FaBookOpen />,
                title: "Group Discussions",
                desc: "Engaging sessions to reflect, share, and grow together.",
              },
              {
                icon: <FaHeart />,
                title: "Safe & Respectful",
                desc: "Modest, private space to grow in confidence and Deen.",
              },
              {
                icon: <FaSmile />,
                title: "Empowerment",
                desc: "Build self-esteem and community through learning.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Privacy & Modesty",
                desc: "All sessions are female-only, private and secure.",
              },
            ]
              .concat(
                // For infinite slider effect
                [
                  {
                    icon: <FaUsers />,
                    title: "Strong Sisterhood",
                    desc: "Supportive women's community rooted in faith and care.",
                  },
                  {
                    icon: <FaHandsHelping />,
                    title: "Support & Guidance",
                    desc: "Bonds built through help, mentoring, and shared faith.",
                  },
                ]
              )
              .map((item, index) => (
                <div className="community-card animate-fade-up" key={index}>
                  <div className="community-icon">{item.icon}</div>
                  <h3 className="community-title">{item.title}</h3>
                  <p className="community-desc">{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="cta-join-section">
        <div className="cta-content">
          <h2 className="cta-main-heading">Your Sisterhood Awaits 🌙</h2>
          <p className="cta-description">
            Ready to grow in knowledge, confidence, and faith? Join a supportive
            women-only Islamic learning journey where every voice matters.
          </p>

          <div className="cta-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=923467785512"
              className="cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to Our Team
            </a>

            <a
              href="https://www.instagram.com/your_instagram_handle"
              className="cta-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/923467785512?text=Assalamu%20Alaikum%20I%20want%20to%20learn%20online%20Islamic%20courses"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/whatsapp logo.png"
          alt="WhatsApp Chat"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default page;
