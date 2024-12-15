import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: { [key: string]: { [lang: string]: string } } = {

    // Header-Komponente
    'HEADER.LANGUAGE.ENGLISH': { en: 'English', de: 'Englisch' },
    'HEADER.LANGUAGE.GERMAN': { en: 'German', de: 'Deutsch' },
    'HEADER.ABOUT_ME': { en: 'About me', de: 'Über mich' },
    'HEADER.SKILLS': { en: 'Skills', de: 'Fähigkeiten' },
    'HEADER.PORTFOLIO': { en: 'Portfolio', de: 'Portfolio' },
    'HEADER.CONTACT': { en: 'Contact', de: 'Kontakt' },

    // Intro-Komponente
    'INTRO.BUTTON.LETS_TALK': { en: "Let's Talk", de: "Lass uns reden" },
    'INTRO.PORTRAIT_ALT': { en: 'Portrait of Gloria Schaffarczyk', de: 'Porträt von Gloria Schaffarczyk' },
    'INTRO.SHADOW_ALT': { en: 'Decorative shadow overlay', de: 'Dekorative Schattenüberlagerung' },
    'INTRO.GITHUB_ALT': { en: 'GitHub profile link', de: 'Link zum GitHub-Profil' },
    'INTRO.EMAIL_ALT': { en: 'Email contact link', de: 'Link zur E-Mail-Kontaktaufnahme' },
    'INTRO.LINKEDIN_ALT': { en: 'LinkedIn profile link', de: 'Link zum LinkedIn-Profil' },
    'INTRO.SCROLL.DOWN': { en: 'Scroll down', de: 'Runterscrollen' },

    // About-Me-Komponente
    'ABOUT_ME.TITLE': { en: 'About me', de: 'Über mich' },
    'ABOUT_ME.INTRO': {
      en: "Hey there! I'm Gloria, a frontend developer fueled by a passion for crafting user-friendly digital experiences. With a talent for problem-solving and an eye for detail, I specialize in translating complex ideas into elegant designs.",
      de: "Hallo! Ich bin Gloria, eine Frontend-Entwicklerin mit einer Leidenschaft für benutzerfreundliche digitale Erlebnisse. Mit einem Talent für Problemlösung und einem Auge für Details spezialisiere ich mich darauf, komplexe Ideen in elegante Designs zu übersetzen."
    },
    'ABOUT_ME.CONNECT': {
      en: "Let's connect and create something amazing together!",
      de: "Lass uns vernetzen und gemeinsam etwas Großartiges erschaffen!"
    },
    'ABOUT_ME.BULLET.LOCATION': {
      en: "Flexible in terms of working environments, I can work effectively both on-site in Kempten and remotely.",
      de: "Flexibel bei Arbeitsorten: Ich kann sowohl vor Ort in Kempten als auch remote effektiv arbeiten."
    },
    'ABOUT_ME.BULLET.CREATIVITY': {
      en: "I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.",
      de: "Ich bin offen und suche stets nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten zu verbessern."
    },
    'ABOUT_ME.BULLET.PROBLEM_SOLVING': {
      en: "In my profession, programming isn't just about writing code; it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.",
      de: "Programmieren bedeutet für mich nicht nur Code schreiben, sondern kreative Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen umzuwandeln. So helfe ich dir, deine Ziele zu erreichen und deine Visionen zum Leben zu erwecken."
    },
    'ABOUT_ME.BULLET.LOCATION_ICON_ALT': {
      en: "Location icon representing flexibility in working environments",
      de: "Standortsymbol, das die Flexibilität bei Arbeitsorten darstellt"
    },
    'ABOUT_ME.BULLET.CREATIVITY_ICON_ALT': {
      en: "Lightbulb icon representing creativity and open-mindedness",
      de: "Glühbirnensymbol, das Kreativität und Offenheit darstellt"
    },
    'ABOUT_ME.BULLET.PROBLEM_ICON_ALT': {
      en: "Puzzle piece icon symbolizing problem-solving skills",
      de: "Puzzlesymbol, das Problemlösungsfähigkeiten symbolisiert"
    },
    'ABOUT_ME.PORTRAIT_ALT': {
      en: "A portrait of Gloria, a frontend developer, smiling and ready to create user-friendly digital experiences",
      de: "Ein Porträt von Gloria, einer Frontend-Entwicklerin, lächelnd und bereit, benutzerfreundliche digitale Erlebnisse zu erschaffen"
    },

    // Skills-Komponente
    'SKILLS.TITLE': {
      en: 'My skills',
      de: 'Meine Fähigkeiten'
    },
    'SKILLS.DESCRIPTION': {
      en: 'I have gained experience in building projects with different frontend technologies and concepts.',
      de: 'Ich habe Erfahrung im Erstellen von Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.'
    },
    'SKILLS.LOOKING': {
      en: 'Looking for',
      de: 'Suchst du nach'
    },
    'SKILLS.CONTACT_ME': {
      en: 'another skill',
      de: 'einer anderen Fähigkeit'
    },
    'SKILLS.CONTACT_TEXT': {
      en: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
      de: 'Kontaktiere mich gerne. Ich freue mich darauf, mein Wissen zu erweitern.'
    },
    'SKILLS.CONTACT_ME_BUTTON': {
      en: 'Get in touch',
      de: 'Kontaktiere mich'
    },
    'SKILLS.TOOLTIP_ALT': {
      en: 'React and Vue Tooltip',
      de: 'Tooltip für React und Vue'
    },

    // Portfolio-Komponente
    'PORTFOLIO.TITLE': { en: 'Portfolio', de: 'Portfolio' },
    'PORTFOLIO.DESCRIPTION': {
      en: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      de: 'Entdecke eine Auswahl meiner Arbeiten – Interagiere mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',
    },
    'PROJECT.JOIN.TITLE': { en: 'Join', de: 'Join' },
    'PROJECT.JOIN.DESCRIPTION': {
      en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      de: 'Ein Aufgabenmanager, inspiriert vom Kanban-System. Aufgaben erstellen, per Drag-and-Drop organisieren, Benutzer und Kategorien zuweisen.',
    },
    'PROJECT.MONSTER.TITLE': { en: 'Monster munching madness', de: 'Monster-Fress-Wahnsinn' },
    'PROJECT.MONSTER.DESCRIPTION': {
      en: 'A simple Jump-and-Run game based on an object-oriented approach. Fight scary zombies and evil monsters with bombs while collecting Halloween candy.',
      de: 'Ein einfaches Jump-and-Run-Spiel, das auf objektorientierter Programmierung basiert. Bekämpfe Zombies und Monster mit Bomben und sammle Halloween-Süßigkeiten.',
    },
    'PROJECT.POKEDEX.TITLE': { en: 'Pokédex', de: 'Pokédex' },
    'PROJECT.POKEDEX.DESCRIPTION': {
      en: 'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
      de: 'Basierend auf der PokéAPI, einer einfachen Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
    },
    'BUTTON.LIVE_TEST': { en: 'Live test', de: 'Live-Test' },
    'BUTTON.GITHUB': { en: 'Github', de: 'Github' },

    // Testimonials-Komponente
    'TESTIMONIALS.AUTHOR1': {
      en: 'Johann - Frontend Developer',
      de: 'Johann - Frontend-Entwickler'
    },
    'TESTIMONIALS.QUOTE1': {
      en: "Together we tackled a development project that required immediate, effective problem-solving and her ability to understand new tools and implement technical solutions stood out. Gloria's work contributed greatly to the project's success.",
      de: "Gemeinsam haben wir ein Entwicklungsprojekt gemeistert, das sofortige, effektive Problemlösungen erforderte. Glorias Fähigkeit, neue Tools zu verstehen und technische Lösungen umzusetzen, war herausragend. Ihre Arbeit trug maßgeblich zum Erfolg des Projekts bei."
    },

    'TESTIMONIALS.AUTHOR2': {
      en: 'Nicole - Frontend Developer',
      de: 'Nicole - Frontend-Entwicklerin'
    },
    'TESTIMONIALS.QUOTE2': {
      en: "During the frontend training at the Developer Akademie (DA), Gloria's readiness to exchange strategies, suggest solutions, and provide encouragement enhanced the collective learning experience — a quality that would serve any team well.",
      de: "Während des Frontend-Trainings bei der Developer Akademie (DA) hat Glorias Bereitschaft, Strategien auszutauschen, Lösungen vorzuschlagen und Unterstützung zu leisten, das kollektive Lernen erheblich verbessert — eine Eigenschaft, die jedes Team bereichern würde."
    },

    'TESTIMONIALS.AUTHOR3': {
      en: 'David - Colleague',
      de: 'David - Kollege'
    },
    'TESTIMONIALS.QUOTE3': {
      en: "Over nine years of working together, Gloria demonstrated a strong command of diverse technical environments, adapting seamlessly to evolving requirements. Her reliability, versatility, and results-oriented mindset made a positive impact.",
      de: "Über neun Jahre der Zusammenarbeit hinweg hat Gloria umfassende technische Fähigkeiten in vielfältigen Umgebungen gezeigt und sich nahtlos an neue Anforderungen angepasst. Ihre Zuverlässigkeit, Vielseitigkeit und ihr ergebnisorientiertes Denken haben einen positiven Einfluss gehabt."
    },

    // Contact-Form-Komponente
    'CONTACT.TITLE': { en: 'Contact', de: 'Kontakt' },
    'CONTACT.SUBTITLE': { en: 'Got a problem to solve?', de: 'Ein Problem zu lösen?' },
    'CONTACT.DESCRIPTION': {
      en: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
      de: 'Kontaktiere mich über dieses Formular. Ich freue mich, von deinen Ideen zu hören und zu deinen Projekten beizutragen.'
    },
    'CONTACT.NEED_FRONTEND': { en: 'Need a Frontend Developer?', de: 'Brauchst du eine Frontend-Entwicklerin?' },
    'CONTACT.CTA_STRONG': { en: 'Contact me!', de: 'Kontaktiere mich!' },
    'CONTACT.NAME_LABEL': { en: 'Your name', de: 'Dein Name' },
    'CONTACT.NAME_PLACEHOLDER': { en: 'Your name', de: 'Dein Name' },
    'CONTACT.NAME_REQUIRED': { en: 'Name is required', de: 'Name ist erforderlich' },
    'CONTACT.EMAIL_LABEL': { en: 'Your email', de: 'Deine E-Mail' },
    'CONTACT.EMAIL_PLACEHOLDER': { en: 'Your email', de: 'Deine E-Mail' },
    'CONTACT.EMAIL_REQUIRED': { en: 'Email is required', de: 'E-Mail ist erforderlich' },
    'CONTACT.EMAIL_INVALID': { en: 'Email is not valid', de: 'E-Mail ist ungültig' },
    'CONTACT.MESSAGE_LABEL': { en: 'Your message', de: 'Deine Nachricht' },
    'CONTACT.MESSAGE_PLACEHOLDER': { en: 'Please enter your message', de: 'Bitte gib deine Nachricht ein' },
    'CONTACT.MESSAGE_REQUIRED': { en: 'Message is required', de: 'Nachricht ist erforderlich' },
    'CONTACT.MESSAGE_MINLENGTH': {
      en: 'Message must be at least 10 characters long',
      de: 'Die Nachricht muss mindestens 10 Zeichen lang sein'
    },
    'CONTACT.PRIVACY_TEXT': { en: "I've read the", de: 'Ich habe die' },
    'CONTACT.PRIVACY_LINK': { en: 'privacy policy', de: 'Datenschutzerklärung' },
    'CONTACT.PRIVACY_AGREE': { en: 'and agree to the processing of my data.', de: 'gelesen und stimme der Verarbeitung meiner Daten zu.' },
    'CONTACT.PRIVACY_REQUIRED': {
      en: 'Please accept the privacy policy.',
      de: 'Bitte akzeptiere die Datenschutzerklärung.'
    },
    'CONTACT.BUTTON.SUBMIT': { en: 'Send message :)', de: 'Nachricht senden :)' },
    'CONTACT.ARROW_ALT': { en: 'Arrow pointing upwards for navigation', de: 'Pfeil nach oben für die Navigation' },
    'CONTACT.SUCCESS_MESSAGE': {
      en: 'Your message has been sent successfully!',
      de: 'Deine Nachricht wurde erfolgreich gesendet!'
    },
    'CONTACT.ERROR_MESSAGE': {
      en: 'Failed to send your message. Try again later.',
      de: 'Nachricht konnte nicht gesendet werden. Bitte später versuchen.'
    },

    // Footer-Komponente
    'FOOTER.IMPRINT': { en: 'Imprint', de: 'Impressum' },

// Imprint-Komponente
'IMPRINT.TITLE': { en: 'Imprint', de: 'Impressum' },
'IMPRINT.CONTENT': {
  en: `
    <p><strong>Information according to § 5 DDG:</strong></p>
    <p>Gloria Schaffarczyk<br>Rottachstraße 34<br>87439 Kempten</p>
    <p><strong>Represented by:</strong><br>Gloria Schaffarczyk</p>
    <p><strong>Contact:</strong><br>Phone: 0176-86715651<br>
    Email: <a href="mailto:gloria.schaffarczyk@gmail.com">gloria.schaffarczyk@gmail.com</a></p>
    <p><strong>Disclaimer:</strong></p>
    <p><strong>Liability for Content</strong><br>The content of our pages...</p>
    <p><strong>Liability for Links</strong><br>Our offer contains links...</p>
    <p><strong>Copyright</strong><br>The content and works created...</p>
    <p><strong>Data Protection</strong><br>The use of our website is...</p>
    <p><strong>Google Analytics</strong><br>This website uses Google Analytics...</p>
    <p><strong>Google AdSense</strong><br>This website uses Google AdSense...</p>
    <p>Website imprint created by <a href="https://www.impressum-generator.de" target="_blank" rel="noopener noreferrer">
    impressum-generator.de</a> from <a href="https://www.kanzlei-hasselbach.de/" target="_blank" rel="nofollow">Kanzlei Hasselbach</a></p>
  `,
  de: `
    <p><strong>Angaben gemäß § 5 DDG:</strong></p>
    <p>Gloria Schaffarczyk<br>Rottachstraße 34<br>87439 Kempten</p>
    <p><strong>Vertreten durch:</strong><br>Gloria Schaffarczyk</p>
    <p><strong>Kontakt:</strong><br>Telefon: 0176-86715651<br>
    Email: <a href="mailto:gloria.schaffarczyk@gmail.com">gloria.schaffarczyk@gmail.com</a></p>
    <p><strong>Haftungsausschluss:</strong></p>
    <p><strong>Haftung für Inhalte</strong><br>Die Inhalte unserer Seiten...</p>
    <p><strong>Haftung für Links</strong><br>Unser Angebot enthält Links...</p>
    <p><strong>Urheberrecht</strong><br>Die durch die Seitenbetreiber erstellten...</p>
    <p><strong>Datenschutz</strong><br>Die Nutzung unserer Website ist...</p>
    <p><strong>Google Analytics</strong><br>Diese Website benutzt Google Analytics...</p>
    <p><strong>Google AdSense</strong><br>Diese Website verwendet Google AdSense...</p>
    <p>Website-Impressum erstellt durch <a href="https://www.impressum-generator.de" target="_blank" rel="noopener noreferrer">
    impressum-generator.de</a> von <a href="https://www.kanzlei-hasselbach.de/" target="_blank" rel="nofollow">Kanzlei Hasselbach</a></p>
  `
},
'IMPRINT.HOME_LINK': { en: '← Home', de: '← Startseite' },


// Privacy Policy-Komponente
'PRIVACY_POLICY.TITLE': { en: 'Privacy Policy', de: 'Datenschutzerklärung' },
'PRIVACY_POLICY.CONTENT': {
  en: `
    <p><strong>Overview of Data Protection</strong></p>
    <p>The following information provides a simple overview of what happens...</p>
    <p><strong>Hosting</strong></p>
    <p>We host the content of our website with the following provider:</p>
    <p><strong>Strato</strong><br>The provider is Strato AG...</p>
    <p><strong>General Information</strong></p>
    <p>We take the protection of your data seriously...</p>
    <p><strong>Notice Regarding the Responsible Party</strong><br>Gloria Schaffarczyk...</p>
    <p><strong>Source:</strong> <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">
    https://www.e-recht24.de</a></p>
  `,
  de: `
    <p><strong>Übersicht zum Datenschutz</strong></p>
    <p>Die folgenden Informationen bieten einen einfachen Überblick...</p>
    <p><strong>Hosting</strong></p>
    <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
    <p><strong>Strato</strong><br>Der Anbieter ist die Strato AG...</p>
    <p><strong>Allgemeine Hinweise</strong></p>
    <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst...</p>
    <p><strong>Hinweis zur verantwortlichen Stelle</strong><br>Gloria Schaffarczyk...</p>
    <p><strong>Quelle:</strong> <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">
    https://www.e-recht24.de</a></p>
  `
},
'PRIVACY_POLICY.HOME_LINK': { en: '← Home', de: '← Startseite' },

  };

  public currentLanguage = 'en';

  setLanguage(lang: string): void {
    this.currentLanguage = lang;
    localStorage.setItem('lang', lang);
  }

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLanguage = localStorage.getItem('lang');
      this.currentLanguage = savedLanguage || 'en';
    } else {
      this.currentLanguage = 'en'; // Fallback, wenn localStorage nicht verfügbar ist
    }
  }

  translate(key: string): string {
    return this.translations[key]?.[this.currentLanguage] || key;
  }
}
