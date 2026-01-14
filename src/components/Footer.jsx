// src/components/Footer.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">
          
          {/* Company Info */}
          <div className="footer-block">
            <h4>{texts[lang].contactTitle}</h4>

            {/* Phone */}
            <p className="footer-contact-item">
              <img
                src="/icons/telephone.png"
                alt="Phone"
                className="footer-contact-icon"
              />
              <a href="tel:0559361915">{texts[lang].phone}</a>
            </p>

            {/* Email */}
            <p className="footer-contact-item">
              <img
                src="/icons/gmail.png"
                alt="Email"
                className="footer-contact-icon"
              />
              <a href="mailto:Info@mcatering.com">{texts[lang].email}</a>
            </p>

            {/* Address */}
            <p className="footer-contact-item">

              {texts[lang].address}
            </p>
          </div>

          {/* CTA */}
          <div className="footer-block footer-cta">
            <h3>{texts[lang].ctaTitle}</h3>
            <p>{texts[lang].ctaDescription}</p>
          </div>

          {/* QR Code */}
          <div className="footer-block footer-qr">
            <img
              src="/images/qrcode.png"
              alt={texts[lang].ctaTitle}
            />
            <span>{texts[lang].qrText}</span>
          </div>

        </div>

        <div className="footer-bottom text-center mt-4">
          <p>© {new Date().getFullYear()} {texts[lang].companyName}. {texts[lang].rights}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
