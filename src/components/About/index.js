import React from 'react';
import self from '../../assets/imgs/cecilia.jpg';
import { Row, Col } from 'react-bootstrap';
import './About.css'

function About() {
   return (
     <Row>
       <Col xs={{ span: 10, offset: 1 }} md={{span: 3, offset: 0}}>
         <img src={self} alt="portrait of me" className="portrait"></img>
       </Col>
       <Col xs={{ span: 10, offset: 1 }} md={{span: 7, offset: 1}}>
         <p className="about-text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
         </p>
       </Col>
     </Row>
   );
}

export default About;