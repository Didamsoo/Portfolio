import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // NAVIGATION
      nav_about: "About",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_testimonial: "Testimonials",
      nav_contact: "Contact",

      // HERO SECTION
      
      hero_title_span: "Web Developer ",
      //hero_title: "& Problem Solver",
      hero_description: "Specialized in Web Development, JavaScript, React, Node.js, and scalable API integration.",

      

      // ABOUT SECTION
      about_label: "Adam El Mardi",
      about_description: "Passionate web developer specializing in both front-end and back-end, with over a year of hands-on experience turning ideas into innovative digital solutions. I excel at building high-performance, scalable, and user-centered web applications using technologies like React, Node.js, and MongoDB. My focus is on crafting seamless and optimized experiences to meet user needs while adhering to the best development practices. Whether you’re looking to create a custom website or a full-stack application, I’m ready to take on the challenge. Let’s bring your projects to life with efficiency and creativity. Don’t hesitate to reach out for a collaboration!",
      journey_title: "My professional journey",
      journey_1_title: "Junior Web Developer",
      journey_1_duration: "(2024 - Present)",
      journey_2_title: "OpenClassrooms Training",
      journey_2_duration: "Web Developer (2024)",
      download_resume: "Download my resume",

      // PROJECTS SECTION
      
      projects_title: "Selected Projects 2024",
      click_to_discover: "Click to discover",
      description: "Description",
      technologies: "Technologies",
      challenges: "Challenges",
      view_on_github: "View on GitHub",

      // Individual project translations
      project_1_title: "Booki",
      project_1_description: "A website allowing users to find accommodations and activities.",
      project_1_technologies: "HTML, CSS",
      project_1_challenges: "Learning responsive design for optimal compatibility.",

      project_2_title: "Sophie Bluel",
      project_2_description: "Enhancing the website of Sophie Bluel using JavaScript.",
      project_2_technologies: "JavaScript",
      project_2_challenges: "Efficient management of modals for better user experience.",

      project_3_title: "Nina Carducci",
      project_3_description: "Debugging and improving the performance of Nina Carducci's website.",
      project_3_technologies: "Audit, SEO",
      project_3_challenges: "Review and prioritize critical warnings.",

      project_4_title: "Kasa",
      project_4_description: "Redesigning Kasa website with React.",
      project_4_technologies: "React, NodeJS",
      project_4_challenges: "Getting familiar with a new library.",

      project_5_title: "Mon Vieux Grimoire",
      project_5_description: "Developing a complete book management application.",
      project_5_technologies: "Node.js, Express, MongoDB",
      project_5_challenges: "Getting started with backend development.",

      project_6_title: "Qwenta",
      project_6_description: "Ensuring successful delivery through project management.",
      project_6_technologies: "Project Management",
      project_6_challenges: "Choosing the right technologies.",

      // SKILLS SECTION
      skills_title: "Skills",
      skills_category_front_end: "Front-end",
      skills_category_back_end: "Back-end",
      skills_category_tools: "Tools",
            


    

      // CONTACT SECTION
      contact_title: "Have a project idea?",
      contact_description: "Let's bring it to life together!",
      contact_button: "Get in touch",
      footer_about: "About",
      footer_experience: "Experience",
      footer_portfolio: "Portfolio",
      footer_blog: "Blog"
    }
  },











  fr: {
    translation: {
      // NAVIGATION
      nav_about: "À propos",
      nav_projects: "Projets",
      nav_skills: "Compétences",
      nav_testimonial: "Témoignages",
      nav_contact: "Contact",

      // HERO SECTION
      hero_title_span: "Développeur Web",
      //hero_title: "& Optimiseur",
      hero_description: "Spécialisé en développement web front-end et back-end, avec plus d'un an d'expérience pratique.",


      // ABOUT SECTION
      about_label: "Adam El Mardi",
      about_description: "Développeur web passionné, spécialisé dans le front-end et le back-end, avec plus d'un an d'expérience concrète à transformer des idées en solutions digitales innovantes. J'excelle dans la création d'applications web performantes, évolutives et centrées sur l'utilisateur, en utilisant des technologies telles que React, Node.js et MongoDB. Mon objectif : concevoir des expériences fluides et optimisées pour répondre aux besoins des utilisateurs, tout en respectant les meilleures pratiques de développement. Que vous cherchiez à bâtir un site web sur-mesure ou une application complète, je suis prêt à relever le défi. Ensemble, réalisons vos projets avec efficacité et créativité. N'hésitez pas à me contacter pour collaborer !",
      journey_title: "Mon parcours professionnel",
      journey_1_title: "Développeur Web Junior",
      journey_1_duration: "(2024 - Présent)",
      journey_2_title: "Formation OpenClassrooms",
      journey_2_duration: "Développeur Web (2024)",
      download_resume: "Télécharger mon CV",

      // PROJECTS SECTION
      
      projects_title: "Sélection Projets 2024",
      click_to_discover: "Cliquez pour découvrir",
      description: "Description",
      technologies: "Technologies",
      challenges: "Problématiques",
      view_on_github: "Voir sur GitHub",

      project_1_title: "Booki",
      project_1_description: "Site pour trouver des hébergements et activités.",
      project_1_technologies: "HTML, CSS",
      project_1_challenges: "Apprentissage du design responsive.",

      project_2_title: "Sophie Bluel",
      project_2_description: "Amélioration du site de Sophie Bluel avec JavaScript.",
      project_2_technologies: "JavaScript",
      project_2_challenges: "Gestion efficace des modales.",

      project_3_title: "Nina Carducci",
      project_3_description: "Débogage et amélioration des performances.",
      project_3_technologies: "Audit, SEO",
      project_3_challenges: "Revoir et prioriser les avertissements critiques.",

      project_4_title: "Kasa",
      project_4_description: "Refonte du site Kasa avec React.",
      project_4_technologies: "React, NodeJS",
      project_4_challenges: "Prise en main d'une nouvelle bibliothèque.",

      project_5_title: "Mon Vieux Grimoire",
      project_5_description: "Développement d'une application de gestion de livres.",
      project_5_technologies: "Node.js, Express, MongoDB",
      project_5_challenges: "Initiation au développement backend.",

      project_6_title: "Qwenta",
      project_6_description: "Gestion de projet efficace.",
      project_6_technologies: "Gestion de projet",
      project_6_challenges: "Sélection des technologies adaptées.",

      // SKILLS SECTION
      skills_title: "Compétences",
      skills_category_front_end: "Front-end",
      skills_category_back_end: "Back-end",
      skills_category_tools: "Outils",

      // CONTACT SECTION
      contact_title: "Vous avez une idée de projet ?",
      contact_description: "Réalisons-le ensemble !",
      contact_button: "Contactez-moi",
      footer_about: "À propos",
      footer_experience: "Expérience",
      footer_portfolio: "Portfolio",
      footer_blog: "Blog"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
