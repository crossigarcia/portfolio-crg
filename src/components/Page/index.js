import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import { Container, Row, Col } from 'react-bootstrap';
import './Page.css';

function Page(props) {
   const {currentPage} = props;
   const renderPage = () => {
      switch(currentPage.name) {
         case 'about':
            return <About />
         case 'contact':
            return <Contact />
         case 'resume':
            return <Resume />
         case 'portfolio':
            return <Portfolio />
         default:
            return <About />
      }
   };
   return (
     <Container>
       <Row>
         <Col xs={12} md={{span: 6, offset: 3}}>
           <h2>{currentPage.name}</h2>
         </Col>
       </Row>
       <Row> 
          <PageContent>{renderPage()}</PageContent>
       </Row>
     </Container>
   );
}

export default Page;