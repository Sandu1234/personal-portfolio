import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from './BlogCard'; // Make sure BlogCard is in the correct relative path
import yourImagePath1 from '../assets/img/blog1_resized.png';
import yourImagePath2 from '../assets/img/blog2.png';
import yourImagePath3 from '../assets/img/blog3.png';


export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   if (status === 'success') clearFields();
  // }, [status])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   email &&
  //   email.indexOf("@") > -1 &&
  //   onValidated({
  //     EMAIL: email
  //   })
  // }

  // const clearFields = () => {
  //   setEmail('');
  // }


return (
  <section className="blogs" id="blogs">
    <div className="blog-bx">
      <Container>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px'}}>My Latest Blogs</h2>
        <Row className="justify-content-md-center">
          <Col lg={4} md={6} style={{ marginBottom: '20px', paddingLeft: '100px', paddingRight: '15px', paddingTop:'20px' }}>
            <BlogCard
              imagePath={yourImagePath1}
              title="Real-World Applications of Machine Learning"
              excerpt="Introduction Machine Learning (ML) has emerged as a transformative technology, influencing numerous sectors with its ability to learn from..."
              readMoreUrl="https://medium.com/@sandunayanathara99/real-world-applications-of-machine-learning-transforming-healthcare-finance-and-automotive-ee87340b36e8"            />
          </Col>
          <Col lg={4} md={6} style={{ marginBottom: '20px', paddingLeft: '60px', paddingRight: '15px', paddingTop:'20px'}}>
            <BlogCard
              imagePath={yourImagePath2}
              title="Navigating the Agile Seas"
              excerpt="Embracing Change in the Tech World In the fast-paced realm of Information Technology, traditional project management methods often fall short. That’s where Agile,..."
              readMoreUrl="https://medium.com/@sandunayanathara99/navigating-the-agile-seas-advanced-it-project-management-techniques-2075f5cdc404"
                        />
          </Col>
          <Col lg={4} md={6} style={{ marginBottom: '20px', paddingLeft: '15px', paddingRight: '15px', paddingTop:'20px' }}>
            <BlogCard
              imagePath={yourImagePath3}
              title="Design Patterns"
              excerpt="In the realm of Object-Oriented Programming (OOP) with Java, design patterns play a crucial role. These patterns are proven solutions to common problems in software design..."
              readMoreUrl="https://medium.com/@sandunayanathara99/design-patterns-elevating-your-oop-skills-2f592cff5381"            />
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);
};
