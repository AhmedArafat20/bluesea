import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false); // لإخفاء عند scroll down
  const { lang, toggleLang, texts } = useContext(LanguageContext);

  const toggleMenu = () => setOpen(!open);

  // Scroll detection
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHide(true); // scroll down → hide
      } else {
        setHide(false); // scroll up → show
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-custom ${hide ? "navbar-hide" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
<div className="navbar-logo desktop-logo">
  <img
    src="/images/logo2.png"   // ضع هنا مسار اللوجو في public folder
    alt="Blue Sea Catering"
    className="navbar-logo-img"
  />
  {/* لو حابب تسيب النص جنب اللوجو */}
  <span className="logo-text">{texts[lang].logo}</span>
</div>

        {/* Hamburger */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${open ? "open" : ""}`}></span>
          <span className={`bar ${open ? "open" : ""}`}></span>
          <span className={`bar ${open ? "open" : ""}`}></span>
        </button>

        {/* Menu */}
<ul className={`navbar-menu ${open ? "active" : ""}`}>
  <li>
    <a href="#hero" onClick={() => setOpen(false)}>
      {texts[lang].home}
    </a>
  </li>
  <li>
    <a href="#services" onClick={() => setOpen(false)}>
      {texts[lang].services}
    </a>
  </li>
  <li>
    <a href="#projects" onClick={() => setOpen(false)}>
      {texts[lang].projects}
    </a>
  </li>
  <li>
    <a href="#contact" onClick={() => setOpen(false)}>
      {texts[lang].contact}
    </a>
  </li>

  {/* Language Toggle */}
<li>
  <button
    className="lang-btn"
    onClick={() => {
      toggleLang();   // يغير اللغة
      setOpen(false); // يقفل الهامبرجر بعد التغيير
    }}
  >
    {lang === "en" ? "عربي" : "EN"}
  </button>
</li>
</ul>
      </div>
    </nav>
  );
}
