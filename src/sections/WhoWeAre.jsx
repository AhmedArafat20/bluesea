import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="who-we-are" className="who-we-are-section py-5">
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title">{texts[lang].whoWeAreTitle}</h2>
          <p className="section-subtitle">{texts[lang].whoWeAreDescription}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
