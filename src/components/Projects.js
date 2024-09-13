import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';

export const Projects = () => {
  const [activeKey, setActiveKey] = useState('software');

  // Define projects for each section
  const softwareProjects = [
    {
      date: "2023 Dec - 2024 Jun",
      title: "Breast cancer classification Localization and subtype identification",
      description: "Design & Development",
      fullDescription: "A comprehensive project focusing on breast cancer classification using deep learning techniques. This project involved the development of an AI model that accurately classifies cancer subtypes based on medical imaging.",
      imgUrl: "/path/to/image1.jpg", // Replace with actual image paths
      videoUrl: "https://www.youtube.com/embed/example-video", // Optional video link
    },
    {
      date: "2023 Dec - 2024 Mar",
      title: "Applova Merchant-Web Development",
      description: "Design & Development",
      fullDescription: "Developed a comprehensive web solution for merchants, integrating various payment gateways and inventory management systems.",
      imgUrl: "/path/to/image2.jpg",
    },
    {
      date: "2023 Dec - 2024 May",
      title: "Applova Analytics Development",
      description: "Design & Development",
      fullDescription: "Created a detailed analytics platform providing insights on customer behavior and sales trends.",
      imgUrl: "/path/to/image3.jpg",
    },
  ];

  const uiuxProjects = [
    {
      date: "2023 Dec - 2024 Jul",
      title: "Galactic Voyage: A Stellar Web Experience",
      description: "Design & Development",
      fullDescription: "Designed a visually stunning web experience inspired by the cosmos, incorporating smooth animations and interactive elements.",
      imgUrl: "/path/to/image4.jpg",
    },
    {
      date: "2023 Dec - 2024 Feb",
      title: "Empowering Education: A Digital Platform for Lifelong Learning",
      description: "Design & Development",
      fullDescription: "Built a digital platform aimed at enhancing lifelong learning with user-friendly interfaces and rich content.",
      imgUrl: "/path/to/image5.jpg",
    },
    {
      date: "2023 Dec - 2024 Apr",
      title: "Seamless Shopping Experience",
      description: "Design & Development",
      fullDescription: "A seamless shopping platform designed to provide a hassle-free user experience, with features like personalized recommendations and smooth checkout processes.",
      imgUrl: "/path/to/image6.jpg",
    },
  ];

  const mobileProjects = [
    {
      date: "2024",
      title: "Random Number Generator",
      description: "Design & Development",
      fullDescription: "Designed a visually stunning web experience inspired by the cosmos, incorporating smooth animations and interactive elements.",
      imgUrl: "/path/to/image4.jpg",
    },
    {
      date: "2024",
      title: "New Quotes App",
      description: "Design & Development",
      fullDescription: "Built a digital platform aimed at enhancing lifelong learning with user-friendly interfaces and rich content.",
      imgUrl: "/path/to/image5.jpg",
    },
    {
      date: "2024",
      title: "Random Name, User Name, Password Generator",
      description: "Design & Development",
      fullDescription: "A seamless shopping platform designed to provide a hassle-free user experience, with features like personalized recommendations and smooth checkout processes.",
      imgUrl: "/path/to/image6.jpg",
    },
    {
      date: "2024",
      title: "Flashcard App",
      description: "Design & Development",
      fullDescription: "Designed a visually stunning web experience inspired by the cosmos, incorporating smooth animations and interactive elements.",
      imgUrl: "/path/to/image4.jpg",
    },
    {
      date: "2024",
      title: "Expenses Managing App",
      description: "Design & Development",
      fullDescription: "Built a digital platform aimed at enhancing lifelong learning with user-friendly interfaces and rich content.",
      imgUrl: "/path/to/image5.jpg",
    },
    {
      date: "2024",
      title: "Corrency Conversion App",
      description: "Design & Development",
      fullDescription: "A seamless shopping platform designed to provide a hassle-free user experience, with features like personalized recommendations and smooth checkout processes.",
      imgUrl: "/path/to/image6.jpg",
    },
    {
      date: "2024",
      title: "Digital Clock App",
      description: "Design & Development",
      fullDescription: "A seamless shopping platform designed to provide a hassle-free user experience, with features like personalized recommendations and smooth checkout processes.",
      imgUrl: "/path/to/image6.jpg",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Below is a selection of projects showcasing my expertise in design and development, blending innovation and execution with a professional touch.
                  </p>
                  <Tab.Container
                    id="projects-tabs"
                    activeKey={activeKey}
                    onSelect={(k) => setActiveKey(k)}
                  >
                    <Nav variant="pills" className="justify-content-center mb-4">
                      <Nav.Item>
                        <Nav.Link eventKey="software" className="mx-1">
                          Software Development
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="uiux" className="mx-1">
                          UI/UX Designing
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="mobile" className="mx-1">
                          Mobile App Development
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    
                    <Tab.Content>
                      <Tab.Pane eventKey="software">
                        <ul className="project-list">
                          {softwareProjects.map((project, index) => (
                            <li
                              key={index}
                              className="project-item"
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="project-content">
                                <span className="project-date">{project.date}</span>
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-description">
                                  {project.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="uiux">
                        <ul className="project-list">
                          {uiuxProjects.map((project, index) => (
                            <li
                              key={index}
                              className="project-item"
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="project-content">
                                <span className="project-date">{project.date}</span>
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-description">
                                  {project.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="mobile">
                        <ul className="project-list">
                          {mobileProjects.map((project, index) => (
                            <li
                              key={index}
                              className="project-item"
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="project-content">
                                <span className="project-date">{project.date}</span>
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-description">
                                  {project.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
