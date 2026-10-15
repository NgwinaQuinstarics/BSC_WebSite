import { useState, useEffect } from "react";
import "./StatisticsSection.css";
import { getStatistics } from "./api";

const STATIC_STATS = [
  { 
    id: 1, 
    number: "300,000+", 
    label: "Students Sensitized", 
    description: "Educated on sickle cell disease, genotype awareness, and prevention" 
  },
  { 
    id: 2, 
    number: "1,310", 
    label: "Youths Screened", 
    description: "Individuals under 35 received genotype screening across 2 regions" 
  },
  { 
    id: 3, 
    number: "41", 
    label: "Institutions Reached", 
    description: "Educational institutions engaged, including 39 in Cameroon and 2 in Liberia" 
  },
  { 
    id: 4, 
    number: "8", 
    label: "Regions Covered", 
    description: "Active regional coverage across Cameroon, alongside international expansion" 
  },
  { 
    id: 5, 
    number: "Millions+", 
    label: "People Reached", 
    description: "Sensitized through television, radio, digital, and social media campaigns" 
  },
  { 
    id: 6, 
    number: "100+", 
    label: "Trained Volunteers", 
    description: "Mobilized across regional networks and international chapters" 
  },
];

const StatisticsSection = () => {
  const [stats, setStats] = useState(STATIC_STATS);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getStatistics();
      if (data && data.length > 0) {
        setStats(data);
      }
    };
    fetchStats();
  }, []);

  return (
    <section className="statistics-section" id="impact">
      <div className="statistics-container">
        {/* HEADER */}
        <div className="statistics-header">
          <p className="statistics-tagline">Official Impact Report 2025–2026</p>
          <h2 className="statistics-title">
            Highlighting the growth of Break Sickle Cycle's impact in figures
          </h2>
          <p className="statistics-description">
            Through our &quot;One Voice, One Hope: Youths Leading the Sickle Cell Fight&quot; campaign 
            and documented activities across 2025–2026, Break Sickle Cycle is making a measurable 
            difference in communities across Cameroon and internationally. From school-based 
            sensitization and youth genotype screening to volunteer training and media outreach, 
            our evidence-based initiatives continue to expand and save lives.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="statistics-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
