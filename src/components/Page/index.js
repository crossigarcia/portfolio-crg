import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';

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
         case 'project':
            return <Project />
         default:
            return <About />
      }
   };
   return (
      <div>
         <h2>{currentPage.name}</h2>
         <PageContent>{renderPage()}</PageContent>
      </div>
   )
}

export default Page;