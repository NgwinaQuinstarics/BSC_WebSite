import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getActivities } from "./api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ActivitiesPage.css";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "Tout" },
    { key: "ongoing", label: "En cours" },
    { key: "upcoming", label: "À venir" },
    { key: "completed", label: "Terminées" },
  ];

  useEffect(() => {
    let ignore = false;
    const fetchActivities = async () => {
      setLoading(true);
      const params = {};
      if (activeFilter !== "all") {
        params.status = activeFilter;
      }
      const data = await getActivities(params);
      if (!ignore) {
        if (data) {
          setActivities(data);
        }
        setLoading(false);
      }
    };
    fetchActivities();
    return () => {
      ignore = true;
    };
  }, [activeFilter]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "ongoing": return <span className="activity-badge badge-ongoing">En cours</span>;
      case "upcoming": return <span className="activity-badge badge-upcoming">À venir</span>;
      case "completed": return <span className="activity-badge badge-completed">Terminée</span>;
      default: return null;
    }
  };

  return (
    <>
      <Navbar />
      <section className="activities-page">
        <div className="activities-page-container">
          <div className="activities-page-header">
            <h1 className="activities-page-title">Nos Activités & Programmes</h1>
            <p className="activities-page-subtitle">
              Découvrez l'ensemble de nos programmes dédiés au soutien des guerriers drépanocytaires,
              à l'éducation des communautés et à l'avancement des soins médicaux.
            </p>
          </div>

          {/* Filters */}
          <div className="activities-filters">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`activities-filter-btn ${activeFilter === f.key ? "active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Activities Grid */}
          {loading ? (
            <div className="activities-loading">
              <div className="spinner"></div>
              <p>Chargement...</p>
            </div>
          ) : activities.length === 0 ? (
            <div className="activities-empty">
              <p>Aucune activité trouvée pour ce filtre.</p>
            </div>
          ) : (
            <div className="activities-grid">
              {activities.map((activity) => (
                <article key={activity.id} className="activity-card">
                  {activity.image && (
                    <div className="activity-card-image">
                      <img src={activity.image} alt={activity.title} />
                      {getStatusBadge(activity.status)}
                    </div>
                  )}
                  <div className="activity-card-content">
                    <span className="activity-card-category">{activity.category_display}</span>
                    <h2 className="activity-card-title">{activity.title}</h2>
                    <p className="activity-card-description">{activity.description}</p>
                    <div className="activity-card-footer">
                      <div className="activity-card-meta">
                        <span className="activity-card-author">{activity.author}</span>
                        <span className="activity-card-date">{activity.date_display}</span>
                      </div>
                      <Link to={`/activities/${activity.id}`} className="activity-card-link">
                        Détails →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ActivitiesPage;
