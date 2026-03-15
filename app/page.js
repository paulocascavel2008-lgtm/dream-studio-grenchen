"use client";

import { useMemo, useState } from "react";

const content = {
  pt: {
    langName: "Português",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle: "Fotografia premium com visual clean e elegante.",
    heroText:
      "Retratos, casamentos, batizados, sessões exteriores, fotografia de estúdio e paisagens em Grenchen.",
    navPortfolio: "Portfólio",
    navPrices: "Preços",
    navBooking: "Reserva",
    navContact: "Contacto",
    portfolioTitle: "Portfólio",
    portfolioText:
      "O site está preparado para retratos, casamentos, família, gravidez e paisagens.",
    pricesTitle: "Preços",
    bookingTitle: "Reserva",
    bookingText:
      "Peça orçamento ou deixe uma mensagem para marcar a sua sessão.",
    contactTitle: "Contacto",
    categories: ["Estúdio", "Exterior", "Casamentos", "Batizados", "Paisagens"],
    priceGroups: [
      {
        title: "Fotografia de Estúdio",
        items: [
          "Mini Sessão — 120 CHF",
          "Sessão Basic — 190 CHF",
          "Sessão Premium — 320 CHF",
          "Sessão Profissional — 450 CHF"
        ]
      },
      {
        title: "Sessões Fora de Estúdio",
        items: [
          "Sessão Exterior Mini — 160 CHF",
          "Sessão Exterior Basic — 260 CHF",
          "Sessão Exterior Premium — 390 CHF",
          "Sessão Lifestyle — 520 CHF"
        ]
      },
      {
        title: "Casamentos",
        items: [
          "Cerimónia — 550 CHF",
          "Meio Dia — 1100 CHF",
          "Dia Completo — 1950 CHF",
          "Luxury — 2600 CHF"
        ]
      },
      {
        title: "Batizados",
        items: [
          "Cerimónia — 350 CHF",
          "Cerimónia + Retratos — 480 CHF",
          "Reportagem Completa — 690 CHF"
        ]
      },
      {
        title: "Deslocação",
        items: [
          "Até 20 km — Grátis",
          "20–50 km — 0.80 CHF/km",
          "50–100 km — 0.90 CHF/km",
          "+100 km — 1.00 CHF/km"
        ]
      }
    ],
    formName: "Nome",
    formEmail: "Email",
    formPhone: "Telefone",
    formMessage: "Mensagem",
    formButton: "Enviar pedido"
  },
  de: {
    langName: "Deutsch",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle: "Premium-Fotografie mit klarem und elegantem Stil.",
    heroText:
      "Portraits, Hochzeiten, Taufen, Outdoor-Shootings, Studiofotografie und Landschaften in Grenchen.",
    portfolioTitle: "Portfolio",
    portfolioText:
      "Die Website ist für Portraits, Hochzeiten, Familie, Schwangerschaft und Landschaften vorbereitet.",
    pricesTitle: "Preise",
    bookingTitle: "Reservierung",
    bookingText:
      "Fordern Sie ein Angebot an oder senden Sie eine Nachricht für Ihre Buchung.",
    contactTitle: "Kontakt",
    categories: ["Studio", "Outdoor", "Hochzeiten", "Taufen", "Landschaften"],
    priceGroups: [
      {
        title: "Studiofotografie",
        items: [
          "Mini Session — 120 CHF",
          "Basic Session — 190 CHF",
          "Premium Session — 320 CHF",
          "Professionelle Session — 450 CHF"
        ]
      },
      {
        title: "Outdoor-Shootings",
        items: [
          "Outdoor Mini — 160 CHF",
          "Outdoor Basic — 260 CHF",
          "Outdoor Premium — 390 CHF",
          "Lifestyle Session — 520 CHF"
        ]
      },
      {
        title: "Hochzeiten",
        items: [
          "Zeremonie — 550 CHF",
          "Halber Tag — 1100 CHF",
          "Ganzer Tag — 1950 CHF",
          "Luxury — 2600 CHF"
        ]
      },
      {
        title: "Taufen",
        items: [
          "Zeremonie — 350 CHF",
          "Zeremonie + Portraits — 480 CHF",
          "Komplette Reportage — 690 CHF"
        ]
      },
      {
        title: "Anfahrt",
        items: [
          "Bis 20 km — Kostenlos",
          "20–50 km — 0.80 CHF/km",
          "50–100 km — 0.90 CHF/km",
          "+100 km — 1.00 CHF/km"
        ]
      }
    ],
    formName: "Name",
    formEmail: "E-Mail",
    formPhone: "Telefon",
    formMessage: "Nachricht",
    formButton: "Anfrage senden"
  },
  fr: {
    langName: "Français",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle: "Photographie premium avec un style propre et élégant.",
    heroText:
      "Portraits, mariages, baptêmes, séances extérieures, studio et paysages à Grenchen.",
    portfolioTitle: "Portfolio",
    portfolioText:
      "Le site est prêt pour les portraits, mariages, famille, grossesse et paysages.",
    pricesTitle: "Tarifs",
    bookingTitle: "Réservation",
    bookingText:
      "Demandez un devis ou laissez un message pour réserver votre séance.",
    contactTitle: "Contact",
    categories: ["Studio", "Extérieur", "Mariages", "Baptêmes", "Paysages"],
    priceGroups: [
      {
        title: "Photographie Studio",
        items: [
          "Mini Séance — 120 CHF",
          "Séance Basic — 190 CHF",
          "Séance Premium — 320 CHF",
          "Séance Professionnelle — 450 CHF"
        ]
      },
      {
        title: "Séances Extérieures",
        items: [
          "Extérieur Mini — 160 CHF",
          "Extérieur Basic — 260 CHF",
          "Extérieur Premium — 390 CHF",
          "Lifestyle — 520 CHF"
        ]
      },
      {
        title: "Mariages",
        items: [
          "Cérémonie — 550 CHF",
          "Demi-journée — 1100 CHF",
          "Journée complète — 1950 CHF",
          "Luxury — 2600 CHF"
        ]
      },
      {
        title: "Baptêmes",
        items: [
          "Cérémonie — 350 CHF",
          "Cérémonie + Portraits — 480 CHF",
          "Reportage complet — 690 CHF"
        ]
      },
      {
        title: "Déplacement",
        items: [
          "Jusqu'à 20 km — Gratuit",
          "20–50 km — 0.80 CHF/km",
          "50–100 km — 0.90 CHF/km",
          "+100 km — 1.00 CHF/km"
        ]
      }
    ],
    formName: "Nom",
    formEmail: "Email",
    formPhone: "Téléphone",
    formMessage: "Message",
    formButton: "Envoyer la demande"
  },
  it: {
    langName: "Italiano",
    heroTitle: "Dream Studio Grenchen",
    heroSubtitle: "Fotografia premium con stile pulito ed elegante.",
    heroText:
      "Ritratti, matrimoni, battesimi, sessioni esterne, studio fotografico e paesaggi a Grenchen.",
    portfolioTitle: "Portfolio",
    portfolioText:
      "Il sito è pronto per ritratti, matrimoni, famiglia, gravidanza e paesaggi.",
    pricesTitle: "Prezzi",
    bookingTitle: "Prenotazione",
    bookingText:
      "Richieda un preventivo o lasci un messaggio per prenotare la sua sessione.",
    contactTitle: "Contatto",
    categories: ["Studio", "Esterno", "Matrimoni", "Battesimi", "Paesaggi"],
    priceGroups: [
      {
        title: "Fotografia in Studio",
        items: [
          "Mini Sessione — 120 CHF",
          "Sessione Basic — 190 CHF",
          "Sessione Premium — 320 CHF",
          "Sessione Professionale — 450 CHF"
        ]
      },
      {
        title: "Sessioni Esterne",
        items: [
          "Esterno Mini — 160 CHF",
          "Esterno Basic — 260 CHF",
          "Esterno Premium — 390 CHF",
          "Lifestyle — 520 CHF"
        ]
      },
      {
        title: "Matrimoni",
        items: [
          "Cerimonia — 550 CHF",
          "Mezza Giornata — 1100 CHF",
          "Giornata Completa — 1950 CHF",
          "Luxury — 2600 CHF"
        ]
      },
      {
        title: "Battesimi",
        items: [
          "Cerimonia — 350 CHF",
          "Cerimonia + Ritratti — 480 CHF",
          "Reportage Completo — 690 CHF"
        ]
      },
      {
        title: "Spostamento",
        items: [
          "Fino a 20 km — Gratis",
          "20–50 km — 0.80 CHF/km",
          "50–100 km — 0.90 CHF/km",
          "+100 km — 1.00 CHF/km"
        ]
      }
    ],
    formName: "Nome",
    formEmail: "Email",
    formPhone: "Telefono",
    formMessage: "Messaggio",
    formButton: "Invia richiesta"
  }
};

const languages = [
  { key: "pt", label: "PT" },
  { key: "de", label: "DE" },
  { key: "fr", label: "FR" },
  { key: "it", label: "IT" }
];

export default function Page() {
  const [lang, setLang] = useState("pt");
  const t = useMemo(() => content[lang], [lang]);

  return (
    <main className="page">
      <header className="header">
        <div>
          <div className="brand">Dream Studio Grenchen</div>
          <div className="subbrand">by Paulo Alves</div>
        </div>
        <div className="lang-switch">
          {languages.map((item) => (
            <button
              key={item.key}
              className={lang === item.key ? "lang active" : "lang"}
              onClick={() => setLang(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <section className="hero">
        <div className="hero-card">
          <p className="eyebrow">{t.langName}</p>
          <h1>{t.heroTitle}</h1>
          <h2>{t.heroSubtitle}</h2>
          <p className="hero-text">{t.heroText}</p>
        </div>
      </section>

      <section className="section">
        <h3>{t.portfolioTitle}</h3>
        <p>{t.portfolioText}</p>
        <div className="grid">
          {t.categories.map((item) => (
            <div key={item} className="card">
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>{t.pricesTitle}</h3>
        <div className="prices">
          {t.priceGroups.map((group) => (
            <div key={group.title} className="price-card">
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>{t.bookingTitle}</h3>
        <p>{t.bookingText}</p>
        <form className="form">
          <input placeholder={t.formName} />
          <input placeholder={t.formEmail} />
          <input placeholder={t.formPhone} />
          <textarea placeholder={t.formMessage} rows="5" />
          <button type="button">{t.formButton}</button>
        </form>
      </section>

      <section className="section">
        <h3>{t.contactTitle}</h3>
        <p>079 334 77 99</p>
        <p>info@dreamstudiogrenchen.ch</p>
        <p>Grenchen, Schweiz</p>
      </section>
    </main>
  );
}
