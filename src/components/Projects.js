// Projects.jsx
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/BREASTGUARD.png";
import projImg2 from "../assets/img/galaxy.png";
import projImg3 from "../assets/img/analytics.png";
import projImg4 from "../assets/img/dribble1.png";
import projImg5 from "../assets/img/Merchantweb-applova.png";
import projImg6 from "../assets/img/dribble3.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Breast cancer classification Localization and subtype identification",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Galactic Voyage: A Stellar Web Experience",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Applova Analytics Development",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Seamless Shopping Experience",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Applova Merchant-Web Development",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Empowering Education: A Digital Platform for Lifelong Learning",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here you will find a curated selection of projects that showcase my expertise in design and development, each a reflection of my dedication to marrying form with function and innovation with execution.</p>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
