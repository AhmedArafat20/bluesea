import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./CoreValues.css";

const CoreValues = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="core-values" className="core-values-section py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="core-title">{texts[lang].coreValuesTitle}</h2>
          <p className="core-intro">{texts[lang].coreValuesIntro}</p>
        </div>

        {/* Values Grid */}
        <div className="row g-4 justify-content-center">
          {texts[lang].coreValues.map((value, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="value-card p-4 h-100 text-center">
                <div className="value-number mb-3">{`0${idx + 1}`}</div>
                <h5 className="value-title mb-2">{value.title}</h5>
                <p className="value-desc">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
