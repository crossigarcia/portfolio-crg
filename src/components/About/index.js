import React from 'react';
import self from '../../assets/imgs/cecilia.jpg';
import { Row, Col } from 'react-bootstrap';
import './About.css'

function About() {
   return (
     <Row>
       <Col xs={{ span: 10, offset: 1 }} md={{ span: 3, offset: 0 }}>
         <img src={self} alt="portrait of me" className="portrait"></img>
       </Col>
       <Col xs={{ span: 10, offset: 1 }} md={{ span: 7, offset: 1 }}>
         <p className="about-text">
           Former photographer and store manager turned web developer. Acute
           sense of responsibility, organized, and attentive to detail.
           Extensive experience with group work and adapting to different
           leadership.
         </p>
       </Col>
     </Row>
   );
}

export default About;