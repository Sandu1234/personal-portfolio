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
      githubLink: "https://github.com/yourusername/breast-cancer-classification", // Add GitHub link

    },
    {
      date: "2023 Dec - 2024 Mar",
      title: "Applova Merchant-Web Development",
      description: "Design & Development",
      fullDescription: "Developed a comprehensive web solution for merchants, integrating various payment gateways and inventory management systems.",
      imgUrl: "/path/to/image2.jpg",
      githubLink: "https://github.com/yourusername/breast-cancer-classification", // Add GitHub link

    },
    {
      date: "2023 Dec - 2024 May",
      title: "Applova Analytics Development",
      description: "Design & Development",
      fullDescription: "Created a detailed analytics platform providing insights on customer behavior and sales trends.",
      imgUrl: "/path/to/image3.jpg",
      githubLink: "https://github.com/yourusername/breast-cancer-classification", // Add GitHub link
    },
    {
      date: "2024 Sep - 2024 Oct",
      title: "Thought Nexus - Personal Blog Page ",
      description: "Design & Development",
      fullDescription: "A thoughtfully designed and developed personal blog website that offers a clean and engaging platform for sharing articles and insights on various topics.",
      imgUrl: "/path/to/image3.jpg",
      githubLink: "https://github.com/Sandu1234/Blog", // Add GitHub link

    },
    {
      date: "2024 Sep - 2024 Oct",
      title: "quick-bill - Invoice Generator ",
      description: "Design & Development",
      fullDescription: "This tool helps small business owners, freelancers, and entrepreneurs create professional invoices quickly and easily. Customize your invoices with your logo, select your preferred currency, and generate beautiful, print-ready PDFs in minutes..",
      imgUrl: "/path/to/image3.jpg",
      githubLink: "https://github.com/Sandu1234/quick-bill", // Add GitHub link

    },
  ];

  const uiuxProjects = [
    {
      date: "2023 Dec - 2024 Jul",
      title: "Galactic Voyage: A Stellar Web Experience",
      description: "Design & Development",
      fullDescription: "Designed a visually stunning web experience inspired by the cosmos, incorporating smooth animations and interactive elements.",
      imgUrl: "/path/to/image4.jpg",
      dribbbleLink: "https://dribbble.com/shots/23460246-Galactic-Voyage-A-Stellar-Web-Experience?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Galactic%20Voyage%3A%20A%20Stellar%20Web%20Experience&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Galactic%20Voyage%3A%20A%20Stellar%20Web%20Experience&utm_medium=Social_Share", // Add Dribbble link

    },
    {
      date: "2023 Dec - 2024 Feb",
      title: "Empowering Education: A Digital Platform for Lifelong Learning",
      description: "Design & Development",
      fullDescription: "Built a digital platform aimed at enhancing lifelong learning with user-friendly interfaces and rich content.",
      imgUrl: "/path/to/image5.jpg",
      dribbbleLink: "https://dribbble.com/shots/23458839-Empowering-Education-A-Digital-Platform-for-Lifelong-Learning?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Empowering%20Education%3A%20A%20Digital%20Platform%20for%20Lifelong%20Learning&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Empowering%20Education%3A%20A%20Digital%20Platform%20for%20Lifelong%20Learning&utm_medium=Social_Share", // Add Dribbble link

    },
    {
      date: "2023 Dec - 2024 Apr",
      title: "Seamless Shopping Experience",
      description: "Design & Development",
      fullDescription: "A seamless shopping platform designed to provide a hassle-free user experience, with features like personalized recommendations and smooth checkout processes.",
      imgUrl: "/path/to/image6.jpg",
      dribbbleLink: "https://dribbble.com/shots/23459084-Seamless-Shopping-Experience?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Seamless%20Shopping%20Experience&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Seamless%20Shopping%20Experience&utm_medium=Social_Share", // Add Dribbble link

    },
    {
      date: "2023 Aug - 2023 Nov",
      title: "Camping Application ",
      description: "Design & Development",
      fullDescription: "",
      imgUrl: "/path/to/image6.jpg",
      dribbbleLink: "https://dribbble.com/shots/16608066-Camping-App-Design?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Camping%20App%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Camping%20App%20Design&utm_medium=Social_Share", // Add Dribbble link

    },
    {
      date: "2023 Aug - 2023 Nov",
      title: "Interior Flair",
      description: "Design & Development",
      fullDescription: "A modern and visually engaging UI design for an interior design platform, showcasing elegant layouts and intuitive navigation for a seamless user experience in exploring design ideas and inspiration.",
      imgUrl: "/path/to/image6.jpg",
      dribbbleLink: "https://dribbble.com/shots/16575210-Interior-Flair?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Interior%20Flair&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Interior%20Flair&utm_medium=Social_Share", // Add Dribbble link
    },
    {
      date: "2023 Apr - 2023 May",
      title: "Music app",
      description: "Design & Development",
      fullDescription: "Crafted an immersive and vibrant UI design for a music streaming app, focusing on smooth navigation, personalized recommendations, and an appealing interface that elevates the music discovery journey.",
      imgUrl: "/path/to/image6.jpg",
      dribbbleLink: "https://dribbble.com/shots/16575240-Music-app?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Music%20app&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Music%20app&utm_medium=Social_Share", // Add Dribbble link
    },
    {
      date: "2023 Jan - 2023 Feb",
      title: "Food Ordering App",
      description: "Design & Development",
      fullDescription: "Designed a user-friendly and visually appetizing UI for a food ordering app, featuring easy browsing, convenient customization options, and a streamlined checkout process for an enjoyable dining experience.",
      imgUrl: "/path/to/image6.jpg",
      dribbbleLink: "https://dribbble.com/shots/18003882-Food-Ordering-App?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Food%20Ordering%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Food%20Ordering%20App&utm_medium=Social_Share", // Add Dribbble link
    },
    {
      date: "2022 Nov - 2022 Dec",
      title: "E-commerce app design",
      description: "Design & Development",
      fullDescription: "Developed a clean and intuitive e-commerce UI, with an emphasis on product discovery, detailed item pages, and an effortless purchasing flow to enhance the online shopping experience.",
      imgUrl: "/path/to/image6.jpg",
      dribbbleLink: "https://dribbble.com/shots/16614853-E-commerce-app-design?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=E-commerce%20app%20design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=E-commerce%20app%20design&utm_medium=Social_Share", // Add Dribbble link
    },
    {
      date: "2022 Aug - 2022 Sep",
      title: "Landing page for coffee shop",
      description: "Design & Development",
      fullDescription: "Created an inviting landing page design for a coffee shop, featuring rich visuals, engaging storytelling, and an emphasis on key offerings to capture the essence of the brand and draw in potential customers.",
      imgUrl: "/path/to/image6.jpg",
      dribbbleLink: "https://dribbble.com/shots/16614791-Landing-page-for-coffee-shop?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Landing%20page%20for%20coffee%20shop&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Landing%20page%20for%20coffee%20shop&utm_medium=Social_Share", // Add Dribbble link
    },
    {
      date: "2023 Aug - 2023 Sep",
      title: "Game On: Tracking Sports Scores with a Mobile App Interface",
      description: "Design & Development",
      fullDescription: "Designed a dynamic mobile interface for tracking sports scores, focusing on real-time updates, team stats, and a visually appealing layout that keeps users connected to the action at all times.",
      imgUrl: "/path/to/image6.jpg",
      dribbbleLink: "https://dribbble.com/shots/23459354-Game-On-Tracking-Sports-Scores-with-a-Mobile-App-Interface?utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Game%20On%3A%20Tracking%20Sports%20Scores%20with%20a%20Mobile%20App%20Interface&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nayanathara&utm_content=Game%20On%3A%20Tracking%20Sports%20Scores%20with%20a%20Mobile%20App%20Interface&utm_medium=Social_Share", // Add Dribbble link
    },
  ];

  const mobileProjects = [
    {
      date: "2024",
      title: "Random Number Generator",
      description: "Design & Development",
      fullDescription: "Designed a visually stunning web experience inspired by the cosmos, incorporating smooth animations and interactive elements.",
      imgUrl: "/path/to/image4.jpg",
      githubLink: "https://github.com/Sandu1234/random_number_generator_app", // Add GitHub link

    },
    {
      date: "2024",
      title: "New Quotes App",
      description: "Design & Development",
      fullDescription: "Built a digital platform aimed at enhancing lifelong learning with user-friendly interfaces and rich content.",
      imgUrl: "/path/to/image5.jpg",
      githubLink: "https://github.com/Sandu1234/quote_of_the_day_app", // Add GitHub link

    },
    {
      date: "2024",
      title: "Random Name, User Name, Password Generator",
      description: "Design & Development",
      fullDescription: "A seamless shopping platform designed to provide a hassle-free user experience, with features like personalized recommendations and smooth checkout processes.",
      imgUrl: "/path/to/image6.jpg",
      githubLink: "https://github.com/Sandu1234/name_generator_app-", // Add GitHub link

    },
    {
      date: "2024",
      title: "Flashcard App",
      description: "Design & Development",
      fullDescription: "Designed a visually stunning web experience inspired by the cosmos, incorporating smooth animations and interactive elements.",
      imgUrl: "/path/to/image4.jpg",
      githubLink: "https://github.com/Sandu1234/flashcards_app-", // Add GitHub link

    },
    {
      date: "2024",
      title: "Expenses Managing App",
      description: "Design & Development",
      fullDescription: "Built a digital platform aimed at enhancing lifelong learning with user-friendly interfaces and rich content.",
      imgUrl: "/path/to/image5.jpg",
      githubLink: "https://github.com/Sandu1234/expense_tracker_app", // Add GitHub link

    },
    {
      date: "2024",
      title: "Corrency Conversion App",
      description: "Design & Development",
      fullDescription: "A seamless shopping platform designed to provide a hassle-free user experience, with features like personalized recommendations and smooth checkout processes.",
      imgUrl: "/path/to/image6.jpg",
      githubLink: "https://github.com/Sandu1234/currency_converter_app", // Add GitHub link

    },
    {
      date: "2024",
      title: "Digital Clock App",
      description: "Design & Development",
      fullDescription: "A seamless shopping platform designed to provide a hassle-free user experience, with features like personalized recommendations and smooth checkout processes.",
      imgUrl: "/path/to/image6.jpg",
      githubLink: "https://github.com/Sandu1234/digital_clock_app", // Add GitHub link

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
                      {/* Software Development Section */}
                      <Tab.Pane eventKey="software">
                        <ul className="project-list">
                          {softwareProjects.map((project, index) => (
                            <li key={index} className="project-item" style={{ cursor: 'pointer' }}>
                              <div className="project-content">
                                <span className="project-date">{project.date}</span>
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-description">{project.description}</p>
                                <div className="project-links">
                                  {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                      <button className="btn btn-primary">GitHub</button>
                                    </a>
                                  )}
                                  {project.dribbbleLink && (
                                    <a href={project.dribbbleLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                      <button className="btn btn-secondary">Dribbble</button>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Tab.Pane>

                      {/* UI/UX Designing Section */}
                      <Tab.Pane eventKey="uiux">
                        <ul className="project-list">
                          {uiuxProjects.map((project, index) => (
                            <li key={index} className="project-item" style={{ cursor: 'pointer' }}>
                              <div className="project-content">
                                <span className="project-date">{project.date}</span>
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-description">{project.description}</p>
                                <div className="project-links">
                                  {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                      <button className="btn btn-primary">GitHub</button>
                                    </a>
                                  )}
                                  {project.dribbbleLink && (
                                    <a href={project.dribbbleLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                      <button className="btn btn-secondary">Dribbble</button>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Tab.Pane>

                      {/* Mobile App Development Section */}
                      <Tab.Pane eventKey="mobile">
                        <ul className="project-list">
                          {mobileProjects.map((project, index) => (
                            <li key={index} className="project-item" style={{ cursor: 'pointer' }}>
                              <div className="project-content">
                                <span className="project-date">{project.date}</span>
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-description">{project.description}</p>
                                <div className="project-links">
                                  {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                      <button className="btn btn-primary">GitHub</button>
                                    </a>
                                  )}
                                  {project.dribbbleLink && (
                                    <a href={project.dribbbleLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                      <button className="btn btn-secondary">Dribbble</button>
                                    </a>
                                  )}
                                </div>
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
