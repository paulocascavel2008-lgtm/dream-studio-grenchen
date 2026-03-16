"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { portfolioData } from "../lib/portfolio";

const translations = {
  pt: {
    langLabel: "PORTUGUÊS",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle:
      "Fotografia profissional em Grenchen para retratos, casamentos, estúdio, família e momentos especiais.",
    heroText:
      "Sessões elegantes, imagens autênticas e atendimento personalizado para clientes que procuram qualidade e emoção.",
    whatsapp: "WhatsApp",
    contact: "Contacto",
    portfolioTitle: "Portfólio",
    portfolioText:
      "A página principal mostra uma pré-visualização. O portfólio completo está numa página dedicada.",
    portfolioCta: "Ver portfólio completo",
    pricesTitle: "Preços",
    pricesText:
      "Os valores são indicativos e apresentados como preço base. Clique num cartão para ver mais detalhes.",
    details: "Ver detalhes",
    albumsTitle: "Álbuns",
    albumsText:
      "Álbuns profissionais Dreambooks Pro disponíveis sob pedido, com acabamento premium e várias opções de personalização.",
    aboutTitle: "Sobre Mim",
    aboutText:
      "Sou Paulo Alves, fotógrafo apaixonado por retratos autênticos, famílias, casamentos e momentos especiais. O objetivo do Dream Studio Grenchen é criar imagens elegantes, emotivas e intemporais.",
    contactTitle: "Contacto",
    contactText:
      "Entre em contacto para reservas, informações ou um orçamento personalizado.",
    clickable: {
      phone: "Telefone",
      email: "Email",
      whatsapp: "WhatsApp",
      website: "Website",
    },
    footer: "Dream Studio Grenchen • Paulo Alves",
    close: "Fechar",
    previous: "Anterior",
    next: "Seguinte",
    galleryHint: "Clique para abrir",
    pricing: {
      studio: {
        title: "Estúdio",
        fromLine: "a partir de 120 CHF",
        lines: [
          "Mini — a partir de 120 CHF",
          "Basic — a partir de 190 CHF",
          "Premium — a partir de 320 CHF",
        ],
        details: [
          "Sessões em estúdio com ambiente controlado e look profissional.",
          "Os valores são indicativos e podem variar conforme tempo, número de pessoas e edição.",
          "Entrega digital incluída conforme o pacote escolhido.",
        ],
      },
      outdoor: {
        title: "Exterior",
        fromLine: "a partir de 160 CHF",
        lines: [
          "Mini — a partir de 160 CHF",
          "Basic — a partir de 260 CHF",
          "Premium — a partir de 320 CHF",
        ],
        details: [
          "Sessões no exterior em local combinado.",
          "O preço final pode variar conforme deslocação, duração e número de imagens pretendidas.",
          "Ideal para casais, retratos, família e sessões criativas.",
        ],
      },
      wedding: {
        title: "Casamentos",
        fromLine: "a partir de 1100 CHF",
        lines: [
          "Cobertura parcial — a partir de 1100 CHF",
          "Dia completo — a partir de 1950 CHF",
          "Premium — a partir de 2600 CHF",
        ],
        details: [
          "Cobertura adaptada ao vosso dia e às vossas necessidades.",
          "Os valores são preço base e podem variar conforme horas, deslocação, álbum e extras.",
          "Álbuns Dreambooks Pro disponíveis sob pedido.",
        ],
      },
      baptism: {
        title: "Batizados",
        fromLine: "a partir de 350 CHF",
        lines: [
          "Mini — a partir de 350 CHF",
          "Basic — a partir de 480 CHF",
          "Premium — a partir de 690 CHF",
        ],
        details: [
          "Cobertura da cerimónia e retratos conforme o pacote escolhido.",
          "O valor final depende do tempo de cobertura, local e opções incluídas.",
          "Entrega digital incluída conforme o serviço acordado.",
        ],
      },
      family: {
        title: "Família",
        fromLine: "a partir de 180 CHF",
        lines: [
          "Mini — a partir de 180 CHF",
          "Basic — a partir de 280 CHF",
          "Premium — a partir de 390 CHF",
        ],
        details: [
          "Sessões familiares em estúdio ou exterior.",
          "O preço final varia conforme duração, local e número de pessoas.",
          "Ideal para memórias elegantes e naturais.",
        ],
      },
    },
    albums: [
      {
        title: "Álbum Essencial",
        price: "a partir de 120 CHF",
        text: "Modelo de entrada com acabamento elegante.",
      },
      {
        title: "Álbum Premium",
        price: "a partir de 180 CHF",
        text: "Melhor apresentação, mais impacto visual e materiais superiores.",
      },
      {
        title: "Álbum Dreambooks Pro",
        price: "a partir de 250 CHF",
        text: "Solução premium com forte valorização da apresentação final.",
      },
    ],
  },
  de: {
    langLabel: "DEUTSCH",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle:
      "Professionelle Fotografie in Grenchen für Portraits, Hochzeiten, Studio, Familien und besondere Momente.",
    heroText:
      "Elegante Shootings, authentische Bilder und persönlicher Service für Kundinnen und Kunden mit Anspruch.",
    whatsapp: "WhatsApp",
    contact: "Kontakt",
    portfolioTitle: "Portfolio",
    portfolioText:
      "Die Startseite zeigt eine Vorschau. Das vollständige Portfolio liegt auf einer eigenen Seite.",
    portfolioCta: "Ganzes Portfolio ansehen",
    pricesTitle: "Preise",
    pricesText:
      "Die Preise sind Richtwerte und als Basispreise angegeben. Klicken Sie auf eine Karte für mehr Details.",
    details: "Details ansehen",
    albumsTitle: "Alben",
    albumsText:
      "Professionelle Dreambooks Pro Alben auf Anfrage, mit hochwertiger Verarbeitung und verschiedenen Personalisierungsoptionen.",
    aboutTitle: "Über Mich",
    aboutText:
      "Ich bin Paulo Alves, Fotograf mit Leidenschaft für authentische Portraits, Familien, Hochzeiten und besondere Momente. Dream Studio Grenchen steht für elegante, emotionale und zeitlose Bilder.",
    contactTitle: "Kontakt",
    contactText:
      "Kontaktieren Sie mich für Buchungen, Informationen oder ein individuelles Angebot.",
    clickable: {
      phone: "Telefon",
      email: "E-Mail",
      whatsapp: "WhatsApp",
      website: "Website",
    },
    footer: "Dream Studio Grenchen • Paulo Alves",
    close: "Schließen",
    previous: "Zurück",
    next: "Weiter",
    galleryHint: "Zum Öffnen klicken",
    pricing: {
      studio: {
        title: "Studio",
        fromLine: "ab 120 CHF",
        lines: ["Mini — ab 120 CHF", "Basic — ab 190 CHF", "Premium — ab 320 CHF"],
        details: [
          "Studio-Shootings mit kontrolliertem Licht und professionellem Look.",
          "Die Preise sind Richtwerte und können je nach Dauer, Personenzahl und Bearbeitung variieren.",
          "Digitale Lieferung je nach gewähltem Paket inklusive.",
        ],
      },
      outdoor: {
        title: "Outdoor",
        fromLine: "ab 160 CHF",
        lines: ["Mini — ab 160 CHF", "Basic — ab 260 CHF", "Premium — ab 320 CHF"],
        details: [
          "Outdoor-Shootings an einem vereinbarten Ort.",
          "Der Endpreis kann je nach Anfahrt, Dauer und gewünschter Bildmenge variieren.",
          "Ideal für Paare, Portraits, Familien und kreative Sessions.",
        ],
      },
      wedding: {
        title: "Hochzeiten",
        fromLine: "ab 1100 CHF",
        lines: [
          "Teilabdeckung — ab 1100 CHF",
          "Ganzer Tag — ab 1950 CHF",
          "Premium — ab 2600 CHF",
        ],
        details: [
          "Die Begleitung wird an Ihren Tag und Ihre Wünsche angepasst.",
          "Die Preise sind Basispreise und können je nach Stunden, Anfahrt, Album und Extras variieren.",
          "Dreambooks Pro Alben auf Anfrage erhältlich.",
        ],
      },
      baptism: {
        title: "Taufen",
        fromLine: "ab 350 CHF",
        lines: ["Mini — ab 350 CHF", "Basic — ab 480 CHF", "Premium — ab 690 CHF"],
        details: [
          "Begleitung der Zeremonie und Portraits je nach gewähltem Paket.",
          "Der Endpreis hängt von Dauer, Ort und enthaltenen Optionen ab.",
          "Digitale Lieferung je nach vereinbarter Leistung inklusive.",
        ],
      },
      family: {
        title: "Familie",
        fromLine: "ab 180 CHF",
        lines: ["Mini — ab 180 CHF", "Basic — ab 280 CHF", "Premium — ab 390 CHF"],
        details: [
          "Familienshootings im Studio oder Outdoor.",
          "Der Endpreis variiert je nach Dauer, Ort und Personenzahl.",
          "Ideal für elegante und natürliche Erinnerungen.",
        ],
      },
    },
    albums: [
      { title: "Essential Album", price: "ab 120 CHF", text: "Einstiegsmodell mit elegantem Finish." },
      { title: "Premium Album", price: "ab 180 CHF", text: "Stärkere Präsentation, mehr Wirkung und hochwertigere Materialien." },
      { title: "Dreambooks Pro Album", price: "ab 250 CHF", text: "Premium-Lösung mit besonders hochwertiger Endpräsentation." },
    ],
  },
  fr: {
    langLabel: "FRANÇAIS",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle:
      "Photographie professionnelle à Grenchen pour portraits, mariages, studio, famille et moments spéciaux.",
    heroText:
      "Des séances élégantes, des images authentiques et un service personnalisé pour une clientèle exigeante.",
    whatsapp: "WhatsApp",
    contact: "Contact",
    portfolioTitle: "Portfolio",
    portfolioText:
      "La page d’accueil montre un aperçu. Le portfolio complet est sur une page séparée.",
    portfolioCta: "Voir le portfolio complet",
    pricesTitle: "Tarifs",
    pricesText:
      "Les tarifs sont indicatifs et affichés comme prix de base. Cliquez sur une carte pour voir plus de détails.",
    details: "Voir les détails",
    albumsTitle: "Albums",
    albumsText:
      "Albums professionnels Dreambooks Pro disponibles sur demande, avec finition premium et plusieurs options de personnalisation.",
    aboutTitle: "À Propos",
    aboutText:
      "Je suis Paulo Alves, photographe passionné par les portraits authentiques, les familles, les mariages et les moments spéciaux. Dream Studio Grenchen crée des images élégantes, émotionnelles et intemporelles.",
    contactTitle: "Contact",
    contactText:
      "Contactez-moi pour réservations, informations ou devis personnalisé.",
    clickable: {
      phone: "Téléphone",
      email: "Email",
      whatsapp: "WhatsApp",
      website: "Site web",
    },
    footer: "Dream Studio Grenchen • Paulo Alves",
    close: "Fermer",
    previous: "Précédent",
    next: "Suivant",
    galleryHint: "Cliquer pour ouvrir",
    pricing: {
      studio: {
        title: "Studio",
        fromLine: "à partir de 120 CHF",
        lines: [
          "Mini — à partir de 120 CHF",
          "Basic — à partir de 190 CHF",
          "Premium — à partir de 320 CHF",
        ],
        details: [
          "Séances studio avec lumière contrôlée et rendu professionnel.",
          "Les tarifs sont indicatifs et peuvent varier selon la durée, le nombre de personnes et la retouche.",
          "Livraison numérique incluse selon la formule choisie.",
        ],
      },
      outdoor: {
        title: "Extérieur",
        fromLine: "à partir de 160 CHF",
        lines: [
          "Mini — à partir de 160 CHF",
          "Basic — à partir de 260 CHF",
          "Premium — à partir de 320 CHF",
        ],
        details: [
          "Séances en extérieur dans un lieu convenu.",
          "Le prix final peut varier selon le déplacement, la durée et le nombre d’images souhaitées.",
          "Idéal pour couples, portraits, familles et séances créatives.",
        ],
      },
      wedding: {
        title: "Mariages",
        fromLine: "à partir de 1100 CHF",
        lines: [
          "Couverture partielle — à partir de 1100 CHF",
          "Journée complète — à partir de 1950 CHF",
          "Premium — à partir de 2600 CHF",
        ],
        details: [
          "La couverture s’adapte à votre journée et à vos besoins.",
          "Les tarifs sont des prix de base et peuvent varier selon les heures, le déplacement, l’album et les options.",
          "Albums Dreambooks Pro disponibles sur demande.",
        ],
      },
      baptism: {
        title: "Baptêmes",
        fromLine: "à partir de 350 CHF",
        lines: [
          "Mini — à partir de 350 CHF",
          "Basic — à partir de 480 CHF",
          "Premium — à partir de 690 CHF",
        ],
        details: [
          "Couverture de la cérémonie et portraits selon la formule choisie.",
          "Le prix final dépend du temps de couverture, du lieu et des options incluses.",
          "Livraison numérique incluse selon le service convenu.",
        ],
      },
      family: {
        title: "Famille",
        fromLine: "à partir de 180 CHF",
        lines: [
          "Mini — à partir de 180 CHF",
          "Basic — à partir de 280 CHF",
          "Premium — à partir de 390 CHF",
        ],
        details: [
          "Séances famille en studio ou en extérieur.",
          "Le prix final varie selon la durée, le lieu et le nombre de personnes.",
          "Idéal pour des souvenirs élégants et naturels.",
        ],
      },
    },
    albums: [
      { title: "Album Essentiel", price: "à partir de 120 CHF", text: "Modèle d’entrée avec finition élégante." },
      { title: "Album Premium", price: "à partir de 180 CHF", text: "Présentation plus forte, meilleur impact visuel et matériaux supérieurs." },
      { title: "Album Dreambooks Pro", price: "à partir de 250 CHF", text: "Solution premium avec valorisation élevée de la présentation finale." },
    ],
  },
  it: {
    langLabel: "ITALIANO",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle:
      "Fotografia professionale a Grenchen per ritratti, matrimoni, studio, famiglia e momenti speciali.",
    heroText:
      "Sessioni eleganti, immagini autentiche e servizio personalizzato per clienti che cercano qualità ed emozione.",
    whatsapp: "WhatsApp",
    contact: "Contatto",
    portfolioTitle: "Portfolio",
    portfolioText:
      "La pagina principale mostra un’anteprima. Il portfolio completo è in una seconda pagina dedicata.",
    portfolioCta: "Vedi portfolio completo",
    pricesTitle: "Prezzi",
    pricesText:
      "I prezzi sono indicativi e mostrati come prezzo base. Clicca su una scheda per vedere più dettagli.",
    details: "Vedi dettagli",
    albumsTitle: "Album",
    albumsText:
      "Album professionali Dreambooks Pro disponibili su richiesta, con finitura premium e varie opzioni di personalizzazione.",
    aboutTitle: "Chi Sono",
    aboutText:
      "Sono Paulo Alves, fotografo appassionato di ritratti autentici, famiglie, matrimoni e momenti speciali. Dream Studio Grenchen crea immagini eleganti, emozionanti e senza tempo.",
    contactTitle: "Contatto",
    contactText:
      "Contattami per prenotazioni, informazioni o preventivo personalizzato.",
    clickable: {
      phone: "Telefono",
      email: "Email",
      whatsapp: "WhatsApp",
      website: "Sito web",
    },
    footer: "Dream Studio Grenchen • Paulo Alves",
    close: "Chiudi",
    previous: "Precedente",
    next: "Successiva",
    galleryHint: "Clicca per aprire",
    pricing: {
      studio: {
        title: "Studio",
        fromLine: "a partire da 120 CHF",
        lines: [
          "Mini — a partire da 120 CHF",
          "Basic — a partire da 190 CHF",
          "Premium — a partire da 320 CHF",
        ],
        details: [
          "Sessioni in studio con luce controllata e look professionale.",
          "I prezzi sono indicativi e possono variare in base alla durata, al numero di persone e all’editing.",
          "Consegna digitale inclusa secondo il pacchetto scelto.",
        ],
      },
      outdoor: {
        title: "Esterno",
        fromLine: "a partire da 160 CHF",
        lines: [
          "Mini — a partire da 160 CHF",
          "Basic — a partire da 260 CHF",
          "Premium — a partire da 320 CHF",
        ],
        details: [
          "Sessioni all’aperto in una location concordata.",
          "Il prezzo finale può variare in base a spostamento, durata e numero di immagini richieste.",
          "Ideale per coppie, ritratti, famiglie e sessioni creative.",
        ],
      },
      wedding: {
        title: "Matrimoni",
        fromLine: "a partire da 1100 CHF",
        lines: [
          "Copertura parziale — a partire da 1100 CHF",
          "Giornata completa — a partire da 1950 CHF",
          "Premium — a partire da 2600 CHF",
        ],
        details: [
          "La copertura viene adattata al vostro giorno e alle vostre esigenze.",
          "I prezzi sono base e possono variare in base a ore, spostamento, album ed extra.",
          "Album Dreambooks Pro disponibili su richiesta.",
        ],
      },
      baptism: {
        title: "Battesimi",
        fromLine: "a partire da 350 CHF",
        lines: [
          "Mini — a partire da 350 CHF",
          "Basic — a partire da 480 CHF",
          "Premium — a partire da 690 CHF",
        ],
        details: [
          "Copertura della cerimonia e ritratti secondo il pacchetto scelto.",
          "Il prezzo finale dipende dal tempo di copertura, dal luogo e dalle opzioni incluse.",
          "Consegna digitale inclusa secondo il servizio concordato.",
        ],
      },
      family: {
        title: "Famiglia",
        fromLine: "a partire da 180 CHF",
        lines: [
          "Mini — a partire da 180 CHF",
          "Basic — a partire da 280 CHF",
          "Premium — a partire da 390 CHF",
        ],
        details: [
          "Sessioni famiglia in studio o all’aperto.",
          "Il prezzo finale varia in base a durata, luogo e numero di persone.",
          "Ideale per ricordi eleganti e naturali.",
        ],
      },
    },
    albums: [
      { title: "Album Essenziale", price: "a partire da 120 CHF", text: "Modello base con finitura elegante." },
      { title: "Album Premium", price: "a partire da 180 CHF", text: "Presentazione più forte, maggiore impatto visivo e materiali superiori." },
      { title: "Album Dreambooks Pro", price: "a partire da 250 CHF", text: "Soluzione premium con forte valorizzazione della presentazione finale." },
    ],
  },
};

export default function Page() {
  const [lang, setLang] = useState("pt");
  const [activeCategory, setActiveCategory] = useState("studio");
  const [openPrice, setOpenPrice] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const t = translations[lang];
  const currentImages = portfolioData[activeCategory] || [];
  const previewImages = useMemo(() => currentImages.slice(0, 6), [currentImages]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % previewImages.length));
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev - 1 + previewImages.length) % previewImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, previewImages.length]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const showPrevImage = () => {
    if (!previewImages.length) return;
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + previewImages.length) % previewImages.length));
  };

  const showNextImage = () => {
    if (!previewImages.length) return;
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % previewImages.length));
  };

  const whatsappLink = "https://wa.me/41793347799";
  const phoneLink = "tel:+41793347799";
  const emailLink = "mailto:info@dreamstudiogrenchen.ch";
  const siteLink = "https://www.dreamstudiogrenchen.ch";

  return (
    <>
      <main className="site-shell">
        <div className="page-container">
          <header className="topbar">
            <a href="#top" className="brand-wrap" aria-label="Dream Studio Grenchen home">
              <img
                src="/logo-dream-studio.jpg"
                alt="Dream Studio Grenchen by Paulo Alves"
                className="brand-logo"
              />
            </a>

            <div className="lang-switch">
              {["pt", "de", "fr", "it"].map((code) => (
                <button
                  key={code}
                  className={`lang-btn ${lang === code ? "active" : ""}`}
                  onClick={() => setLang(code)}
                  type="button"
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </header>

          <section className="hero-card" id="top">
            <div className="hero-grid">
              <div className="hero-text">
                <p className="section-kicker">{t.langLabel}</p>
                <h1>{t.heroTitle}</h1>
                <h2>{t.heroSubtitle}</h2>
                <p>{t.heroText}</p>

                <div className="hero-actions">
                  <a className="primary-btn" href={whatsappLink} target="_blank" rel="noreferrer">
                    💬 {t.whatsapp}
                  </a>
                  <a className="secondary-btn" href="#kontakt">
                    {t.contact}
                  </a>
                  <Link className="secondary-btn" href="/portfolio">
                    {t.portfolioCta}
                  </Link>
                </div>
              </div>

              <div className="hero-side-card">
                <img src="/hero-side-card.jpg" alt="Dream Studio Grenchen logo" className="hero-logo" />
              </div>
            </div>
          </section>

          <section className="section-card">
            <div className="section-head">
              <div>
                <h3>{t.portfolioTitle}</h3>
                <p>{t.portfolioText}</p>
              </div>
              <Link href="/portfolio" className="ghost-link">
                {t.portfolioCta}
              </Link>
            </div>

            <div className="category-row">
              {Object.entries(t.pricing)
                .filter(([key]) => portfolioData[key])
                .map(([key, item]) => (
                  <button
                    key={key}
                    className={`category-btn ${activeCategory === key ? "active" : ""}`}
                    onClick={() => setActiveCategory(key)}
                    type="button"
                  >
                    {item.title}
                  </button>
                ))}
            </div>

            <div className="gallery-grid">
              {previewImages.map((src, index) => (
                <button
                  type="button"
                  className="gallery-card gallery-button"
                  key={`${src}-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`${t.galleryHint} ${index + 1}`}
                >
                  <img src={src} alt={`${activeCategory}-${index + 1}`} loading="lazy" />
                  <span className="gallery-overlay">{t.galleryHint}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="section-card">
            <h3>{t.pricesTitle}</h3>
            <p>{t.pricesText}</p>

            <div className="pricing-grid">
              {Object.entries(t.pricing).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  className={`price-card clickable-card ${openPrice === key ? "active" : ""}`}
                  onClick={() => setOpenPrice(openPrice === key ? null : key)}
                >
                  <div className="price-card-top">
                    <h4>{item.title}</h4>
                    <span className="price-from-chip">{item.fromLine}</span>
                  </div>

                  <ul>
                    {item.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>

                  <span className="details-link">{t.details}</span>

                  {openPrice === key && (
                    <div className="price-details">
                      {item.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          <section className="section-card">
            <h3>{t.albumsTitle}</h3>
            <p>{t.albumsText}</p>

            <div className="albums-grid">
              {t.albums.map((album) => (
                <article className="album-card" key={album.title}>
                  <h4>{album.title}</h4>
                  <strong>{album.price}</strong>
                  <p>{album.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-card">
            <h3>{t.aboutTitle}</h3>
            <p>{t.aboutText}</p>
          </section>

          <section className="section-card" id="kontakt">
            <h3>{t.contactTitle}</h3>
            <p>{t.contactText}</p>

            <div className="contact-grid">
              <a href={phoneLink} className="contact-link">
                <span>📞</span>
                <div>
                  <strong>{t.clickable.phone}</strong>
                  <p>+41 79 334 77 99</p>
                </div>
              </a>

              <a href={emailLink} className="contact-link">
                <span>📧</span>
                <div>
                  <strong>{t.clickable.email}</strong>
                  <p>info@dreamstudiogrenchen.ch</p>
                </div>
              </a>

              <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-link">
                <span>💬</span>
                <div>
                  <strong>{t.clickable.whatsapp}</strong>
                  <p>WhatsApp</p>
                </div>
              </a>

              <a href={siteLink} target="_blank" rel="noreferrer" className="contact-link">
                <span>🌐</span>
                <div>
                  <strong>{t.clickable.website}</strong>
                  <p>www.dreamstudiogrenchen.ch</p>
                </div>
              </a>
            </div>
          </section>

          <footer className="footer">
            <p>{t.footer}</p>
          </footer>
        </div>
      </main>

      {selectedIndex !== null && previewImages[selectedIndex] && (
        <div className="lightbox-overlay" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-top">
              <button type="button" className="lightbox-nav" onClick={showPrevImage}>
                ← {t.previous}
              </button>
              <button type="button" className="lightbox-close" onClick={() => setSelectedIndex(null)}>
                × {t.close}
              </button>
              <button type="button" className="lightbox-nav" onClick={showNextImage}>
                {t.next} →
              </button>
            </div>

            <img src={previewImages[selectedIndex]} alt="portfolio-large" className="lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
}
