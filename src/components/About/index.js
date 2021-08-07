import React from 'react';
import self from '../../assets/imgs/cecilia.jpg';

function About() {
   return (
     <section className="container">
       <div className="row">
         <div className="col-1">
            <img src={self} alt="" width="300" height="300"></img>
         </div>
         <div className="col-9">
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
           </p>
         </div>
       </div>
     </section>
   );
}

export default About;