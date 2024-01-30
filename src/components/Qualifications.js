// Qualifications.js
import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";


export const Qualifications = () => {
  const [activeKey, setActiveKey] = useState('education');  // Add your qualifications content here
  return (
    <section className="qualifications" id="qualifications">
                     <div className="qualification-bx">
            <h2>Qualifications</h2>
      <Container>
      <Tab.Container id="qualifications-tabs" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Row>
            <Col xs={12}>
              <Nav variant="pills" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="education" className="mx-1">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="work" className="mx-1">Work</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Tab.Content>
              <Tab.Pane eventKey="education">
  <div className="timeline-container">
    <div className="timeline-block">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>BSc.(Hons.) in Information Technology & Management</h3>
        <p>University of Moratuwa | 2020 - Present</p>
        <p>Current GPA - 3.40 / 4.2</p>
      </div>
    </div>
    <div className="timeline-block">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Professional Certificate In Marketing</h3>
        <p>Sri Lanka Institute of Marketing | 2019</p>
      </div>
    </div>
    <div className="timeline-block">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>G.C.E. Advanced Level Examination</h3>
        <p>B/ Vihara Maha Devi Girl's School | 2018</p>
        <p>3 A’s for IT, Economics & Logic</p>
      </div>
    </div>
  </div>
</Tab.Pane>
<Tab.Pane eventKey="work">
  <div className="timeline-container">
    <div className="timeline-block">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>Trainee Software Engineer</h4>
        <h3>hSenid Mobile Solutions (Pvt) Ltd. | Dec 2022 - Jun 2023</h3>
        <p>Actively contributed to the development of the Admin and Merchant web units at Applova Inc., a US-based company operating under hSenid Mobile Solutions. Focusing on enhancing user experience and functionality. My role involved deep involvement in the full software development lifecycle, from requirement analysis to deployment and maintenance, with a keen focus on delivering user-centric solutions.</p>
        
        <p><strong>Technologies used:</strong> Java, Spring MVC, PostgreSQL, MongoDB, GIT, JSP</p>
      </div>
    </div>
    {/* Add more timeline blocks here for other experiences */}
  </div>
</Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      </div>
    </section>
  );
};
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
