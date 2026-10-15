import "./AboutSection.css";
import aboutImage from "./assets/about_5.jpeg";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* LEFT SIDE - TEXT */}
        <div className="about-content">
          <h2 className="about-title">ABOUT BREAK SICKLE CYCLE</h2>
          
          <div className="about-text">
            <p>
              Break Sickle Cycle was born on August 19, 2024. It all started on a simple WhatsApp 
              channel, but the seed was planted long before that.
            </p>
            
            <p>
              During my fourth-year internship at the Hospital, I saw countless families crushed by 
              the daily pain of sickle-cell disease. Parents were devastated, patients were frustrated, 
              and the stress was palpable. I kept asking myself why this condition remained so invisible, 
              why so few people knew about it.
            </p>
            
            <p>
              That question followed me into medical school. For my thesis I compared the quality of 
              life of parents caring for sickle-cell patients with those caring for HIV patients. The 
              results were stark: the sickle-cell caregivers suffered higher anxiety, deeper depression, 
              and a dramatically lower quality of life. The burden was undeniable.
            </p>
            
            <p>
              After graduating, I dove deeper into research, surrounded by more patients and their 
              families. It became clear that sickle-cell disease wasn't just a chronic condition—it 
              was an emergency of awareness. That urgency sparked the idea for an organization that 
              could change the narrative.
            </p>
            
            <p>
              I also carry a personal piece of this story: my own parents are both AS carriers, unaware 
              of the risk until they gave birth to me and afterward they decided to stop having children. 
              Their experience reinforced the need for education, early screening, and support.
            </p>
            
            <p>
              From that realization, Break Sickle Cycle was launched with just five committed friends. 
              Today, we have grown into a dynamic movement of over 100 trained volunteers, medical professionals, 
              regional coordinators, and international ambassadors across multiple countries—united to sweep away 
              ignorance, support those affected, and break the cycle once and for all.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="about-image">
          <img src={aboutImage} alt="Break Sickle Cycle Team" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;