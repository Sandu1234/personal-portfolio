import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/sandamini-nayanathara/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Sandu1234"><img src={navIcon4} alt="" style={{ width: '18px', height: '18px' }} /></a>
                <a href="https://www.instagram.com/hercodejourney99/?hl=en"><img src={navIcon3} alt="" /></a>
            </div>
            {/* <p>Copyright 2022. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
