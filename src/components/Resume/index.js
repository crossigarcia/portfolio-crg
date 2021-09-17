import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  ListGroup  from 'react-bootstrap/ListGroup';
import './Resume.css';

function Resume() {
   return (
     <Container>
       <Row>
         <Col xs={12} md={6}>
           <h5>Front-End Skills:</h5>
           <ListGroup variant="flush">
             <ListGroup.Item>HTML</ListGroup.Item>
             <ListGroup.Item>CSS</ListGroup.Item>
             <ListGroup.Item>React</ListGroup.Item>
             <ListGroup.Item>JavaScript</ListGroup.Item>
           </ListGroup>
         </Col>
         <Col xs={12} md={6}>
           <h5>Back-End Skills:</h5>
           <ListGroup variant="flush">
             <ListGroup.Item>Node</ListGroup.Item>
             <ListGroup.Item>Express</ListGroup.Item>
             <ListGroup.Item>MySQL, Sequelize</ListGroup.Item>
             <ListGroup.Item>MongoDB, Mongoose</ListGroup.Item>
           </ListGroup>
         </Col>
       </Row>
       <Row>
         <Col xs={12} md={{ span: 6, offset: 3 }}>
           <a
             href="https://drive.google.com/file/d/1M6eNjdu3FyS7O5ykK3ODy8LPTtT2hXrv/view?usp=sharing"
             target="_blank"
             rel="noreferrer"
           >
             <p className="resume-link">
               <i class="fas fa-file-download fa-md"></i> download
             </p>
           </a>
           {/* <embed
             title={`Cecilia Rossi-Garcia's Resume`}
             src="../../../assets/resume.pdf"
             type="application/pdf"
             width="100%"
             height="600px"
           /> */}
         </Col>
       </Row>
     </Container>
   );
}

export default Resume;