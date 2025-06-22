"use client";
import { useState, useEffect } from "react";
import "./blog.css";

const getCurrentDate = () => {
  const date = new Date();
  return `${date.toLocaleDateString()} (${date.toLocaleDateString("en-US", {
    weekday: "long",
  })})`;
};

const demoBlogs = [
  "In a world full of distractions, your power lies in focus. Real success is in doing the right things with heart and consistency.",
  "Life is a marathon, not a sprint. Go slow, go steady, but keep going. You're not late. You're unfolding.",
  "When you plant a seed, don’t expect fruit the next day. Be patient. Water it daily. Growth is silent.",
  "Discipline will carry you when motivation sleeps. Be loyal to your dreams even when no one's watching.",
  "Offline peace is better than online applause. Live for your real life, not your feed.",
  "Start messy. Start unsure. But start. You don’t need to be great to begin — just willing.",
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogs"));

    if (!saved || saved.length === 0) {
      const initial = demoBlogs.map((text) => ({
        text,
        date: getCurrentDate(),
        time: new Date().toISOString(),
      }));
      setBlogs(initial);
      localStorage.setItem("blogs", JSON.stringify(initial));
    } else {
      const validBlogs = saved.filter((blog) => {
        const blogDate = new Date(blog.time);
        const now = new Date();
        const diff = (now - blogDate) / (1000 * 60 * 60 * 24);
        return diff < 30;
      });
      setBlogs(validBlogs);
      localStorage.setItem("blogs", JSON.stringify(validBlogs));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      text,
      date: getCurrentDate(),
      time: new Date().toISOString(),
    };
    const updated = [newBlog, ...blogs];
    setBlogs(updated);
    localStorage.setItem("blogs", JSON.stringify(updated));
    setText("");
  };

  return (
    <div className="container">
      <h1>📝 Blog Timeline</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your blog..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Post Blog</button>
      </form>

      <div className="timeline">
        {blogs.map((blog, i) => (
          <div key={i} className={`blog ${i % 2 === 0 ? "left" : "right"}`}>
            <p>{blog.text}</p>
            <div className="date">📅 {blog.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
