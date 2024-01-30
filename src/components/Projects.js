import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/BREASTGUARD.png";
import projImg2 from "../assets/img/galaxy.png";
import projImg3 from "../assets/img/analytics.png";
import projImg4 from "../assets/img/dribble1.png";
import projImg5 from "../assets/img/Merchantweb-applova.png";
import projImg6 from "../assets/img/dribble3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Breast Cancer Classification with Localization and Subtype Identification",
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
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

{/* 
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                   
                       </Tab.Pane>


                    <Tab.Pane eventKey="third">
<Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                      </Tab.Pane>
 */}

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
