import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="burger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <Link to="hero" smooth={true} className="logo">
        //adam
      </Link>
      <div className="language-switch">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('fr')}>FR</button>
      </div>
      <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
          {t('nav_about')}
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
          {t('nav_projects')}
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
          {t('nav_skills')}
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
          {t('nav_contact')}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
