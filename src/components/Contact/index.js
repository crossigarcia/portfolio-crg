import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Contact.css';

function Contact() {
   const [formState, setFormState] = useState({
     name: "",
     email: "",
     message: "",
   });
   const { name, email, message } = formState;

   const [errorMessage, setErrorMessage] = useState("");

   function handleChange(e) {
     if (e.target.name === "email") {
       const isValid = validateEmail(e.target.value);
       console.log(isValid);
       if (!isValid) {
         setErrorMessage("Your email is invalid.");
       } else {
         setErrorMessage("");
       }
     } else {
       if (!e.target.value.length) {
         setErrorMessage(`${e.target.name} is required`);
       } else {
         setErrorMessage("");
       }
     }

     if (!errorMessage) {
       setFormState({ ...formState, [e.target.name]: e.target.value });
     }

     console.log("errorMessage:", errorMessage);
   }

   function handleSubmit(e) {
     e.preventDefault();
     console.log(formState);
   }

   return (
     <>
      <Col xs={12} md={{span: 6, offset: 3}}>
        <h4>email: cecilia.rossi.garcia@gmail.com // call: 510-292-9005</h4>
      </Col>
       <Col xs={12} md={{ span: 6, offset: 3 }}>
         <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3">
             <Form.Label htmlFor="name">Name</Form.Label>
             <Form.Control
               type="text"
               placeholder="your name"
               name="name"
               defaultValue={name}
               onBlur={handleChange}
             />
           </Form.Group>

           <Form.Group className="mb-3">
             <Form.Label htmlFor="email">Email address</Form.Label>
             <Form.Control
               type="email"
               placeholder="your email"
               name="email"
               defaultValue={email}
               onBlur={handleChange}
             />
           </Form.Group>

           <Form.Group className="mb-3">
             <Form.Label htmlFor="message">Message</Form.Label>
             <Form.Control
               type="text"
               placeholder="your message"
               name="message"
               defaultValue={message}
               onBlur={handleChange}
             />
           </Form.Group>
           {errorMessage && (
             <div>
               <p className="error-text">{errorMessage}</p>
             </div>
           )}

           <Button type="submit" data-testid="submitBtn">
             Submit
           </Button>
         </Form>
       </Col>
     </>
   );
}

export default Contact;