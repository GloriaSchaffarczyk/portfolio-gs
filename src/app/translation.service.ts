import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: { [key: string]: { [lang: string]: string } } = {

    // Header-Komponente
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
    'INTRO.IMG.NAME': { en: 'english-svg', de: 'german-svg' },

    // About-Me-Komponente
    'ABOUT_ME.TITLE': { en: 'About me', de: 'Über mich' },
    'ABOUT_ME.INTRO': {
      en: "Hi, I’m Gloria, a frontend developer from Kempten, Germany. This portfolio, built with Angular, showcases some of my recent projects and highlights the technologies I work with.",
      de: "Hallo, ich bin Gloria, Frontend-Entwicklerin aus Kempten. Dieses Portfolio, das ich mit Angular umgesetzt habe, bietet einen Einblick in meine Arbeit und die von mir genutzten Technologien."
    },
    'ABOUT_ME.CONNECT': {
      en: "I enjoy turning designs into precise, functional solutions. If this approach fits your project, I’d love to be part of it.",
      de: "Designs setze ich gerne detailgetreu und strukturiert um. Passt mein Ansatz zu deinen Projekten, freue ich mich auf die Zusammenarbeit."
    },
    'ABOUT_ME.BULLET.LOCATION': {
      en: "I am flexible and open to working both on-site in Kempten and remotely, ensuring effective collaboration in any setting.",
      de: "Ich bin flexibel und arbeite effizient, sowohl vor Ort in Kempten als auch remote."
    },
    'ABOUT_ME.BULLET.CREATIVITY': {
      en: "Creativity, to me, means using curiosity and an open mindset to tackle challenges and improve with every project.",
      de: "Kreativität bedeutet für mich, mit Neugier und Offenheit Herausforderungen anzugehen und mich durch jedes Projekt weiterzuentwickeln."
    },
    'ABOUT_ME.BULLET.PROBLEM_SOLVING': {
      en: "I approach programming by transforming complex requirements into clear and maintainable solutions. I focus on creating modular, user-friendly applications that can effortlessly adapt to future needs.",
      de: "Beim Programmieren verwandle ich komplexe Anforderungen in klare, wartbare Lösungen. Mein Fokus liegt darauf, modulare und benutzerfreundliche Anwendungen zu entwickeln, die sich an zukünftige Anforderungen anpassen lassen."
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
      en: 'I have experience building projects using various frontend technologies and concepts. This is my current tech stack.',
      de: 'Ich habe Erfahrung in der Umsetzung von Projekten mit verschiedenen Frontend-Technologien und -Konzepten. Das ist mein aktueller Techstack.'
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
      de: 'Kontaktiere mich gerne. Ich freue mich darauf, mein Wissen kontinuierlich zu erweitern.'
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
      en: 'Here you’ll find a selection of my work – Interact to see what I’ve created.',
      de: 'Entdecke mein Portfolio – Interagiere mit den Projekten, um meine Arbeit in Aktion zu erleben.',
    },
    'PROJECT.JOIN.TITLE': { en: 'Join', de: 'Join' },
    'PROJECT.JOIN.DESCRIPTION': {
      en: 'Join is a task management tool based on the Kanban system: Create and organize tasks using drag and drop functions, assign users and categories.',
      de: 'Join ist ein Aufgabenverwaltungstool, das auf dem Kanban-Prinzip basiert: Erstelle Aufgaben, verknüpfe sie mit Benutzern und organisiere alles per Drag-and-Drop.',
    },
    'PROJECT.MONSTER.TITLE': { en: 'Monster Munching Madness', de: 'Monster Munching Madness' },
    'PROJECT.MONSTER.DESCRIPTION': {
      en: 'Monster Munching Madness is a 2D Jump-and-Run game based on object-oriented programming: Fight zombies and monsters with bombs while collecting Halloween candy.',
      de: 'Monster Munching Madness ist ein 2D Jump-and-Run-Spiel, das auf objektorientierter Programmierung basiert: Bekämpfe Zombies und Monster mit Bomben und sammle Halloween-Süßigkeiten.'
    },
    'PROJECT.POKEDEX.TITLE': { en: 'Pokédex', de: 'Pokédex' },
    'PROJECT.POKEDEX.DESCRIPTION': {
      en: 'Pokédex is a library based on the RESTful PokéAPI: Explore different Pokémon and discover their strengths and weaknesses',
      de: 'Der Pokédex ist eine Bibliothek, die auf der RESTful PokéAPI basiert: Entdecke verschiedene Pokémon und lerne mehr über ihre Stärken und Schwächen.'
    },
    'BUTTON.LIVE_TEST': { en: 'Live test', de: 'Live-Test' },
    'BUTTON.GITHUB': { en: 'Github', de: 'Github' },

    // Testimonials-Komponente
    'TESTIMONIALS.AUTHOR1': {
      en: 'Johann - Frontend Developer',
      de: 'Johann - Frontend-Entwickler'
    },
    'TESTIMONIALS.QUOTE1': {
      en: "Together we tackled a development project that required immediate, effective problem-solving. Glorias ability to understand new tools and implement technical solutions stood out. Her work contributed greatly to the project's success.",
      de: "Gemeinsam haben wir ein Entwicklungsprojekt gemeistert, das eine schnelle Problemlösung erforderte. Glorias Fähigkeit, neue Tools zu verstehen und zu implementieren, ist wirklich gut. Ihre Arbeit trug maßgeblich zum Erfolg des Projekts bei."
    },

    'TESTIMONIALS.AUTHOR2': {
      en: 'Nicole - Frontend Developer',
      de: 'Nicole - Frontend-Entwicklerin'
    },
    'TESTIMONIALS.QUOTE2': {
      en: "During our frontend training at Developer Akademie (DA), Glorias readiness to exchange strategies, suggest solutions, and provide encouragement enhanced the collective learning experience — those are qualities that serve any team well.",
      de: "Im Rahmen unserer Frontend-Ausbildung bei der Developer Akademie (DA) hat Glorias Bereitschaft, ihr Wissen zu teilen und Lösungen zu finden, das kollektive Lernen positiv beeinflusst — Eigenschaften, die jedes Team bereichern."
    },

    'TESTIMONIALS.AUTHOR3': {
      en: 'David - Colleague',
      de: 'David - Kollege'
    },
    'TESTIMONIALS.QUOTE3': {
      en: "Gloria has proven her ability to quickly and flexibly familiarize herself with various technical areas and seamlessly adapt to changing requirements. Her reliability, versatility, and results-oriented mindset had a positive impact on our company.",
      de: "Gloria kann sich schnell und flexibel in verschiedene technische Bereiche einarbeiten und an sich ändernde Anforderungen anpassen. Ihre Vielseitigkeit und ergebnisorientierte Denkweise beeinflussen unser Unternehmen positiv."
    },

    // Contact-Form-Komponente
    'CONTACT.TITLE': { en: 'Contact', de: 'Kontakt' },
    'CONTACT.SUBTITLE': { en: 'Got a problem to solve?', de: 'Du hast ein Problem zu lösen?' },
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
    'CONTACT.EMAIL_REQUIRED': { en: 'Email is required', de: 'E-Mail-Adresse ist erforderlich' },
    'CONTACT.EMAIL_INVALID': { en: 'Email is not valid', de: 'Das ist kein gültiges E-Mail-Format' },
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
      de: 'Nachricht konnte nicht gesendet werden. Bitte versuche es später nochmal.'
    },

    // Footer-Komponente
    'FOOTER.IMPRINT': { en: 'Imprint', de: 'Impressum' },

    // Imprint-Komponente
    'IMPRINT.TITLE': { en: 'Imprint', de: 'Impressum' },
    'IMPRINT.CONTENT': {
      en: `
        <p>Information in accordance with § 5 DDG:</p>
        <p>Gloria Schaffarczyk<br>Rottachstraße 34<br>87439 Kempten</p>
        <p><strong>Represented by:</strong><br>
          Gloria Schaffarczyk<br>
        </p>
        <p><strong>Contact:</strong><br>
          Phone: 0176-86715651<br>
          Email: <a href='mailto:mail@gloria-schaffarczyk.de'>mail(at)gloria-schaffarczyk.de</a><br>
        </p>
        <p><strong>Disclaimer:</strong><br><br>
          <strong>Liability for content</strong><br><br>
          The content of our pages has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 paragraph 1 DDG under general laws. According to §§ 8 to 10 DDG, we are not obligated as a service provider to monitor transmitted or stored third-party information or investigate circumstances indicating illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time we become aware of a specific legal infringement. Upon notification of such violations, we will remove the content immediately.<br><br>
          <strong>Liability for links</strong><br><br>
          Our offer contains links to external third-party websites over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for potential legal violations at the time of linking. Illegal content was not recognizable at the time of linking. Permanent monitoring of the linked pages’ content is, however, unreasonable without concrete indications of a legal violation. Upon notification of legal violations, we will remove such links immediately.<br><br>
          <strong>Copyright</strong><br><br>
          The content and works on these pages created by the site operators are subject to German copyright law. Duplication, editing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are permitted for private, non-commercial use only. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nonetheless become aware of a copyright infringement, please notify us accordingly. Upon notification of legal violations, we will remove such content immediately.<br><br>
          <strong>Privacy policy</strong><br><br>
          The use of our website is generally possible without providing personal data. Insofar as personal data (e.g., name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis, as far as possible. This data will not be disclosed to third parties without your explicit consent.<br>
          Please note that data transmission over the Internet (e.g., communication via email) can have security vulnerabilities. Complete protection of data against access by third parties is not possible.<br>
          The use of contact data published as part of the legal notice obligation by third parties for sending unsolicited advertising and information materials is hereby expressly prohibited. The operators of these pages expressly reserve the right to take legal action in the event of unsolicited advertising information being sent, for instance, through spam emails.<br>
          <br><br><strong>Google Analytics</strong><br><br>
          This website uses Google Analytics, a web analytics service provided by Google Inc. ("Google"). Google Analytics uses "cookies," text files stored on your computer that enable an analysis of your website usage. The information generated by the cookie about your use of this website (including your IP address) will be transmitted to and stored on a Google server in the USA. Google will use this information to evaluate your use of the website, compile reports on website activity for website operators, and provide other services related to website activity and Internet usage. Google may also transfer this information to third parties if required by law or if third parties process this data on Google’s behalf. Google will not associate your IP address with any other data held by Google. You can prevent cookies from being installed by adjusting your browser software settings; however, please note that doing so may prevent you from fully utilizing all functions of this website. By using this website, you consent to the processing of your data by Google in the manner and for the purposes described above.<br><br>
          <strong>Google AdSense</strong><br><br>
          This website uses Google AdSense, a web advertising service of Google Inc., USA ("Google"). Google AdSense uses "cookies" (text files) stored on your computer to allow an analysis of your website usage. Google AdSense also uses "web beacons" (small invisible graphics) to collect information. Web beacons can be used to record and collect simple actions such as visitor traffic on the website. The information generated by the cookie and/or web beacon about your use of this website (including your IP address) is transmitted to and stored on a Google server in the USA. Google will use this information to evaluate your use of the website in relation to advertisements, compile reports on website activity and advertisements for website operators, and provide other services related to website and Internet usage. Google may also transfer this information to third parties if required by law or if third parties process this data on Google’s behalf. Google will not associate your IP address with other data held by Google. You can prevent cookies and web beacons from being stored on your hard drive and displayed by selecting "do not accept cookies" in your browser settings (in Internet Explorer under "Tools > Internet Options > Privacy > Settings"; in Firefox under "Tools > Settings > Privacy > Cookies"); however, please note that doing so may prevent you from fully utilizing all functions of this website. By using this website, you consent to the processing of your data by Google in the manner and for the purposes described above.
        </p><br>
        Website legal notice generated using <a href="https://www.impressum-generator.de">impressum-generator.de</a> by <a href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Kanzlei Hasselbach</a>.

  `,
      de: `
<p>Angaben gemäß § 5 DDG:</p>
    <p>Gloria Schaffarczyk<br>Rottachstraße 34<br>87439 Kempten</p>
    <p> <strong>Vertreten durch: </strong><br>
      Gloria Schaffarczyk<br>
    </p>
    <p><strong>Kontakt:</strong> <br>
      Telefon: 0176-86715651<br>
      E-Mail: <a href='mailto:mail@gloria-schaffarczyk.de'>mail(at)gloria-schaffarczyk.de</a><br></p>
    <p><strong>Haftungsausschluss: </strong><br><br>
      <strong>Haftung für Inhalte</strong><br><br>
      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
      Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG
      für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
      als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
      oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
      oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
      diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
      Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
      entfernen.<br><br><strong>Haftung für Links</strong><br><br>
      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
      können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
      der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
      Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
      erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
      einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
      umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
      Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
      Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
      dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
      Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
      Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
      wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
      umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>
      Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
      Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies,
      soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
      Dritte weitergegeben. <br>
      Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
      Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
      <br>
      Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
      nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
      Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
      Werbeinformationen, etwa durch Spam-Mails, vor.<br>
      <br><br><strong>Google Analytics</strong><br><br>
      Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics
      verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der
      Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung
      dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort
      gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über
      die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der
      Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an
      Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google
      verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
      können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir
      weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
      voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie
      erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck
      einverstanden.<br><br><strong>Google AdSense</strong><br><br>
      Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA (''Google''). Google Adsense
      verwendet sog. ''Cookies'' (Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der
      Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch sog. ''Web Beacons'' (kleine unsichtbare
      Grafiken) zur Sammlung von Informationen. Durch die Verwendung des Web Beacons können einfache Aktionen wie der
      Besucherverkehr auf der Webseite aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web Beacon
      erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) werden an einen
      Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre
      Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen
      für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung
      verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte
      übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google
      verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Das
      Speichern von Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern, indem Sie in
      Ihren Browser-Einstellungen ''keine Cookies akzeptieren'' wählen (Im MS Internet-Explorer unter ''Extras >
      Internetoptionen > Datenschutz > Einstellung''; im Firefox unter ''Extras > Einstellungen > Datenschutz >
      Cookies''); wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen
      dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der
      Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor
      benannten Zweck einverstanden.
    </p><br>
    Website Impressum erstellt durch <a href="https://www.impressum-generator.de">impressum-generator.de</a> von der <a
      href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Kanzlei Hasselbach</a>
  `
    },
    'IMPRINT.HOME_LINK': { en: '← Home', de: '← Startseite' },

    // Privacy Policy-Komponente
    'PRIVACY_POLICY.TITLE': { en: 'Privacy Policy', de: 'Datenschutzerklärung' },
    'PRIVACY_POLICY.CONTENT': {
      en: `
<h2>1. Data Protection at a Glance</h2>
<h3>General Information</h3>
<p>The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data refers to any data that can personally identify you. Detailed information on data protection can be found in our privacy policy below.</p>
<h3>Data Collection on this Website</h3>
<h4>Who is responsible for data collection on this website?</h4>
<p>Data processing on this website is carried out by the website operator. Their contact details can be found in the section "Information on the Responsible Party" in this privacy policy.</p>
<h4>How do we collect your data?</h4>
<p>Your data is collected on the one hand by you providing it to us. This could include data you enter in a contact form.</p>
<p>Other data is automatically collected or collected with your consent when you visit the website by our IT systems. This primarily includes technical data (e.g., internet browser, operating system, or the time of page access). This data is collected automatically as soon as you enter this website.</p>
<h4>What do we use your data for?</h4>
<p>Part of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior. If contracts are concluded or initiated through the website, the transmitted data is also processed for contract offers, orders, or other business inquiries.</p>
<h4>What rights do you have regarding your data?</h4>
<p>You have the right at any time to receive information free of charge about the origin, recipient, and purpose of your stored personal data. You also have the right to request correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. Additionally, you have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.</p>
<p>You can contact us at any time regarding these or other questions on the topic of data protection.</p>
<h3>Analysis Tools and Third-Party Tools</h3>
<p>When visiting this website, your surfing behavior may be statistically analyzed. This is primarily done using analysis programs.</p>
<p>Detailed information on these analysis programs can be found in the following privacy policy.</p>
<h2>2. Hosting</h2>
<p>We host the content of our website with the following provider:</p>
<h3>Strato</h3>
<p>The provider is Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (hereinafter referred to as "Strato"). When you visit our website, Strato collects various log files, including your IP addresses.</p>
<p>Further information can be found in Strato's privacy policy: <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer">https://www.strato.de/datenschutz/</a>.</p>
<p>The use of Strato is based on Art. 6(1)(f) GDPR. We have a legitimate interest in a reliable presentation of our website. If consent was requested, the processing is carried out exclusively based on Art. 6(1)(a) GDPR and § 25(1) TDDG, insofar as the consent includes the storage of cookies or access to information on the user's end device (e.g., device fingerprinting) under the TDDG. Consent can be revoked at any time.</p>
<h4>Order Processing</h4>
<p>We have concluded a data processing agreement (DPA) with the above-mentioned service provider. This is a data protection contract required by law to ensure that they process personal data of our website visitors only according to our instructions and in compliance with the GDPR.</p>
<h2>3. General Information and Mandatory Information</h2>
<h3>Data Protection</h3>
<p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>
<p>When you use this website, various personal data are collected. Personal data is any data by which you can be personally identified. This privacy policy explains which data we collect and what we use it for. It also explains how and for what purpose this happens.</p>
<p>We point out that data transmission over the Internet (e.g., when communicating by email) can have security gaps. A complete protection of data from access by third parties is not possible.</p>
<h3>Information on the Responsible Party</h3>
<p>The responsible party for data processing on this website is:</p>
<p>Gloria Schaffarczyk<br />
Rottachstr. 34<br />
87439 Kempten</p>
<p>Phone: 017686715651<br />
Email: mail@gloria-schaffarczyk.de</p>
<p>The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of processing personal data (e.g., names, email addresses, etc.).</p>
<h3>Storage Period</h3>
<p>Unless a specific storage period has been stated in this privacy policy, your personal data will remain with us until the purpose for data processing ceases to apply. If you make a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, deletion takes place after these reasons cease to apply.</p>
<h3>General Information on the Legal Basis for Data Processing on this Website</h3>
<p>If you have consented to data processing, we process your personal data based on Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR if special data categories are processed according to Art. 9(1) GDPR. In the case of explicit consent to the transfer of personal data to third countries, data processing is also carried out based on Art. 49(1)(a) GDPR. If you have consented to the storage of cookies or to access information on your end device (e.g., via device fingerprinting), data processing is also carried out based on § 25(1) TDDG. Consent can be revoked at any time. If your data is necessary for contract performance or pre-contractual measures, we process your data based on Art. 6(1)(b) GDPR. Furthermore, we process your data if required to fulfill a legal obligation based on Art. 6(1)(c) GDPR. Data processing may also be based on our legitimate interest under Art. 6(1)(f) GDPR. The specific legal basis for each case is provided in the following sections of this privacy policy.</p>
<h3>Recipients of Personal Data</h3>
<p>As part of our business activities, we work with various external parties. This sometimes requires the transfer of personal data to these external parties. We only share personal data with external parties when it is necessary for contract fulfillment, when we are legally obligated to do so (e.g., sharing data with tax authorities), when we have a legitimate interest under Art. 6(1)(f) GDPR in sharing the data, or when another legal basis permits data sharing. When using processors, we only share personal data of our customers based on a valid data processing agreement. In the case of joint processing, a joint processing agreement is concluded.</p>
<h3>Withdrawal of Your Consent to Data Processing</h3>
<p>Many data processing operations are only possible with your explicit consent. You can revoke an already given consent at any time. The legality of the data processing carried out until the withdrawal remains unaffected by the withdrawal.</p>
<h3>Right to Object to Data Collection in Special Cases and to Direct Advertising (Art. 21 GDPR)</h3>
<p>IF DATA PROCESSING IS BASED ON ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS, OR THE PROCESSING IS FOR THE ESTABLISHMENT, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION UNDER ART. 21(1) GDPR).</p>
<p>IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR SUCH MARKETING PURPOSES; THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL THEN NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION UNDER ART. 21(2) GDPR).</p>
<h3>Right to Lodge a Complaint with a Supervisory Authority</h3>
<p>In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, workplace, or the place of the alleged violation. The right to lodge a complaint is without prejudice to other administrative or judicial remedies.</p>
<h3>Right to Data Portability</h3>
<p>You have the right to receive the data we process automatically based on your consent or in fulfillment of a contract in a commonly used and machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done to the extent technically feasible.</p>
<h3>Access, Correction, and Deletion</h3>
<p>Within the scope of the applicable legal provisions, you have the right at any time to access information about your stored personal data, its origin, recipients, and the purpose of data processing free of charge and, if necessary, a right to correct or delete this data. You can contact us at any time regarding this or other questions about personal data.</p>
<h3>Right to Restriction of Processing</h3>
<p>You have the right to request the restriction of the processing of your personal data. You can contact us at any time regarding this. The right to restriction of processing exists in the following cases:</p>
<ul>
    <li>If you contest the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the verification, you have the right to request the restriction of the processing of your personal data.</li>
    <li>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</li>
    <li>If we no longer need your personal data, but you need it for the establishment, exercise, or defense of legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.</li>
    <li>If you have lodged an objection under Art. 21(1) GDPR, a balance must be struck between your interests and ours. As long as it is not yet clear whose interests prevail, you have the right to request the restriction of the processing of your personal data.</li>
</ul>
<p>If you have restricted the processing of your personal data, this data – apart from being stored – may only be processed with your consent or for the establishment, exercise, or defense of legal claims or to protect the rights of another natural or legal person or for reasons of important public interest of the European Union or a member state.</p>
<h3>SSL or TLS Encryption</h3>
<p>This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator. You can recognize an encrypted connection by the address line of the browser switching from "http://" to "https://" and the lock icon in your browser line.</p>
<p>If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.</p>
<h3>Objection to Advertising Emails</h3>
<p>We hereby object to the use of contact data published within the framework of the imprint obligation for sending unsolicited advertising and informational materials. The operators of these pages expressly reserve the right to take legal action in the event of unsolicited advertising information, such as spam emails.</p>
<h2>4. Data Collection on this Website</h2>
<h3>Cookies</h3>
<p>Our websites use so-called "cookies." Cookies are small data packets that do no harm to your device. They are either temporarily stored for the duration of a session (session cookies) or permanently stored (permanent cookies) on your device. Session cookies are automatically deleted after your visit. Permanent cookies remain stored on your device until you delete them yourself or your web browser deletes them automatically.</p>
<p>Cookies may originate from us (first-party cookies) or from third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services provided by third-party companies within websites (e.g., cookies for handling payment services).</p>
<p>Cookies serve various functions. Many cookies are technically necessary because certain website functions would not work without them (e.g., the shopping cart function or displaying videos). Other cookies may be used to evaluate user behavior or for advertising purposes.</p>
<p>Cookies that are necessary for carrying out the electronic communication process, providing certain functions you have requested (e.g., for the shopping cart function), or optimizing the website (e.g., cookies for measuring web audience) are stored based on Art. 6(1)(f) GDPR, unless another legal basis is specified. The website operator has a legitimate interest in storing necessary cookies for the technically error-free and optimized provision of its services. If consent to the storage of cookies and similar recognition technologies was requested, processing is carried out exclusively based on this consent (Art. 6(1)(a) GDPR and § 25(1) TDDG); consent can be revoked at any time.</p>
<p>You can set your browser to inform you about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser. Disabling cookies may limit the functionality of this website.</p>
<p>Which cookies and services are used on this website can be found in this privacy policy.</p>
<h3>Contact Form</h3>
<p>If you send us inquiries via the contact form, your information from the inquiry form, including the contact details you provide there, will be stored by us for the purpose of processing the inquiry and for follow-up questions. We do not share this data without your consent.</p>
<p>The processing of this data is based on Art. 6(1)(b) GDPR, provided your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries directed to us (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR), if this has been requested; consent can be revoked at any time.</p>
<p>The data you enter in the contact form remains with us until you request us to delete it, revoke your consent to store it, or the purpose for storing the data no longer applies (e.g., after your inquiry has been processed). Mandatory legal provisions – especially retention periods – remain unaffected.</p>
<p>Source: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
  `,
      de: `
<h2>1. Datenschutz auf einen Blick</h2>
<h3>Allgemeine Hinweise</h3>
<p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
<h3>Datenerfassung auf dieser Website</h3>
<h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
<p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
<h4>Wie erfassen wir Ihre Daten?</h4>
<p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
<p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
<h4>Wofür nutzen wir Ihre Daten?</h4>
<p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>
<h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
<p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
<p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
<h3>Analyse-Tools und Tools von Drittanbietern</h3>
<p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
<p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
<h2>2. Hosting</h2>
<p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
<h3>Strato</h3>
<p>Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend „Strato“). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.</p>
<p>Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato: <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer">https://www.strato.de/datenschutz/</a>.</p>
<p>Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
<h4>Auftragsverarbeitung</h4>
<p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
<h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
<h3>Datenschutz</h3>
<p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
<p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
<p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
<h3>Hinweis zur verantwortlichen Stelle</h3>
<p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
<p>Gloria Schaffarczyk<br />
Rottachstr. 34<br />
87439 Kempten</p>
<p>Telefon: 017686715651<br />
E-Mail: mail@gloria-schaffarczyk.de</p>
<p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
<h3>Speicherdauer</h3>
<p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
<h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
<p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>
<h3>Empfänger von personenbezogenen Daten</h3>
<p>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.</p>
<h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
<p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
<h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
<p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
<p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
<h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
<p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
<h3>Recht auf Datenübertragbarkeit</h3>
<p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
<h3>Auskunft, Berichtigung und Löschung</h3>
<p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
<h3>Recht auf Einschränkung der Verarbeitung</h3>
<p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
<ul>
    <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
    <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
    <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
    <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
</ul>
<p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
<h3>SSL- bzw. TLS-Verschlüsselung</h3>
<p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
<p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
<h3>Widerspruch gegen Werbe-E-Mails</h3>
<p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
<h2>4. Datenerfassung auf dieser Website</h2>
<h3>Cookies</h3>
<p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>
<p>Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>
<p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.&nbsp;B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.</p>
<p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen gewünschter Funktionen (z.&nbsp;B. für die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDG); die Einwilligung ist jederzeit widerrufbar.</p>
<p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
<p>Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.</p>
<h3>Kontaktformular</h3>
<p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
<p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
<p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
<p>Quelle: <a href="https://www.e-recht24.de" style="color: white; text-decoration: none;" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a></p>
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
      this.currentLanguage = 'en';
    }
  }

  translate(key: string): string {
    return this.translations[key]?.[this.currentLanguage] || key;
  }
}
