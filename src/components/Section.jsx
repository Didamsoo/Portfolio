import React, { useEffect, useRef, useState } from 'react';
import './Section.scss';

const Section = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Détecte quand 50% de la section est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`section ${isVisible ? 'visible' : 'hidden'}`}
    >
      {children}
    </div>
  );
};

export default Section;
