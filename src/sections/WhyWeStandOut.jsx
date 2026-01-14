import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./WhyWeStandOut.css";

const WhyWeStandOut = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="why-we-stand-out" className="standout-section">
      <div className="container">
        {/* Header */}
        <div className="standout-header text-center mb-5">
          <h2>{texts[lang].whyWeStandOutTitle}</h2>
          <p>{texts[lang].whyWeStandOutDescription}</p>
        </div>

        {/* Features Grid */}
        <div className="standout-grid">
          {texts[lang].whyWeStandOutFeatures.map((feature, idx) => (
            <div className="standout-card" key={idx}>
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeStandOut;
