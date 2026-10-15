import { useState } from "react";
import "./GallerySection.css";

// Fallback static images
import gallery1 from "./assets/gallery/marche.jpeg";
import gallery2 from "./assets/gallery/marche_douala.jpeg";
import gallery3 from "./assets/gallery/symposium.jpeg";
import gallery4 from "./assets/gallery/sensibilisation_eglises.jpeg";
import gallery5 from "./assets/gallery/sensibilisation_sud_ouest.jpeg";
import gallery6 from "./assets/gallery/sensibilisation_bonamoussadi.jpeg";
import gallery7 from "./assets/gallery/midi_ensemble.jpeg";
import gallery8 from "./assets/gallery/sensibilisation_limbe.jpeg";
import gallery9 from "./assets/gallery/tv.jpeg";
import gallery10 from "./assets/gallery/sensibilisation_ouest.jpeg";
import gallery11 from "./assets/gallery/sensibilisation_centre.jpeg";
import gallery12 from "./assets/gallery/sensibilisation_littoral.jpeg";
import gallery13 from "./assets/gallery/sensibilisation_univ_yde.jpeg";

const STATIC_GALLERY = [
  { id: 1, title: "Awareness Walk 2025 (Yaounde)", description: "Sports and awareness walk in the Yaounde Central region during the month of June 2025 International Sickle Cell Day", image: gallery1 },
  { id: 2, title: "Awareness Walk 2025 (Douala)", description: "Awareness campaign and fitness walk in the city of Douala! June 2025 (International Sickle Cell Day)", image: gallery2 },
  { id: 3, title: "University Symposium (FMSP)", description: "Symposium with professors and free screening at FMSP University Douala", image: gallery3 },
  { id: 4, title: "Church Outreach Program", description: "Awareness and screening in churches to reach a wider community audience", image: gallery4 },
  { id: 5, title: "Region Outreach (Southwest)", description: "Awareness in the southwest region.", image: gallery5 },
  { id: 6, title: "Regional Outreach (Douala)", description: "Awareness raising at Bonamoussadi Market (Douala).", image: gallery6 },
  { id: 7, title: "Midi Ensemble Program", description: "Midi Ensemble Program, which is a conference with parents of children living with sickle cell disease in 2025.", image: gallery7 },
  { id: 8, title: "Village Outreach (Bimbia)", description: "Awareness and screening in Bimbia Village, Limbe.", image: gallery8 },
  { id: 9, title: "Media Tour", description: "Media tour on TV and radio stations to raise awareness.", image: gallery9 },
  { id: 10, title: "Region Outreach (West)", description: "Awareness in the west region.", image: gallery10 },
  { id: 11, title: "Region Outreach (Centre)", description: "Awareness in the centre region.", image: gallery11 },
  { id: 12, title: "Region Outreach (Littoral)", description: "Awareness in the littoral region.", image: gallery12 },
  { id: 13, title: "University Outreach (YDE)", description: "Awareness and screening at YDE University.", image: gallery13 },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(STATIC_GALLERY.length / itemsPerPage);

  const visibleItems = STATIC_GALLERY.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        {/* HEADER */}
        <div className="gallery-header">
          <h2 className="gallery-title">Break Sickle Cycle Image Gallery</h2>
          <p className="gallery-subtitle">
            Moments that matter. Explore our journey through photos capturing the impact, 
            passion, and community spirit of Break Sickle Cycle.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="gallery-carousel">
          <button 
            className="gallery-nav-btn prev" 
            onClick={goToPrevious}
            aria-label="Previous images"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="gallery-grid">
            {visibleItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="image-overlay">
                    <h3 className="overlay-title">{item.title}</h3>
                  </div>
                </div>
                <div className="gallery-content">
                  <p className="gallery-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="gallery-nav-btn next" 
            onClick={goToNext}
            aria-label="Next images"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* DOTS NAVIGATION */}
        <div className="gallery-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`gallery-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
