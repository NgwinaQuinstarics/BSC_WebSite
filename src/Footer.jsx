import "./Footer.css";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Impact", href: "#impact" },
    { name: "Learn", href: "#learn" },
    { name: "Programs", href: "#programs" },
    { name: "Activities", href: "/activities", isRoute: true },
    { name: "News", href: "/news", isRoute: true },
    { name: "Team", href: "#team" },
    { name: "Ambassadors", href: "#ambassadors" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" }
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: Facebook, 
      href: "https://www.facebook.com/profile.php?id=61565060699050&mibextid=ZbWKwL" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://www.instagram.com/break_sickle_cycle/" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/break-sickle-cycle-movement/" 
    },
    { 
      name: "TikTok", 
      icon: Youtube, 
      href: "https://www.tiktok.com/@user9060051116394?_t=8rpD4Ejqvcm&_r=1" 
    },
    { 
      name: "Twitter", 
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4l11.733 16h4.267l-11.733-16z"/>
          <path d="M4 20l6.768-6.768m2.46-2.46L20 4"/>
        </svg>
      ), 
      href: "https://x.com/breaksickl69177?t=CZitnkO8HzyUsW4foI-M0w&s=09" 
    },
    { 
      name: "WhatsApp", 
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ), 
      href: "https://whatsapp.com/channel/0029VagtxSe5Ui2S5Vhf5h37" 
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* LEFT - NEWSLETTER */}
          <div className="footer-newsletter">
            <div className="footer-logo">
              <img src={logo} alt="Break Sickle Cycle" />
            </div>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <a href="mailto:breaksicklecycle@gmail.com" className="footer-newsletter-text">
                  breaksicklecycle@gmail.com
                </a>
              </div>

              <div className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <a href="tel:+237620973233" className="footer-newsletter-text">
                  +237 6 20 97 32 33
                </a>
              </div>

              <div className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <p href="" className="footer-newsletter-text">
                  Bepanda, TSF Camtel Douala-Cameroon
                </p>
              </div>
            </div>

            {/* <button className="footer-subscribe-btn">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScAff66HIAQLRD6y9tBo24EJz8Zuqy1jQNPDJJQS9YGjlZMBQ/viewform?usp=publish-editor">
                  <span>Subscribe</span>
                </a>
            </button> */}
            {/* <form
              className="footer-newsletter-form"
              action="https://docs.google.com/forms/d/e/1FAIpQLScAff66HIAQLRD6y9tBo24EJz8Zuqy1jQNPDJJQS9YGjlZMBQ/viewform?usp=publish-editor"
              method="POST"
              target="_blank"
            >
              <input
                type="email"
                name="entry.1572402992" // ID du champ email du form
                placeholder="Enter your email"
                className="footer-input"
                required
              />
              <button type="submit" className="footer-subscribe-btn">
                Subscribe
              </button>
            </form> */}
          </div>

          {/* MIDDLE - NAVIGATION */}
          <div className="footer-column">
            <h3 className="footer-column-title">Quick Links</h3>
            <ul className="footer-links">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link to={link.href}>{link.name}</Link>
                  ) : (
                    <a href={link.href}>{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - SOCIAL MEDIA */}
          <div className="footer-column">
            <h3 className="footer-column-title">Follow Us</h3>
            <ul className="footer-social">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <li key={index}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon size={20} />
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM - COPYRIGHT */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © 2026 Break Sickle Cycle. All rights reserved.
          </p>
          {/* <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies Settings</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;