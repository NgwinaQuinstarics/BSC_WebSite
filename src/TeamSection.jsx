import { useState, useEffect } from "react";
import "./TeamSection.css";
import { getTeam } from "./api";
import { Phone, MapPin, GraduationCap, Globe } from "lucide-react";

// Fallback static images - Leadership & Regional Coordinators
import bitsie from "./assets/team/bitsie.jpeg";
import akwa from "./assets/team/akwa.jpeg";
import chamberlin from "./assets/team/chamberlin.jpeg";
import issangui from "./assets/team/issangui.jpeg";
import kelly from "./assets/team/kelly.jpeg";
import yvonne from "./assets/team/yvonne.jpeg";
import sona from "./assets/team/sona.jpeg";
import berna from "./assets/team/berna.jpeg";
import antoinette from "./assets/team/antoinette.jpg";
import manuella from "./assets/team/manuella.jpg";
import issa from "./assets/team/issa.jpg";
import tanekeu from "./assets/team/tanekeu.jpg";
import tiku from "./assets/team/tiku.jpg";
import egoh from "./assets/team/egoh.jpg";

// Ambassador Photographs
import bridgetMoyo from "./assets/ambassadors/Bridget Lilian Moyo .jpeg";
import manuelaMba from "./assets/ambassadors/Manuela Leocadia Mba Eya .jpeg";
import mondeWalubita from "./assets/ambassadors/Monde Blessing Walubita .jpeg";
import olandoGoodridge from "./assets/ambassadors/Olando G. Goodridge .jpeg";
import omegaDzvova from "./assets/ambassadors/Omega Dzvova .jpeg";

const STATIC_TEAM = [
  // ============================================================
  // EXECUTIVE LEADERSHIP & COMMUNICATIONS
  // ============================================================
  { 
    id: 1, 
    name: "Dr Mbonjo Bitsie Dora", 
    position: "Founder and President", 
    category: "leadership",
    categoryLabel: "Executive Leadership",
    location: "Cameroon",
    flag: "🇨🇲",
    bio: "Leading BSC's mission to build a sickle cell free community with passion, dedication, and a vision for transformative change in Cameroon and beyond.", 
    image: bitsie 
  },
  { 
    id: 2, 
    name: "Dr Wolle Mba Berna Marquise", 
    position: "Vice President", 
    category: "leadership",
    categoryLabel: "Executive Leadership",
    location: "Cameroon",
    flag: "🇨🇲",
    bio: "Supporting the strategic direction of BSC and championing awareness initiatives to educate communities about sickle cell disease.", 
    image: berna 
  },
  { 
    id: 3, 
    name: "Ms Mafor Yvonne Azie", 
    position: "General Secretary", 
    category: "leadership",
    categoryLabel: "Executive Leadership",
    location: "Cameroon",
    flag: "🇨🇲",
    bio: "Ensuring organizational efficiency and coordinating BSC's operations to deliver impactful programs and support to warriors.", 
    image: yvonne 
  },
  { 
    id: 4, 
    name: "Sona Sonia Sheilla", 
    position: "Accountant Officer", 
    category: "leadership",
    categoryLabel: "Finance",
    location: "Cameroon",
    flag: "🇨🇲",
    bio: "Managing BSC's financial resources with transparency and ensuring sustainable funding for all our initiatives.", 
    image: sona 
  },
  { 
    id: 5, 
    name: "Chomwa Tamwo Chamberlin", 
    position: "Communication Officer", 
    category: "leadership",
    categoryLabel: "Communications",
    location: "Cameroon",
    flag: "🇨🇲",
    bio: "Crafting compelling narratives and managing BSC's communication strategies to amplify our message and reach.", 
    image: chamberlin 
  },
  { 
    id: 6, 
    name: "Assongmo Manuella", 
    position: "Communication Officer", 
    category: "leadership",
    categoryLabel: "Communications",
    location: "Cameroon",
    flag: "🇨🇲",
    bio: "Driving engagement across digital platforms and ensuring our community stays informed and connected.", 
    image: manuella 
  },
  { 
    id: 7, 
    name: "Omega Dzvova", 
    position: "PR & Communications Officer", 
    category: "leadership",
    categoryLabel: "Communications (Zimbabwe)",
    location: "Zimbabwe",
    flag: "🇿🇼",
    phone: "+263 78 302 0400",
    bio: "Serving as PR & Communications Officer, driving international communications, media outreach, and advocacy for Break Sickle Cycle from Zimbabwe.", 
    image: omegaDzvova 
  },
  { 
    id: 8, 
    name: "Nguimbous Antoinette Priscille", 
    position: "Head Media Department", 
    category: "leadership",
    categoryLabel: "Media & Outreach",
    location: "Cameroon",
    flag: "🇨🇲",
    bio: "Leading BSC's media initiatives and creating impactful visual content to raise awareness about sickle cell disease.", 
    image: antoinette 
  },
  { 
    id: 9, 
    name: "Dr Issangui Gaudy", 
    position: "Head of Medical and Research", 
    category: "leadership",
    categoryLabel: "Medical & Research",
    location: "Cameroon",
    flag: "🇨🇲",
    bio: "Spearheading medical support programs and research initiatives to advance sickle cell care and treatment.", 
    image: issangui 
  },
  { 
    id: 10, 
    name: "Ms Djuidje Kelly Capwel", 
    position: "Head of Juristic Department", 
    category: "leadership",
    categoryLabel: "Legal Affairs",
    location: "Cameroon",
    flag: "🇨🇲",
    bio: "Providing legal guidance and ensuring BSC operates with full compliance and protects the rights of sickle cell warriors.", 
    image: kelly 
  },

  // ============================================================
  // INTERNATIONAL AMBASSADORS
  // ============================================================
  { 
    id: 11, 
    name: "Monde Blessing Walubita", 
    position: "Ambassador for Break Sickle Cycle Zambia", 
    category: "ambassadors",
    categoryLabel: "Ambassador",
    location: "Zambia",
    flag: "🇿🇲",
    education: "Cavendish University • Medicine and Surgery",
    phone: "+260 76 477 0227",
    bio: "Medical student at Cavendish University passionately advocating for early genotype screening, youth education, and sickle cell awareness across Zambia.", 
    image: mondeWalubita 
  },
  { 
    id: 12, 
    name: "Olando G. Goodridge", 
    position: "Ambassador", 
    category: "ambassadors",
    categoryLabel: "Ambassador",
    location: "Liberia",
    flag: "🇱🇷",
    education: "Founder of the Light Foundation",
    phone: "+231 775 058 665 / +231 886 854 416",
    bio: "Founder of the Light Foundation, championing grassroots sickle cell awareness, screening access, and patient advocacy across Liberia.", 
    image: olandoGoodridge 
  },
  { 
    id: 13, 
    name: "Manuela Leocadia Mba Eya", 
    position: "Ambassador, Break Sickle Cycle Equatorial Guinea", 
    category: "ambassadors",
    categoryLabel: "Ambassador",
    location: "Equatorial Guinea",
    flag: "🇬🇶",
    education: "International Trade & Finance Graduate",
    phone: "+90 505 066 98620",
    bio: "International Trade and Finance graduate dedicated to expanding sickle cell sensitization, patient support, and screening awareness in Equatorial Guinea.", 
    image: manuelaMba 
  },
  { 
    id: 14, 
    name: "Bridget Lilian Moyo", 
    position: "Ambassador, Malawi Break Sickle Cycle", 
    category: "ambassadors",
    categoryLabel: "Ambassador",
    location: "Malawi",
    flag: "🇲🇼",
    phone: "+265 883 209 682",
    bio: "Leading sickle cell awareness campaigns, youth advocacy, and warrior support initiatives for Break Sickle Cycle in Malawi.", 
    image: bridgetMoyo 
  },

  // ============================================================
  // REGIONAL COORDINATORS (CAMEROON)
  // ============================================================
  { 
    id: 15, 
    name: "Ms Akwa Constance Nji", 
    position: "Project Manager & Regional Coordinator - Center", 
    category: "coordinators",
    categoryLabel: "Regional Coordinator",
    location: "Center Region",
    flag: "🇨🇲",
    bio: "Overseeing the execution of BSC's diverse programs and coordinating regional activities, school outreaches, and screening campaigns across the Center Region.", 
    image: akwa 
  },
  { 
    id: 16, 
    name: "Tanekeu Tateng Harold Rayan", 
    position: "Regional Coordinator - West", 
    category: "coordinators",
    categoryLabel: "Regional Coordinator",
    location: "West Region",
    flag: "🇨🇲",
    bio: "Coordinating BSC's sensitization efforts, volunteer mobilization, and community health partnerships across the West Region.", 
    image: tanekeu 
  },
  { 
    id: 17, 
    name: "Tiku Kevin Tebeck", 
    position: "Regional Coordinator - North", 
    category: "coordinators",
    categoryLabel: "Regional Coordinator",
    location: "North Region",
    flag: "🇨🇲",
    bio: "Spearheading awareness initiatives, youth engagement, and educational campaigns in the North Region of Cameroon.", 
    image: tiku 
  },
  { 
    id: 18, 
    name: "Egoh Kellser Abla", 
    position: "Regional Coordinator - North West", 
    category: "coordinators",
    categoryLabel: "Regional Coordinator",
    location: "North West Region",
    flag: "🇨🇲",
    bio: "Coordinating outreach programs, community health dialogues, and volunteer networks in the North West Region.", 
    image: egoh 
  },
  { 
    id: 19, 
    name: "Issa Ibrahim", 
    position: "Regional Coordinator - Far North", 
    category: "coordinators",
    categoryLabel: "Regional Coordinator",
    location: "Far North Region",
    flag: "🇨🇲",
    bio: "Leading BSC's community awareness, screening drives, and grassroots mobilization in the Far North Region.", 
    image: issa 
  },
];

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState(STATIC_TEAM);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#ambassadors") {
        setActiveTab("ambassadors");
      } else if (hash === "#coordinators") {
        setActiveTab("coordinators");
      } else if (hash === "#leadership") {
        setActiveTab("leadership");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await getTeam();
      if (data && data.length > 0) {
        // Merge API data with local rich metadata if available
        const enriched = data.map((item) => {
          const match = STATIC_TEAM.find((s) => s.name.toLowerCase() === item.name.toLowerCase());
          return match ? { ...match, ...item, image: item.image || match.image } : item;
        });
        setTeamMembers(enriched);
      }
    };
    fetchTeam();
  }, []);

  const tabs = [
    { key: "all", label: "All Members", count: teamMembers.length },
    { 
      key: "leadership", 
      label: "Leadership & Communications", 
      count: teamMembers.filter((m) => m.category === "leadership").length 
    },
    { 
      key: "ambassadors", 
      label: "International Ambassadors", 
      count: teamMembers.filter((m) => m.category === "ambassadors").length 
    },
    { 
      key: "coordinators", 
      label: "Regional Coordinators (Cameroon)", 
      count: teamMembers.filter((m) => m.category === "coordinators").length 
    },
  ];

  const filteredMembers = activeTab === "all"
    ? teamMembers
    : teamMembers.filter((member) => member.category === activeTab);

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        {/* HEADER */}
        <div className="team-header">
          <p className="team-tagline">Leadership & Ambassadors</p>
          <h2 className="team-title">Discover Break Sickle Cycle's Dedicated Network</h2>
          <p className="team-subtitle">
            United in the fight against sickle cell disease. Our diverse network brings together 
            visionary medical leaders, passionate international ambassadors, and regional coordinators 
            driving impact across Cameroon and across the globe.
          </p>
        </div>

        {/* TABS */}
        <div className="team-tabs-container">
          <div className="team-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                className={`team-tab-btn ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span>{tab.label}</span>
                <span className="tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ANCHOR MARKERS FOR DIRECT ROUTING */}
        <div id="ambassadors" className="team-anchor-offset"></div>
        <div id="coordinators" className="team-anchor-offset"></div>

        {/* TEAM GRID */}
        <div className="team-grid">
          {filteredMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>

              <div className="team-content">
                <div className="team-badges">
                  {member.location && (
                    <span className="location-badge">
                      <MapPin size={12} />
                      {member.flag ? `${member.flag} ` : ""}{member.location}
                    </span>
                  )}
                  {member.categoryLabel && (
                    <span className="category-badge">{member.categoryLabel}</span>
                  )}
                </div>

                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>

                {member.education && (
                  <div className="member-education">
                    <GraduationCap size={14} className="education-icon" />
                    <span>{member.education}</span>
                  </div>
                )}

                <p className="member-bio">{member.bio}</p>

                {member.phone && (
                  <div className="member-contact">
                    <Phone size={13} className="contact-icon" />
                    <span className="contact-number">{member.phone}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* REGIONAL COORDINATION STATUS NOTICE */}
        {(activeTab === "all" || activeTab === "coordinators") && (
          <div className="regional-status-notice">
            <div className="notice-icon">
              <Globe size={24} />
            </div>
            <div className="notice-content">
              <h4 className="notice-title">Cameroon Regional Coverage Overview</h4>
              <p className="notice-text">
                Break Sickle Cycle covers <strong>8 regions across Cameroon</strong> as documented in the 
                official 2025–2026 Consolidated Activity &amp; Impact Summary submitted to the Ministry of Health. 
                The verified Regional Coordinators above lead operations in the Center, West, North, North-West, 
                and Far-North regions. Outreach, screenings, and volunteer teams in the Littoral, South-West, 
                and Adamawa regions are actively mobilized under national supervision, with local appointments 
                undergoing confirmation.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
