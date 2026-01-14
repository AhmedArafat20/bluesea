import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./OurVision.css";

const OurVision = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="our-vision" className="our-vision-section">
      <div className="container">
        {/* Header */}
        <div className="vision-header text-center">
          <h2>{texts[lang].ourVisionTitle}</h2>
          <p>{texts[lang].ourVisionDescription}</p>
        </div>

        {/* Points Grid */}
        <div className="vision-grid">
          {texts[lang].ourVisionPoints.map((point, idx) => (
            <div className="vision-card" key={idx}>
              <p>{point}</p>
            </div>
          ))}
        </div>

        {/* Vision 2030 */}
        <div className="vision-2030 text-center">
          <p>{texts[lang].ourVision2030}</p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
