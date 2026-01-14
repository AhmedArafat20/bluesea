import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./Services.css";

const Services = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Header */}
        <div className="services-header text-center mb-5">
          <h2>{texts[lang].servicesTitle}</h2>
          <p>{texts[lang].servicesDescription}</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {texts[lang].servicesData.map((service, idx) => (
            <div className="service-card" key={idx}>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              {service.items.length > 0 && (
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
