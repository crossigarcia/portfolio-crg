import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './Project.css'

function Project() {
   const [projects] = useState([
     {
       name: "The Kara-OK Corral",
       imgName: "karaok.gif",
       url: "http://the-kara-ok-corral.herokuapp.com/",
       github: "https://github.com/costanza13/kara-ok-corral",
     },
     {
       name: "The Goodvice Blog",
       imgName: "goodvice.gif",
       url: "https://the-goodvice-blog.herokuapp.com/",
       github: "https://github.com/crossigarcia/the-goodvice-blog",
     },
     {
       name: "What's for Dinner?",
       imgName: "dinner.gif",
       url: "https://nicopetelo.github.io/whats-for-dinner/",
       github: "https://github.com/nicopetelo/whats-for-dinner",
     },
     {
       name: "Taskinator",
       imgName: "taskinator.gif",
       url: "https://crossigarcia.github.io/taskinator/",
       github: "https://github.com/crossigarcia/taskinator",
     },
   ]);

   return (
     <Container>
       <Row>
         {projects.map((project, i) => (
           <Col xs={12} md={4}>
             <Card key={i}>
               <Card.Img
                 src={require(`../../assets/imgs/${project.imgName}`).default}
                 alt={project.name}
                 className="project-image"
                 variant="top"
               ></Card.Img>
               <Card.ImgOverlay>
                 <Card.Title>{project.name}</Card.Title>
                 <Card.Text>
                   <a href={project.url} target="_blank" rel="noreferrer">
                     deployed app
                   </a>
                 </Card.Text>
                 <Card.Text>
                   <a href={project.github} target="_blank" rel="noreferrer">
                     github repo
                   </a>
                 </Card.Text>
               </Card.ImgOverlay>
             </Card>
           </Col>
         ))}
       </Row>
     </Container>
   );
}

export default Project;