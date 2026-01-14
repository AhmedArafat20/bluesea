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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.703366576628!2d46.675295015001356!3d24.71355158412112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03452c4ec617%3A0x8f8f1cfb5b1c11f4!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1697593012345!5m2!1sen!2seg"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
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
