"use client";

import { useMemo, useState } from "react";

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
      "Explore algumas das categorias principais do estúdio. Clique numa categoria para ver a galeria.",
    categories: {
      studio: "Estúdio",
      outdoor: "Exterior",
      wedding: "Casamentos",
      baptism: "Batizados",
      landscape: "Paisagens",
      family: "Família",
    },
    pricesTitle: "Preços",
    pricesText:
      "Valores base orientativos. O simulador abaixo ajuda a estimar o preço final.",
    pricing: {
      studio: {
        title: "Fotografia de Estúdio",
        items: [
          "Mini Sessão — 120 CHF",
          "Sessão Basic — 190 CHF",
          "Sessão Premium — 320 CHF",
          "Fotos extra — 15 CHF/unidade",
        ],
      },
      outdoor: {
        title: "Sessões Fora de Estúdio",
        items: [
          "Sessão Exterior Mini — 160 CHF",
          "Sessão Exterior Basic — 260 CHF",
          "Sessão Lifestyle — 320 CHF",
          "Deslocação conforme distância",
        ],
      },
      wedding: {
        title: "Casamentos",
        items: [
          "Cerimónia — 550 CHF",
          "Meio Dia — 1100 CHF",
          "Dia Completo — 1950 CHF",
          "Luxury — 2600 CHF",
        ],
      },
      baptism: {
        title: "Batizados",
        items: [
          "Cerimónia — 350 CHF",
          "Cerimónia + Retratos — 480 CHF",
          "Reportagem Completa — 690 CHF",
        ],
      },
    },
    simulatorTitle: "Simulador de Preços",
    simulatorText: "Escolha as opções para obter uma estimativa rápida.",
    simulator: {
      service: "Tipo de sessão",
      package: "Pacote",
      distance: "Deslocação",
      extras: "Extras",
      total: "Total estimado",
      services: {
        studio: "Estúdio",
        outdoor: "Exterior",
        wedding: "Casamento",
        baptism: "Batizado",
        family: "Família",
      },
      packages: {
        mini: "Mini",
        basic: "Basic",
        premium: "Premium",
        half: "Meio dia",
        full: "Dia completo",
      },
      distances: {
        none: "Sem deslocação",
        short: "Até 20 km",
        medium: "20–50 km",
        long: "+50 km",
      },
      extrasList: {
        extraPhotos: "5 fotos extra",
        express: "Entrega rápida",
        album: "Álbum",
      },
    },
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
      "Entdecken Sie die wichtigsten Kategorien des Studios. Klicken Sie auf eine Kategorie, um die Galerie zu sehen.",
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
      "Orientierungswerte als Basis. Mit dem Simulator unten können Sie den Endpreis schätzen.",
    pricing: {
      studio: {
        title: "Studiofotografie",
        items: [
          "Mini Session — 120 CHF",
          "Basic Session — 190 CHF",
          "Premium Session — 320 CHF",
          "Zusätzliche Fotos — 15 CHF/Stück",
        ],
      },
      outdoor: {
        title: "Outdoor-Shootings",
        items: [
          "Outdoor Mini — 160 CHF",
          "Outdoor Basic — 260 CHF",
          "Lifestyle Session — 320 CHF",
          "Anfahrt je nach Distanz",
        ],
      },
      wedding: {
        title: "Hochzeiten",
        items: [
          "Zeremonie — 550 CHF",
          "Halber Tag — 1100 CHF",
          "Ganzer Tag — 1950 CHF",
          "Luxury — 2600 CHF",
        ],
      },
      baptism: {
        title: "Taufen",
        items: [
          "Zeremonie — 350 CHF",
          "Zeremonie + Portraits — 480 CHF",
          "Komplette Reportage — 690 CHF",
        ],
      },
    },
    simulatorTitle: "Preis-Simulator",
    simulatorText:
      "Wählen Sie Ihre Optionen, um schnell einen Richtpreis zu erhalten.",
    simulator: {
      service: "Shooting-Typ",
      package: "Paket",
      distance: "Anfahrt",
      extras: "Extras",
      total: "Geschätzter Gesamtpreis",
      services: {
        studio: "Studio",
        outdoor: "Outdoor",
        wedding: "Hochzeit",
        baptism: "Taufe",
        family: "Familie",
      },
      packages: {
        mini: "Mini",
        basic: "Basic",
        premium: "Premium",
        half: "Halber Tag",
        full: "Ganzer Tag",
      },
      distances: {
        none: "Keine Anfahrt",
        short: "Bis 20 km",
        medium: "20–50 km",
        long: "+50 km",
      },
      extrasList: {
        extraPhotos: "5 zusätzliche Fotos",
        express: "Express-Lieferung",
        album: "Album",
      },
    },
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
      "Découvrez les principales catégories du studio. Cliquez sur une catégorie pour voir la galerie.",
    categories: {
      studio: "Studio",
      outdoor: "Extérieur",
      wedding: "Mariages",
      baptism: "Baptêmes",
      landscape: "Paysages",
      family: "Famille",
    },
    pricesTitle: "Tarifs",
    pricesText:
      "Tarifs indicatifs de base. Le simulateur ci-dessous aide à estimer le prix final.",
    pricing: {
      studio: {
        title: "Photographie Studio",
        items: [
          "Mini séance — 120 CHF",
          "Séance Basic — 190 CHF",
          "Séance Premium — 320 CHF",
          "Photos supplémentaires — 15 CHF/unité",
        ],
      },
      outdoor: {
        title: "Séances Extérieures",
        items: [
          "Extérieur Mini — 160 CHF",
          "Extérieur Basic — 260 CHF",
          "Séance Lifestyle — 320 CHF",
          "Déplacement selon distance",
        ],
      },
      wedding: {
        title: "Mariages",
        items: [
          "Cérémonie — 550 CHF",
          "Demi-journée — 1100 CHF",
          "Journée complète — 1950 CHF",
          "Luxury — 2600 CHF",
        ],
      },
      baptism: {
        title: "Baptêmes",
        items: [
          "Cérémonie — 350 CHF",
          "Cérémonie + portraits — 480 CHF",
          "Reportage complet — 690 CHF",
        ],
      },
    },
    simulatorTitle: "Simulateur de Prix",
    simulatorText:
      "Choisissez les options pour obtenir rapidement une estimation.",
    simulator: {
      service: "Type de séance",
      package: "Forfait",
      distance: "Déplacement",
      extras: "Extras",
      total: "Total estimé",
      services: {
        studio: "Studio",
        outdoor: "Extérieur",
        wedding: "Mariage",
        baptism: "Baptême",
        family: "Famille",
      },
      packages: {
        mini: "Mini",
        basic: "Basic",
        premium: "Premium",
        half: "Demi-journée",
        full: "Journée complète",
      },
      distances: {
        none: "Sans déplacement",
        short: "Jusqu'à 20 km",
        medium: "20–50 km",
        long: "+50 km",
      },
      extrasList: {
        extraPhotos: "5 photos supplémentaires",
        express: "Livraison express",
        album: "Album",
      },
    },
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
      "Scopri le principali categorie dello studio. Clicca su una categoria per vedere la galleria.",
    categories: {
      studio: "Studio",
      outdoor: "Esterno",
      wedding: "Matrimoni",
      baptism: "Battesimi",
      landscape: "Paesaggi",
      family: "Famiglia",
    },
    pricesTitle: "Prezzi",
    pricesText:
      "Prezzi base indicativi. Il simulatore qui sotto aiuta a stimare il prezzo finale.",
    pricing: {
      studio: {
        title: "Fotografia in Studio",
        items: [
          "Mini Sessione — 120 CHF",
          "Sessione Basic — 190 CHF",
          "Sessione Premium — 320 CHF",
          "Foto extra — 15 CHF/cad.",
        ],
      },
      outdoor: {
        title: "Sessioni Esterne",
        items: [
          "Sessione Esterna Mini — 160 CHF",
          "Sessione Esterna Basic — 260 CHF",
          "Sessione Lifestyle — 320 CHF",
          "Spostamento secondo distanza",
        ],
      },
      wedding: {
        title: "Matrimoni",
        items: [
          "Cerimonia — 550 CHF",
          "Mezza giornata — 1100 CHF",
          "Giornata completa — 1950 CHF",
          "Luxury — 2600 CHF",
        ],
      },
      baptism: {
        title: "Battesimi",
        items: [
          "Cerimonia — 350 CHF",
          "Cerimonia + ritratti — 480 CHF",
          "Reportage completo — 690 CHF",
        ],
      },
    },
    simulatorTitle: "Simulatore Prezzi",
    simulatorText:
      "Scegli le opzioni per ottenere rapidamente una stima.",
    simulator: {
      service: "Tipo di sessione",
      package: "Pacchetto",
      distance: "Spostamento",
      extras: "Extra",
      total: "Totale stimato",
      services: {
        studio: "Studio",
        outdoor: "Esterno",
        wedding: "Matrimonio",
        baptism: "Battesimo",
        family: "Famiglia",
      },
      packages: {
        mini: "Mini",
        basic: "Basic",
        premium: "Premium",
        half: "Mezza giornata",
        full: "Giornata completa",
      },
      distances: {
        none: "Nessuno spostamento",
        short: "Fino a 20 km",
        medium: "20–50 km",
        long: "+50 km",
      },
      extrasList: {
        extraPhotos: "5 foto extra",
        express: "Consegna rapida",
        album: "Album",
      },
    },
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
  },
};

const galleryImages = {
  studio: [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  ],
  outdoor: [
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  ],
  wedding: [
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
  ],
  baptism: [
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
  ],
  landscape: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  ],
  family: [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516589091380-5d601e0d98b1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  ],
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

export default function Page() {
  const [lang, setLang] = useState("pt");
  const [activeCategory, setActiveCategory] = useState("studio");
  const [service, setService] = useState("studio");
  const [pkg, setPkg] = useState("mini");
  const [distance, setDistance] = useState("none");
  const [extras, setExtras] = useState({
    extraPhotos: false,
    express: false,
    album: false,
  });

  const t = translations[lang];

  const availablePackages = useMemo(() => {
    if (service === "wedding") return ["half", "full", "premium"];
    if (service === "baptism") return ["mini", "basic", "premium"];
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

  const whatsappLink = "https://wa.me/41793347799";
  const phoneLink = "tel:+41793347799";
  const emailLink = "mailto:info@dreamstudiogrenchen.ch";
  const siteLink = "https://www.dreamstudiogrenchen.ch";

  return (
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
              >
                {label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {galleryImages[activeCategory].map((src, index) => (
              <div className="gallery-card" key={src}>
                <img src={src} alt={`${activeCategory}-${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="section-card">
          <h3>{t.pricesTitle}</h3>
          <p>{t.pricesText}</p>

          <div className="pricing-grid">
            <div className="price-card">
              <h4>{t.pricing.studio.title}</h4>
              <ul>
                {t.pricing.studio.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="price-card">
              <h4>{t.pricing.outdoor.title}</h4>
              <ul>
                {t.pricing.outdoor.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="price-card">
              <h4>{t.pricing.wedding.title}</h4>
              <ul>
                {t.pricing.wedding.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="price-card">
              <h4>{t.pricing.baptism.title}</h4>
              <ul>
                {t.pricing.baptism.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
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
                {Object.entries(t.simulator.services).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>{t.simulator.package}</label>
              <select value={pkg} onChange={(e) => setPkg(e.target.value)}>
                {availablePackages.map((key) => (
                  <option key={key} value={key}>
                    {t.simulator.packages[key]}
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
                {Object.entries(t.simulator.distances).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="extras-grid">
            {Object.entries(t.simulator.extrasList).map(([key, label]) => (
              <label className="extra-item" key={key}>
                <input
                  type="checkbox"
                  checked={extras[key]}
                  onChange={() => handleExtraToggle(key)}
                />
                <span>{label}</span>
              </label>
            ))}
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
  );
}
