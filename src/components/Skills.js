import meter1 from "../assets/img/java.png";
import meter2 from "../assets/img/html.png";
import meter3 from "../assets/img/flutter.png";
import meter4 from "../assets/img/react-native.png";
import meter5 from "../assets/img/python.png";
import meter6 from "../assets/img/c.png";
import meter7 from "../assets/img/spring-boot.png";
import meter8 from "../assets/img/nodejs.png";
import meter9 from "../assets/img/github.png";
import meter10 from "../assets/img/illustrator.png";
import meter11 from "../assets/img/photoshop.png";
import meter12 from "../assets/img/figma.png";
import meter13 from "../assets/img/mongodb.png";
import meter14 from "../assets/img/postgresql.png";
import meter15 from "../assets/img/javascript.png";
import meter16 from "../assets/img/bootstrap.png";



import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          <p>As a software developer and UI/UX designer, I specialize in creating user-focused solutions by elegantly solving complex problems, blending practicality with visual appeal to deliver engaging digital experiences.</p>
                          <div className="skills-grid">
                              <div className="skill-item"><img src={meter1} alt="Java" /><h5>Java</h5></div>
                              <div className="skill-item"><img src={meter2} alt="HTML5" /><h5>HTML5</h5></div>
                              <div className="skill-item"><img src={meter3} alt="Flutter" /><h5>Flutter</h5></div>
                              <div className="skill-item"><img src={meter4} alt="React-Native" /><h5>React-Native</h5></div>
                              <div className="skill-item"><img src={meter5} alt="Python" /><h5>Python</h5></div>
                              <div className="skill-item"><img src={meter6} alt="C Programming" /><h5>C Programming</h5></div>
                              <div className="skill-item"><img src={meter7} alt="SpringBoot" /><h5>SpringBoot</h5></div>
                              <div className="skill-item"><img src={meter8} alt="NodeJS" /><h5>NodeJS</h5></div>
                              <div className="skill-item"><img src={meter9} alt="GitHub" /><h5>GitHub</h5></div>
                              <div className="skill-item"><img src={meter10} alt="Adobe Illustrator" /><h5>Adobe Illustrator</h5></div>
                              <div className="skill-item"><img src={meter11} alt="Adobe Photoshop" /><h5>Adobe Photoshop</h5></div>
                              <div className="skill-item"><img src={meter12} alt="Figma" /><h5>Figma</h5></div>
                              <div className="skill-item"><img src={meter13} alt="MongoDB" /><h5>MongoDB</h5></div>
                              <div className="skill-item"><img src={meter14} alt="PostgreSQL" /><h5>PostgreSQL</h5></div>
                              <div className="skill-item"><img src={meter15} alt="PostgreSQL" /><h5>JavaScript</h5></div>
                              <div className="skill-item"><img src={meter16} alt="PostgreSQL" /><h5>Bootstrap</h5></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }