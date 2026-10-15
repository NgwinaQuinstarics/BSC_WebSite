import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProgramsSection.css";

// Fallback static images
import program1 from "./assets/awareness.jpeg";
import program2 from "./assets/support.jpeg";
import program3 from "./assets/capacity.jpeg";
import program4 from "./assets/mentorship.jpeg";
import program5 from "./assets/screening.jpeg";
import program6 from "./assets/picnic.jpeg";
import program7 from "./assets/rooms.jpeg";
import program8 from "./assets/summit.jpeg";

const STATIC_PROGRAMS = [
  { id: 1, category_display: "Education & Awareness", title: "National Sickle-Cell Awareness Program", description: "Free genotype screening program in schools across the nation, raising awareness about sickle cell disease and promoting early detection among students.", author: "BSC Team", date_display: "Ongoing", image: program1 },
  { id: 2, category_display: "Medical Support", title: "Medical Support for Sickle-Cell Warriors", description: "Providing comprehensive care assistance and follow-up for individuals living with sickle cell disease, ensuring they receive the medical attention they need.", author: "BSC Care Team", date_display: "Year-round", image: program2 },
  { id: 3, category_display: "Training", title: "Capacity-Building for Volunteers", description: "Training and skill-development workshops designed to equip volunteers with the knowledge and tools needed to support sickle cell warriors effectively.", author: "BSC Training", date_display: "Quarterly", image: program3 },
  { id: 4, category_display: "Healthcare", title: "Sickle-Cell Mentorship for Health Personnel", description: "Guiding doctors, nurses, and other clinicians through specialized mentorship programs to enhance their expertise in managing sickle cell disease.", author: "BSC Medical", date_display: "Ongoing", image: program4 },
  { id: 5, category_display: "Youth Screening", title: "Free Genotype Screening for Youths", description: "Open to young people across the country, this program provides free genotype screening to help youth understand their genetic status and make informed health decisions.", author: "BSC Outreach", date_display: "Monthly", image: program5 },
  { id: 6, category_display: "Community Event", title: "Annual Picnic-Brunch", description: "A yearly gathering that brings together warriors, families, and supporters for a day of community, connection, and celebration.", author: "BSC Events", date_display: "Annual", image: program6 },
  { id: 7, category_display: "Online Activities", title: "Digital Community Programs", description: "Weekly debates every Saturday night on sickle-cell topics • Warriors Room (monthly) where warriors share their stories • My Health My Life (Monthly) with medical professionals giving prevention tips.", author: "BSC Digital", date_display: "Weekly/Monthly - Online", image: program7 },
  { id: 8, category_display: "Major Event", title: "International Annual Sickle-Cell Summit", description: "Our flagship event bringing together experts, warriors, families, and stakeholders from around the world. Upcoming edition slated for December this year.", author: "BSC Summit", date_display: "Upcoming !", image: program8 },
];

const ProgramsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(STATIC_PROGRAMS.length / itemsPerPage);

  const visiblePrograms = STATIC_PROGRAMS.slice(
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
    <section className="programs-section" id="programs">
      <div className="programs-container">
        {/* HEADER */}
        <div className="programs-header">
          <p className="programs-tagline">Our Programs</p>
          <h2 className="programs-title">What does Break Sickle Cycle do ?</h2>
          <p className="programs-subtitle">
            Discover our comprehensive programs designed to support sickle cell warriors, 
            educate communities, and advance medical care.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="programs-carousel">
          <div className="programs-grid">
            {visiblePrograms.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-image">
                  <img src={program.image} alt={program.title} />
                </div>
                
                <div className="program-content">
                  <span className="program-category">{program.category_display}</span>
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  
                  <div className="program-footer">
                    <div className="program-author">
                      <div className="author-avatar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                      </div>
                      <div className="author-info">
                        <p className="author-name">{program.author}</p>
                        <p className="program-meta">{program.date_display}</p>
                      </div>
                    </div>
                    <Link to={`/activities/${program.id}`} className="program-read-more">
                      Lire plus →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NAVIGATION */}
          <div className="carousel-controls">
            <div className="carousel-dots">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="carousel-arrows">
              <button className="arrow-btn prev" onClick={goToPrevious} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button className="arrow-btn next" onClick={goToNext} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA - Voir toutes les activités */}
        <div className="programs-cta">
          <Link to="/activities" className="btn-all-activities">
            Voir toutes les activités
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
