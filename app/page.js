"use client";

import { useEffect, useMemo, useState } from "react";
import { portfolioData } from "../lib/portfolio";

const translations = {
  pt: {
    langLabel: "PORTUGUÊS",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle:
      "Fotografia profissional em Grenchen especializada em retratos, casamentos, sessões de estúdio, família e eventos.",
    heroText:
      "Retratos, casamentos, batizados, sessões exteriores, fotografia de estúdio e paisagens em Grenchen.",
    whatsapp: "WhatsApp",
    contact: "Contacto",
    portfolioTitle: "Portfólio",
    portfolioText:
      "Clique numa categoria para ver as fotos reais do portfólio.",
    categories: {
      studio: "Estúdio",
      outdoor: "Exterior",
      wedding: "Casamentos",
      baptism: "Batizados",
      landscape: "Paisagens",
      family: "Família",
    },
    pricesTitle: "Preços",
    pricesText: "Clique num cartão para ver o que cada serviço inclui.",
    simulatorTitle: "Simulador de Preços",
    simulatorText: "Escolha as opções para obter uma estimativa rápida.",
    aboutTitle: "Sobre Mim",
    aboutText:
      "Sou Paulo Alves, fotógrafo apaixonado por retratos autênticos, famílias, casamentos e momentos especiais. O objetivo do Dream Studio Grenchen é criar imagens elegantes, emotivas e intemporais.",
    contactTitle: "Contacto",
    contactText:
      "Entre em contacto para reservas, informações ou orçamento personalizado.",
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
    simulator: {
      service: "Serviço",
      package: "Pacote",
      distance: "Deslocação",
      total: "Total estimado",
      extraPhotos: "5 fotos extra",
      express: "Entrega rápida",
      album: "Álbum",
      noTravel: "Sem deslocação",
      upTo20: "Até 20 km",
      from20to50: "20–50 km",
      over50: "+50 km",
    },
  },

  de: {
    langLabel: "DEUTSCH",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle:
      "Professionelle Fotografie in Grenchen für Portraits, Hochzeiten, Studio-Shootings, Familien und Events.",
    heroText:
      "Portraits, Hochzeiten, Taufen, Outdoor-Shootings, Studiofotografie und Landschaften in Grenchen.",
    whatsapp: "WhatsApp",
    contact: "Kontakt",
    portfolioTitle: "Portfolio",
    portfolioText:
      "Klicken Sie auf eine Kategorie, um echte Portfolio-Fotos zu sehen.",
    categories: {
      studio: "Studio",
      outdoor: "Outdoor",
      wedding: "Hochzeiten",
      baptism: "Taufen",
      landscape: "Landschaften",
      family: "Familie",
    },
    pricesTitle: "Preise",
    pricesText:
      "Klicken Sie auf eine Karte, um die enthaltenen Leistungen zu sehen.",
    simulatorTitle: "Preis-Simulator",
    simulatorText:
      "Wählen Sie die Optionen, um schnell einen Richtpreis zu erhalten.",
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
    simulator: {
      service: "Service",
      package: "Paket",
      distance: "Anfahrt",
      total: "Geschätzter Gesamtpreis",
      extraPhotos: "5 zusätzliche Fotos",
      express: "Express-Lieferung",
      album: "Album",
      noTravel: "Keine Anfahrt",
      upTo20: "Bis 20 km",
      from20to50: "20–50 km",
      over50: "+50 km",
    },
  },

  fr: {
    langLabel: "FRANÇAIS",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle:
      "Photographie professionnelle à Grenchen pour portraits, mariages, séances studio, famille et événements.",
    heroText:
      "Portraits, mariages, baptêmes, séances extérieures, photographie de studio et paysages à Grenchen.",
    whatsapp: "WhatsApp",
    contact: "Contact",
    portfolioTitle: "Portfolio",
    portfolioText:
      "Cliquez sur une catégorie pour voir de vraies photos du portfolio.",
    categories: {
      studio: "Studio",
      outdoor: "Extérieur",
      wedding: "Mariages",
      baptism: "Baptêmes",
      landscape: "Paysages",
      family: "Famille",
    },
    pricesTitle: "Tarifs",
    pricesText: "Cliquez sur une carte pour voir ce qui est inclus.",
    simulatorTitle: "Simulateur de Prix",
    simulatorText:
      "Choisissez les options pour obtenir rapidement une estimation.",
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
    simulator: {
      service: "Service",
      package: "Forfait",
      distance: "Déplacement",
      total: "Total estimé",
      extraPhotos: "5 photos supplémentaires",
      express: "Livraison express",
      album: "Album",
      noTravel: "Sans déplacement",
      upTo20: "Jusqu’à 20 km",
      from20to50: "20–50 km",
      over50: "+50 km",
    },
  },

  it: {
    langLabel: "ITALIANO",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle:
      "Fotografia professionale a Grenchen per ritratti, matrimoni, sessioni in studio, famiglia ed eventi.",
    heroText:
      "Ritratti, matrimoni, battesimi, sessioni esterne, fotografia in studio e paesaggi a Grenchen.",
    whatsapp: "WhatsApp",
    contact: "Contatto",
    portfolioTitle: "Portfolio",
    portfolioText:
      "Clicca su una categoria per vedere le vere foto del portfolio.",
    categories: {
      studio: "Studio",
      outdoor: "Esterno",
      wedding: "Matrimoni",
      baptism: "Battesimi",
      landscape: "Paesaggi",
      family: "Famiglia",
    },
    pricesTitle: "Prezzi",
    pricesText: "Clicca su una scheda per vedere cosa è incluso.",
    simulatorTitle: "Simulatore Prezzi",
    simulatorText:
      "Scegli le opzioni per ottenere rapidamente una stima.",
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
    simulator: {
      service: "Servizio",
      package: "Pacchetto",
      distance: "Spostamento",
      total: "Totale stimato",
      extraPhotos: "5 foto extra",
      express: "Consegna rapida",
      album: "Album",
      noTravel: "Senza spostamento",
      upTo20: "Fino a 20 km",
      from20to50: "20–50 km",
      over50: "+50 km",
    },
  },
};

const packagePrices = {
  studio: { mini: 120, basic: 190, premium: 320 },
  outdoor: { mini: 160, basic: 260, premium: 320 },
  wedding: { half: 1100, full: 1950, premium: 2600 },
  baptism: { mini: 350, basic: 480, premium: 690 },
  family: { mini: 180, basic: 280, premium: 390 },
};

const distancePrices = {
  none: 0,
  short: 0,
  medium: 30,
  long: 80,
};

const extraPrices = {
  extraPhotos: 50,
  express: 40,
  album: 120,
};

const pricingDetails = {
  studio: {
    title: "Studio",
    priceLines: ["Mini — 120 CHF", "Basic — 190 CHF", "Premium — 320 CHF"],
    details: [
      "Mini: cerca de 30 minutos, 5 fotos editadas.",
      "Basic: cerca de 1 hora, 10 fotos editadas.",
      "Premium: cerca de 1h30, 20 fotos editadas.",
      "Entrega digital incluída.",
      "Fotos extra disponíveis à parte.",
    ],
  },
  outdoor: {
    title: "Outdoor",
    priceLines: ["Mini — 160 CHF", "Basic — 260 CHF", "Premium — 320 CHF"],
    details: [
      "Sessão no exterior em local combinado.",
      "Mini: sessão curta e objetiva.",
      "Basic: mais variedade de poses e enquadramentos.",
      "Premium: sessão mais longa e seleção mais completa.",
      "Deslocação pode ser adicionada conforme distância.",
    ],
  },
  wedding: {
    title: "Wedding",
    priceLines: [
      "Half day — 1100 CHF",
      "Full day — 1950 CHF",
      "Luxury — 2600 CHF",
    ],
    details: [
      "Half day: cobertura parcial do casamento.",
      "Full day: cobertura completa do dia principal.",
      "Luxury: cobertura mais extensa e serviço premium.",
      "Entrega digital incluída.",
      "Álbuns e extras podem ser adicionados.",
    ],
  },
  baptism: {
    title: "Baptism",
    priceLines: ["Mini — 350 CHF", "Basic — 480 CHF", "Premium — 690 CHF"],
    details: [
      "Cobertura da cerimónia e retratos conforme pacote.",
      "Mini: essencial.",
      "Basic: cerimónia + mais retratos.",
      "Premium: cobertura mais completa.",
      "Entrega digital incluída.",
    ],
  },
};

export default function Page() {
  const [lang, setLang] = useState("pt");
  const [activeCategory, setActiveCategory] = useState("studio");
  const [service, setService] = useState("studio");
  const [pkg, setPkg] = useState("mini");
  const [distance, setDistance] = useState("none");
  const [openPrice, setOpenPrice] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [extras, setExtras] = useState({
    extraPhotos: false,
    express: false,
    album: false,
  });

  const t = translations[lang];
  const currentImages = portfolioData[activeCategory] || [];

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev + 1) % currentImages.length
        );
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + currentImages.length) % currentImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, currentImages.length]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const availablePackages = useMemo(() => {
    if (service === "wedding") return ["half", "full", "premium"];
    return ["mini", "basic", "premium"];
  }, [service]);

  const total = useMemo(() => {
    const base = packagePrices[service]?.[pkg] || 0;
    const dist = distancePrices[distance] || 0;
    const extrasTotal = Object.entries(extras).reduce((sum, [key, value]) => {
      return sum + (value ? extraPrices[key] : 0);
    }, 0);
    return base + dist + extrasTotal;
  }, [service, pkg, distance, extras]);

  const handleExtraToggle = (key) => {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const showPrevImage = () => {
    if (!currentImages.length) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + currentImages.length) % currentImages.length
    );
  };

  const showNextImage = () => {
    if (!currentImages.length) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % currentImages.length
    );
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
            <div>
              <p className="brand-mini">Dream Studio Grenchen</p>
              <p className="brand-owner">by Paulo Alves</p>
            </div>

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

          <section className="hero-card">
            <div className="hero-text">
              <p className="section-kicker">{t.langLabel}</p>
              <h1>{t.heroTitle}</h1>
              <h2>{t.heroSubtitle}</h2>
              <p>{t.heroText}</p>

              <div className="hero-actions">
                <a
                  className="primary-btn"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 {t.whatsapp}
                </a>
                <a className="secondary-btn" href="#kontakt">
                  {t.contact}
                </a>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h3>{t.portfolioTitle}</h3>
            <p>{t.portfolioText}</p>

            <div className="category-row">
              {Object.entries(t.categories).map(([key, label]) => (
                <button
                  key={key}
                  className={`category-btn ${
                    activeCategory === key ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(key)}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="gallery-grid">
              {currentImages.map((src, index) => (
                <button
                  type="button"
                  className="gallery-card gallery-button"
                  key={`${src}-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Abrir imagem ${index + 1}`}
                >
                  <img src={src} alt={`${activeCategory}-${index + 1}`} />
                  <span className="gallery-overlay">Ver foto</span>
                </button>
              ))}
            </div>
          </section>

          <section className="section-card">
            <h3>{t.pricesTitle}</h3>
            <p>{t.pricesText}</p>

            <div className="pricing-grid">
              {Object.entries(pricingDetails).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  className={`price-card clickable-card ${
                    openPrice === key ? "active" : ""
                  }`}
                  onClick={() => setOpenPrice(openPrice === key ? null : key)}
                >
                  <h4>{item.title}</h4>
                  <ul>
                    {item.priceLines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>

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
            <h3>{t.simulatorTitle}</h3>
            <p>{t.simulatorText}</p>

            <div className="simulator-grid">
              <div className="field">
                <label>{t.simulator.service}</label>
                <select
                  value={service}
                  onChange={(e) => {
                    const newService = e.target.value;
                    setService(newService);
                    setPkg(newService === "wedding" ? "half" : "mini");
                  }}
                >
                  <option value="studio">Studio</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="wedding">Wedding</option>
                  <option value="baptism">Baptism</option>
                  <option value="family">Family</option>
                </select>
              </div>

              <div className="field">
                <label>{t.simulator.package}</label>
                <select value={pkg} onChange={(e) => setPkg(e.target.value)}>
                  {availablePackages.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>{t.simulator.distance}</label>
                <select
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                >
                  <option value="none">{t.simulator.noTravel}</option>
                  <option value="short">{t.simulator.upTo20}</option>
                  <option value="medium">{t.simulator.from20to50}</option>
                  <option value="long">{t.simulator.over50}</option>
                </select>
              </div>
            </div>

            <div className="extras-grid">
              <label className="extra-item">
                <input
                  type="checkbox"
                  checked={extras.extraPhotos}
                  onChange={() => handleExtraToggle("extraPhotos")}
                />
                <span>{t.simulator.extraPhotos}</span>
              </label>

              <label className="extra-item">
                <input
                  type="checkbox"
                  checked={extras.express}
                  onChange={() => handleExtraToggle("express")}
                />
                <span>{t.simulator.express}</span>
              </label>

              <label className="extra-item">
                <input
                  type="checkbox"
                  checked={extras.album}
                  onChange={() => handleExtraToggle("album")}
                />
                <span>{t.simulator.album}</span>
              </label>
            </div>

            <div className="total-box">
              <span>{t.simulator.total}</span>
              <strong>{total} CHF</strong>
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

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>💬</span>
                <div>
                  <strong>{t.clickable.whatsapp}</strong>
                  <p>Chat direto</p>
                </div>
              </a>

              <a
                href={siteLink}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
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

      {selectedIndex !== null && currentImages[selectedIndex] && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-top">
              <button
                type="button"
                className="lightbox-nav"
                onClick={showPrevImage}
              >
                ← {t.previous}
              </button>

              <button
                type="button"
                className="lightbox-close"
                onClick={() => setSelectedIndex(null)}
              >
                × {t.close}
              </button>

              <button
                type="button"
                className="lightbox-nav"
                onClick={showNextImage}
              >
                {t.next} →
              </button>
            </div>

            <img
              src={currentImages[selectedIndex]}
              alt="portfolio-large"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
