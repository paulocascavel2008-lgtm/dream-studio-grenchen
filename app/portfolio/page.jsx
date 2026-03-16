
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { portfolioData } from "../../lib/portfolio";

const translations = {
  pt: {
    title: "Portfólio",
    text: "Explore o portfólio por categoria. Clique numa imagem para abrir em grande.",
    backHome: "Voltar à página inicial",
    close: "Fechar",
    previous: "Anterior",
    next: "Seguinte",
    galleryHint: "Clique para abrir",
    categories: {
      studio: "Estúdio",
      outdoor: "Exterior",
      wedding: "Casamentos",
      baptism: "Batizados",
      landscape: "Paisagens",
      family: "Família",
    },
  },
  de: {
    title: "Portfolio",
    text: "Entdecken Sie das Portfolio nach Kategorien. Klicken Sie auf ein Bild, um es groß zu öffnen.",
    backHome: "Zurück zur Startseite",
    close: "Schließen",
    previous: "Zurück",
    next: "Weiter",
    galleryHint: "Zum Öffnen klicken",
    categories: {
      studio: "Studio",
      outdoor: "Outdoor",
      wedding: "Hochzeiten",
      baptism: "Taufen",
      landscape: "Landschaften",
      family: "Familie",
    },
  },
  fr: {
    title: "Portfolio",
    text: "Découvrez le portfolio par catégorie. Cliquez sur une image pour l’ouvrir en grand.",
    backHome: "Retour à l’accueil",
    close: "Fermer",
    previous: "Précédent",
    next: "Suivant",
    galleryHint: "Cliquer pour ouvrir",
    categories: {
      studio: "Studio",
      outdoor: "Extérieur",
      wedding: "Mariages",
      baptism: "Baptêmes",
      landscape: "Paysages",
      family: "Famille",
    },
  },
  it: {
    title: "Portfolio",
    text: "Esplora il portfolio per categoria. Clicca su un’immagine per aprirla in grande.",
    backHome: "Torna alla home",
    close: "Chiudi",
    previous: "Precedente",
    next: "Successiva",
    galleryHint: "Clicca per aprire",
    categories: {
      studio: "Studio",
      outdoor: "Esterno",
      wedding: "Matrimoni",
      baptism: "Battesimi",
      landscape: "Paesaggi",
      family: "Famiglia",
    },
  },
};

export default function PortfolioPage() {
  const [lang, setLang] = useState("pt");
  const [activeCategory, setActiveCategory] = useState("studio");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const t = translations[lang];
  const currentImages = useMemo(() => portfolioData[activeCategory] || [], [activeCategory]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % currentImages.length));
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev - 1 + currentImages.length) % currentImages.length
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

  const showPrevImage = () => {
    if (!currentImages.length) return;
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + currentImages.length) % currentImages.length));
  };

  const showNextImage = () => {
    if (!currentImages.length) return;
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % currentImages.length));
  };

  return (
    <>
      <main className="site-shell">
        <div className="page-container">
          <header className="topbar portfolio-topbar">
            <Link href="/" className="brand-wrap" aria-label="Dream Studio Grenchen home">
              <img
                src="/logo-dream-studio.png"
                alt="Dream Studio Grenchen by Paulo Alves"
                className="brand-logo"
              />
            </Link>

            <div className="portfolio-actions">
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

              <Link href="/" className="secondary-btn">
                {t.backHome}
              </Link>
            </div>
          </header>

          <section className="hero-card">
            <p className="section-kicker">{t.title.toUpperCase()}</p>
            <h1 className="portfolio-title">{t.title}</h1>
            <p className="portfolio-text">{t.text}</p>
          </section>

          <section className="section-card">
            <div className="category-row">
              {Object.entries(t.categories)
                .filter(([key]) => portfolioData[key])
                .map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    className={`category-btn ${activeCategory === key ? "active" : ""}`}
                    onClick={() => setActiveCategory(key)}
                  >
                    {label}
                  </button>
                ))}
            </div>

            <div className="portfolio-gallery-grid">
              {currentImages.map((src, index) => (
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
        </div>
      </main>

      {selectedIndex !== null && currentImages[selectedIndex] && (
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

            <img src={currentImages[selectedIndex]} alt="portfolio-large" className="lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
}
