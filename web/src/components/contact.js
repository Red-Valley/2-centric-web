import React from "react";
import CTALink from "./CTALink";
import '../styles/contact.css';

import "bootstrap/dist/css/bootstrap.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Form } from 'react-bootstrap';
import ReactDOM from 'react-dom'

import { useFormik } from 'formik';
import * as yup from 'yup';

const Contact = (props) => {
  const lang = ['en'];
  console.log("Contact props ",props);

  const StyleBackground = {
    backgroundColor: props.backgroundColor.hex,
  }


  const requiredText = "This field is required";

  const validations = yup.object().shape({
      name: yup.string().required(requiredText),
      email: yup.string().email().required(requiredText),
      typeveh: yup.string().required(requiredText),
      message: yup.string().required(requiredText),
  });


  const formik = useFormik({
      initialValues: {
          name: '',
          email: '',
          typeveh: '',
          message: '',
      },
      validationSchema: validations,
      onSubmit: values => {
          
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

          var urlencoded = new URLSearchParams();
          urlencoded.append("name", document.getElementById("name").value);
          urlencoded.append("email", document.getElementById("email").value);
          urlencoded.append("typeveh", document.getElementById("typeveh").value);
          urlencoded.append("message", document.getElementById("message").value);
          urlencoded.append("to", document.getElementById("to").value);
          urlencoded.append("site", document.getElementById("site").value);

          var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
          };

          fetch("https://l6kg4l50gi.execute-api.us-east-1.amazonaws.com/send-forms", requestOptions)
          .then(response => response.text())
          .then((result) => {
              const rootElement = document.getElementById('output');
              const element = React.createElement(
                  'div',
                  { className: 'alert alert-info' },
                  'Message Sent!'
              );
              formik.resetForm();
              ReactDOM.hydrate(element, rootElement);
          }, (error) => {
              const rootElement = document.getElementById('output');
              const element = React.createElement(
                  'div',
                  { className: 'alert alert-warning' },
                  'Message unsent, please try again'
              );
              ReactDOM.hydrate(element, rootElement);
          })
          .catch(error => console.log('error', error));

          

      },
  });
  
  return (
    <section className="Contactblock" id={props.id} style={StyleBackground}>
      <div class="container">
          <Row>
              <Col md={6}>
                <h2>
                    <span className="partA">{props.titlePartA[lang]}</span><br/>
                    <span className="partB">{props.titlePartB[lang]}</span>
                    <span className="partC">{props.titlePartC[lang]}</span><br/>
                    <span className="partD">{props.titlePartD[lang]}</span>
                </h2>
                <p>{props.pargraph[lang]}</p>
              </Col>
              <Col md={6}>
                  <form className="contact-form" id="myform" onSubmit={formik.handleSubmit}>
                    <Form.Group><Form.Control type="hidden" name="to" id="to"  value="info@2centric.com" /></Form.Group>
                    <Form.Group><Form.Control type="hidden" name="site" id="site"  value="https://www.2centric.com/" /></Form.Group>
                        
                    <Row>
                        <Col md={6}>
                              <Form.Group>
                              <Form.Control type="text"
                                  name="name"
                                  id="name"
                                  className="form-control formfield smallw"
                                  placeholder={props.labelName[lang]}
                                  onChange={formik.handleChange}
                                  value={formik.values.name}
                                  isInvalid={!!formik.errors.name} />

                              <Form.Control.Feedback type="invalid">
                                  {formik.errors.name}
                              </Form.Control.Feedback>

                          </Form.Group>
                        </Col>
                        <Col md={6}>

                           <Form.Group>
                                <Form.Control
                                    type="email"
                                    className="form-control formfield"
                                    placeholder={props.labelEmail[lang]}
                                    name="email"
                                    id="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    isInvalid={!!formik.errors.email && formik.touched.email} />

                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                          <Form.Group>
                                <Form.Control
                                    type="text"
                                    className="form-control formfield"
                                    placeholder={props.labelCompany[lang]}
                                    name="typeveh"
                                    id="typeveh"
                                    onChange={formik.handleChange}
                                    value={formik.values.typeveh}
                                    isInvalid={!!formik.errors.typeveh && formik.touched.typeveh} />

                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.typeveh}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>

                           <Form.Group>
                                <Form.Control
                                    type="text"
                                    className="form-control formfield"
                                    placeholder={props.labelInterest[lang]}
                                    name="typeveh"
                                    id="typeveh"
                                    onChange={formik.handleChange}
                                    value={formik.values.typeveh}
                                    isInvalid={!!formik.errors.typeveh && formik.touched.typeveh} />

                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.typeveh}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                         <Form.Group>
                              <Form.Control
                                  className="form-control formfield textarea"
                                  placeholder={props.labelMessage[lang]}
                                  name="message"
                                  id="message"
                                  onChange={formik.handleChange}
                                  value={formik.values.message}
                                  as="textarea"
                                  isInvalid={!!formik.errors.message && formik.touched.message} />

                              <Form.Control.Feedback type="invalid">
                                  {formik.errors.message}
                              </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                        <div style={{textAlign:'left',marginTop:'50px'}}>
                            <button type="submit" className='Btnformmail' > SUBMIT FORM</button>
                          </div>  
                        </Col>
                    </Row>                    
                </form>

              </Col>
          </Row>
      </div>
    </section>
  );
};

export default Contact;
