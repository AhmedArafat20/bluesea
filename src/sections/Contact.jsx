// src/sections/Contact.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./Contact.css";

const Contact = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">

        <div className="contact-header text-center mb-5">
          <h2>{texts[lang].contactTitle}</h2>
          <p>{texts[lang].contactSubtitle}</p>
        </div>

        <div className="contact-grid">

          {/* Contact Info */}
          <div className="contact-info">
            <h4>{texts[lang].getInTouch}</h4>

            {/* Phone */}
            <p className="contact-item">
              <img
                src="/icons/telephone.png" // خلي الصورة موجودة في public/icons/
                alt="Phone"
                className="contact-icon"
              />
              <a href="tel:+966559361915">{texts[lang].phone}</a>
            </p>

            {/* Email */}
            <p className="contact-item">
              <img
                src="/icons/gmail.png" // خلي الصورة موجودة في public/icons/
                alt="Email"
                className="contact-icon"
              />
              <a href="mailto:Info@mcatering.com">{texts[lang].email}</a>
            </p>

          </div>

          {/* Map */}
          <div className="contact-map">
<iframe
  title="Riyadh Location"
  src="https://www.google.com/maps?q=Riyadh%20Saudi%20Arabia&hl=ar&z=14&output=embed"
  width="100%"
  height="300"
  style={{
    border: 0,
    borderRadius: "12px",
    display: "block",
  }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
