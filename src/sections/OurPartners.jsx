import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./OurPartners.css";

const OurPartners = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section className="our-partners">
      <div className="container text-center">
        <div className="story-header mx-auto">
          <h2>{texts[lang].partnersTitle}</h2>
          <p>{texts[lang].partnersDescription}</p>
        </div>
      </div>

      {/* الصورة full width */}
      <div className="partners-full">
        <img
          src="/images/partners.png" // ضع الصورة في public/images/partners.png
          alt={texts[lang].partnersTitle}
          className="partners-image"
        />
      </div>
    </section>
  );
};

export default OurPartners;
