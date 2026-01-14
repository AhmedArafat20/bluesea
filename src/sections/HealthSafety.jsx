import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./HealthSafety.css";

const HealthSafety = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="health-safety" className="health-section">
      <div className="container">
        {/* Header */}
        <div className="health-header text-center mb-5">
          <h2>{texts[lang].healthSafetyTitle}</h2>
          <p>{texts[lang].healthSafetyDescription}</p>
        </div>

        {/* Safety Points Grid */}
        <div className="health-grid">
          {texts[lang].healthSafetyPoints.map((point, idx) => (
            <div className="health-card" key={idx}>
              <h5>{point.title}</h5>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthSafety;
