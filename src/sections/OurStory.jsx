import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./OurStory.css";

export default function OurStory() {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="story" className="ourstory">
      <div className="container">
        {/* Header */}
        <motion.div
          className="story-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>{texts[lang].ourStoryTitle}</h2>
          <p>{texts[lang].ourStoryDescription}</p>
        </motion.div>

        {/* Story Cards */}
        <motion.div
          className="story-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {texts[lang].ourStoryItems.map((item, index) => (
            <motion.div
              key={index}
              className="story-card"
              whileHover={{ y: -8 }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
