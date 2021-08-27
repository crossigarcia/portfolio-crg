import React, {useState} from 'react';
import './Project.css'

function Project() {
   const [projects] = useState([
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
     <div className="row justify-content-center">
       {projects.map((project, i) => (
         <div className="col-sm-12 col-md-6 col-lg-5 project-tile">
           <img
             src={require(`../../assets/imgs/${project.imgName}`).default}
             alt={project.name}
             key={i}
             className="project-image"
           />
           <div className="overlay container-fluid">
              <div className="overlay-info row">
                 <h3 className="col-12">{project.name}</h3>
                 <p>view app: <br></br><a href={project.url} target="_blank" rel="noreferrer" className="col-12">{project.url}</a> </p>
                 <br></br>
                 <p>questions: <a href={project.github} target="_blank" rel="noreferrer" className="col-12">github</a></p>
              </div>
           </div>
         </div>
       ))}
     </div>
   );
}

export default Project;