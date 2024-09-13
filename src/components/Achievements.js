// Achievements.jsx
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Achievements = () => {
  const certificates = [
    {
      title: "Certified of Completion of Learning angular",
      description: "Awarded by Linkedin Learning | 2024",
      issuer: "Linkedin Learning",
      date: "2024",
      pdfUrl: "https://drive.google.com/file/d/1JHRO23_SpmLgC785kLz1W7O_K-Cqlv6z/view?usp=drive_link", // Replace with the actual path to your PDF
    },
    {
      title: "Certification Of Completion What Is Generative AI",
      description: "Completion of  What Is Generative AI | 2024",
      issuer: "Linkedin Learning",
      date: "2024",
      pdfUrl: "https://drive.google.com/file/d/1fTQwKRdKcZ6OEJm3qYcelrZTzV08Q2-u/view?usp=sharing", // Replace with the actual path to your PDF
    },
    {
      title: "Certified in Core JAVA Design Patterns",
      description: "Completed Core JAVA Design Patterns course.",
      issuer: "Coursera | 2024",
      date: "2024",
      pdfUrl: "https://drive.google.com/file/d/1YTlDDe28q9lw_WTkgW-sOgu6LzPFRvJ4/view?usp=sharing", // Replace with the actual path to your PDF
    },
    {
        title: "Certification Of Completion What Is Generative AI",
        description: "Completion of  What Is Generative AI | 2024",
        issuer: "Linkedin Learning",
        date: "2024",
        pdfUrl: "https://drive.google.com/file/d/1ABLHDURhdIuNhTwuSmsqNWFtpR72esas/view?usp=sharing", // Replace with the actual path to your PDF
      },
    {
        title: "Certified in C Programming Language",
        description: "Awarded by Sololearn | 2021",
        issuer: "Sololearn",
        date: "2021",
        pdfUrl: "https://drive.google.com/file/d/1MAz9Qjg9ccqYS-gu05Kd15aCaRzX__a0/view?usp=sharing", // Replace with the actual path to your PDF
      },
      {
        title: "Certified in HTML Programming Language",
        description: "Awarded by Sololearn | 2021",
        issuer: "Sololearn",
        date: "2021",
        pdfUrl: "https://drive.google.com/file/d/1wYemYoEFYBB8JEjEZ8fPjS9yChA-fojx/view?usp=sharing", // Replace with the actual path to your PDF
      },
      {
        title: "Certified in CSS Programming Language",
        description: "Awarded by Sololearn | 2021",
        issuer: "Sololearn",
        date: "2021",
        pdfUrl: "https://drive.google.com/file/d/1fsx5W_pm-lETbIxHk-IRT7AHAEamu0Nz/view?usp=sharing", // Replace with the actual path to your PDF
      },
      {
        title: "Certified in JavaScript Programming Language",
        description: "Awarded by Sololearn | 2021",
        issuer: "Sololearn",
        date: "2021",
        pdfUrl: "https://drive.google.com/file/d/1grwl7jTtAHS6MSs-xGFFWuGpV8lLJO13/view?usp=sharing", // Replace with the actual path to your PDF
      },
      {
        title: "Certified in PHP Programming Language",
        description: "Awarded by Sololearn | 2021",
        issuer: "Sololearn",
        date: "2021",
        pdfUrl: "https://drive.google.com/file/d/1quAM7EwWZNY-ViiucGUutnSB0l_UjZBe/view?usp=sharing.pdf", // Replace with the actual path to your PDF
      },
      {
        title: "Certified in SQL Programming Language",
        description: "Awarded by Sololearn | 2021",
        issuer: "Sololearn",
        date: "2021",
        pdfUrl: "https://drive.google.com/file/d/1x0HA2EleelyTskMtm91F3hgLVYSH0c1M/view?usp=sharing", // Replace with the actual path to your PDF
      },
      {
        title: "Certified in Responsive Wen Design",
        description: "Awarded by Sololearn | 2021",
        issuer: "Sololearn",
        date: "2021",
        pdfUrl: "https://drive.google.com/file/d/1fB9qYW519p_GQ6y743ITL7siyZaMnw2g/view?usp=sharing", // Replace with the actual path to your PDF
      },
  ];

  return (
    <section className="achievements" id="achievements">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Achievements & Certificates</h2>
                  <p>
                    Below are some of the certificates and achievements that highlight my skills and professional growth.
                  </p>
                  <ul className="certificate-list">
                    {certificates.map((certificate, index) => (
                      <li
                        key={index}
                        className="certificate-item"
                        onClick={() => window.open(certificate.pdfUrl, '_blank')} // Open the PDF in a new tab
                        style={{ cursor: 'pointer' }} // Change cursor to pointer
                      >
                        <div className="certificate-content">
                          <h4 className="certificate-title">{certificate.title}</h4>
                          <p className="certificate-description">{certificate.description}</p>
                          <span className="certificate-issuer">Issued by: {certificate.issuer}</span>
                          <span className="certificate-date">{certificate.date}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
