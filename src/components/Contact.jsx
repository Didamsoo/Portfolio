import React from 'react';
import './Contact.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-left">
          <h2>{t('contact_title')}</h2>
          <p>{t('contact_description')}</p>
          <div className="social-icons">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="contact-right">
          <a 
            href="mailto:adam.elmardi@gmail.com" 
            className="get-in-touch"
          >
            {t('contact_button')} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
