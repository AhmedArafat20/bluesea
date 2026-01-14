import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./Hero.css";

export default function Hero() {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>{texts[lang].heroTitle}</h1>
        <p>{texts[lang].heroSubtitle}</p>
      </motion.div>
    </section>
  );
}
