import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import Portfolio from '../Portfolio';

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
     <div className="container">
       <div className="row">
         <h2 className="col-2">{currentPage.name}</h2>
       </div>
       <section>
         <PageContent>{renderPage()}</PageContent>
       </section>
     </div>
   );
}

export default Page;