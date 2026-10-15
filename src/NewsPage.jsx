import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNews } from "./api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./NewsPage.css";

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: "Tout" },
    { key: "news", label: "Actualités" },
    { key: "event", label: "Événements" },
    { key: "testimony", label: "Témoignages" },
    { key: "health", label: "Santé" },
    { key: "announcement", label: "Annonces" },
  ];

  useEffect(() => {
    let ignore = false;
    const fetchPosts = async () => {
      setLoading(true);
      const params = {};
      if (activeCategory !== "all") {
        params.category = activeCategory;
      }
      const data = await getNews(params);
      if (!ignore) {
        if (data) {
          setPosts(data.results || data);
        }
        setLoading(false);
      }
    };
    fetchPosts();
    return () => {
      ignore = true;
    };
  }, [activeCategory]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Navbar />
      <section className="news-page">
        <div className="news-page-container">
          {/* Header */}
          <div className="news-page-header">
            <h1 className="news-page-title">Actualités & Blog</h1>
            <p className="news-page-subtitle">
              Restez informés des dernières nouvelles, événements et témoignages
              de la communauté Break Sickle Cycle.
            </p>
          </div>

          {/* Category Filter */}
          <div className="news-categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`news-category-btn ${activeCategory === cat.key ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {loading ? (
            <div className="news-loading">
              <div className="spinner"></div>
              <p>Chargement...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="news-empty">
              <p>Aucun article pour le moment. Revenez bientôt !</p>
            </div>
          ) : (
            <div className="news-grid">
              {posts.map((post) => (
                <article key={post.id} className="news-card">
                  {post.image && (
                    <div className="news-card-image">
                      <img src={post.image} alt={post.title} />
                      <span className="news-card-category">
                        {post.category_display}
                      </span>
                    </div>
                  )}
                  <div className="news-card-content">
                    <div className="news-card-meta">
                      <span className="news-card-author">{post.author}</span>
                      <span className="news-card-date">
                        {formatDate(post.published_at)}
                      </span>
                    </div>
                    <h2 className="news-card-title">{post.title}</h2>
                    <p className="news-card-excerpt">{post.excerpt}</p>
                    <Link to={`/news/${post.slug}`} className="news-card-link">
                      Lire la suite →
                    </Link>
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

export default NewsPage;
