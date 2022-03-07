import React from "react";
 import { Formik, Form, Field, ErrorMessage } from 'formik';


function ContactForm() {
  return (
     <Formik
       initialValues={{ name: '', email: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = "Introduce yourself!";
         }
         if (!values.email) {
           errors.email = "I'll need this to reply to you";
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = "I don't think that's a valid email address";
         }
         if (!values.message) {
           errors.message = "What can I do for you?";
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >

       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="name" placeholder="Name"/>
           <div className="errorPlaceholder"><ErrorMessage name="name" htmlFor="name" component="label" /></div>
           <Field type="email" name="email" placeholder="Email"/>
           <div className="errorPlaceholder"><ErrorMessage name="email" htmlFor="email" component="label" /></div>
           <Field as="textarea" type="text" name="message" placeholder="Message" />
           <div className="errorPlaceholder"><ErrorMessage name="message" htmlFor="message" component="label" /></div>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           <div className="messageContainer"></div>
         </Form>
       )}

     </Formik>
  );
}


function Contact() {
  return (
    <main id="contact">
      <h1>Get in touch</h1>
      <ContactForm />
    </main>
  )
}

export default Contact;
