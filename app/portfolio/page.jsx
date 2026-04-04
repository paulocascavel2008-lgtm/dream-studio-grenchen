"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { portfolioData } from "../../lib/portfolio";

const translations = {
  pt: {
    langLabel: "PORTUGUÊS",
    title: "Portfólio Completo",
    subtitle:
      "Explore todas as galerias do Dream Studio Grenchen por categoria.",
    backHome: "Voltar à página principal",
    galleryHint: "Clique para abrir",
    close: "Fechar",
    previous: "Anterior",
    next: "Seguinte",
    empty: "Ainda não há imagens disponíveis nesta categoria.",
    categories: {
      studio: "Estúdio",
      outdoor: "Exterior",
      wedding: "Casamentos",
      baptism: "Batizados",
      landscape: "Paisagem",
      family: "Família",
    },
  },
  de: {
    langLabel: "DEUTSCH",
    title: "Komplettes Portfolio",
    subtitle:
      "Entdecken Sie alle Galerien von Dream Studio Grenchen nach Kategorie.",
    backHome: "Zurück zur Startseite",
    galleryHint: "Zum Öffnen klicken",
    close: "Schließen",
    previous: "Zurück",
    next: "Weiter",
    empty: "In dieser Kategorie sind noch keine Bilder verfügbar.",
    categories: {
      studio: "Studio",
      outdoor: "Outdoor",
      wedding: "Hochzeiten",
      baptism: "Taufen",
      landscape: "Landschaft",
      family: "Familie",
    },
  },
  fr: {
    langLabel: "FRANÇAIS",
    title: "Portfolio Complet",
    subtitle:
      "Découvrez toutes les galeries de Dream Studio Grenchen par catégorie.",
    backHome: "Retour à la page d’accueil",
    galleryHint: "Cliquer pour ouvrir",
    close: "Fermer",
    previous: "Précédent",
    next: "Suivant",
    empty: "Aucune image disponible pour cette catégorie pour le moment.",
    categories: {
      studio: "Studio",
      outdoor: "Extérieur",
      wedding: "Mariages",
      baptism: "Baptêmes",
      landscape: "Paysage",
      family: "Famille",
    },
  },
  it: {
    langLabel: "ITALIANO",
    title: "Portfolio Completo",
    subtitle:
      "Esplora tutte le gallerie di Dream Studio Grenchen per categoria.",
    backHome: "Torna alla pagina principale",
    galleryHint: "Clicca per aprire",
    close: "Chiudi",
    previous: "Precedente",
    next: "Successiva",
    empty: "Non ci sono ancora immagini disponibili in questa categoria.",
    categories: {
      studio: "Studio",
      outdoor: "Esterno",
      wedding: "Matrimoni",
      baptism: "Battesimi",
      landscape: "Paesaggio",
      family: "Famiglia",
    },
  },
};

const categoryOrder = [
  "studio",
  "outdoor",
  "wedding",
  "baptism",
  "landscape",
  "family",
];

export default function PortfolioPage() {
  const [lang, setLang] = useState("pt");
  const [activeCategory, setActiveCategory] = useState("studio");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [validImages, setValidImages] = useState([]);

  const t = translations[lang];
  const currentImages = portfolioData[activeCategory] || [];

  useEffect(() => {
    let cancelled = false;

    const checkImages = async () => {
      const results = await Promise.all(
        currentImages.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve(src);
              img.onerror = () => resolve(null);
            })
        )
      );

      if (!cancelled) {
        setValidImages(results.filter(Boolean));
      }
    };

    checkImages();
    setSelectedIndex(null);

    return () => {
      cancelled = true;
    };
  }, [activeCategory, currentImages]);

  const previewImages = useMemo(() => validImages, [validImages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null || !previewImages.length) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev + 1) % previewImages.length
        );
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + previewImages.length) % previewImages.length
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
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + previewImages.length) % previewImages.length
    );
  };

  const showNextImage = () => {
    if (!previewImages.length) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % previewImages.length
    );
  };

  return (
    <>
      <main className="site-shell">
        <div className="page-container">
          <header className="topbar">
            <Link href="/" className="brand-wrap" aria-label="Dream Studio Grenchen home">
              <img
                src="/logo-dream-studio.jpg"
                alt="Dream Studio Grenchen by Paulo Alves"
                className="brand-logo"
              />
            </Link>

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
                <h1>{t.title}</h1>
                <h2>{t.subtitle}</h2>

                <div className="hero-actions">
                  <Link className="secondary-btn" href="/">
                    {t.backHome}
                  </Link>
                </div>
              </div>

              <div className="hero-side-card">
                <img
                  src="/hero-photo.jpg"
                  alt="Dream Studio Grenchen portfolio"
                  className="hero-feature-image"
                />
              </div>
            </div>
          </section>

          <section className="section-card">
            <div className="category-row">
              {categoryOrder
                .filter((key) => portfolioData[key])
                .map((key) => (
                  <button
                    key={key}
                    className={`category-btn ${activeCategory === key ? "active" : ""}`}
                    onClick={() => setActiveCategory(key)}
                    type="button"
                  >
                    {t.categories[key]}
                  </button>
                ))}
            </div>

            {previewImages.length === 0 ? (
              <p style={{ marginTop: "1rem" }}>{t.empty}</p>
            ) : (
              <div className="gallery-grid">
                {previewImages.map((src, index) => (
                  <button
                    type="button"
                    className="gallery-card gallery-button"
                    key={`${src}-${index}`}
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`${t.galleryHint} ${index + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${activeCategory}-${index + 1}`}
                      loading="lazy"
                    />
                    <span className="gallery-overlay">{t.galleryHint}</span>
                  </button>
                ))}
              </div>
            )}
          </section>

          <footer className="footer">
            <p>Dream Studio Grenchen • Paulo Alves</p>
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

              <button
                type="button"
                className="lightbox-close"
                onClick={() => setSelectedIndex(null)}
              >
                × {t.close}
              </button>

              <button type="button" className="lightbox-nav" onClick={showNextImage}>
                {t.next} →
              </button>
            </div>

            <img
              src={previewImages[selectedIndex]}
              alt="portfolio-large"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
