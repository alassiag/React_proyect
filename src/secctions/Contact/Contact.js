import React, { useState } from 'react';
import { Form, Alert  } from 'react-bootstrap';
import { sendEmail } from "../../axios";
import './Style.scss';

const Contact = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({});

    const [showAlert, setShowAlert] = useState(false)
    const [error, setError] = useState(false)
  
    const handleSubmit = async (e) => {
        e.preventDefault();
       // console.log('Se envio')
        const form = e.currentTarget;
        setValidated(true);

        if (form.checkValidity() === false) {
          e.stopPropagation();
        } else {
          let response
          
          try {
            response = await sendEmail(formData);
    
            if (response.status === 201) {
              setShowAlert(true)
              setError(false);
    
              form.reset()
    
              setValidated(false);
    
              setTimeout(()=>{setShowAlert(false)}, 3000)
            } else {
              setError(true)
            }
          } catch(err) {
            setShowAlert(true)
            setError(true)
          }
        }
      }
  
    const handleOnChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)

  
    
    setFormData((prevState) => {
        return {
            ...prevState,
            [e.target.name]: e.target.value
          }
         })
   
    }  
    console.log(formData)

    return (
        <div className="section5" id="contact">
            <div className="content-s5">
                <div className="form-s5 container">
                    <div className="text1-s5">
                        <p>
                            Get in touch <br></br>
                            <span>We are hiring</span>
                        </p>
                    </div>                 
                    <Form noValidate validated={validated} onSubmit={(e)=>handleSubmit(e)}>
                        <div className="form-group row">
                        <Form.Group>
                            <Form.Control
                            onChange={handleOnChange}
                            type='text'
                            placeholder='Name'
                            name='name'
                            required
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Control
                            onChange={handleOnChange}
                            required
                            name='email'
                            type='email'
                            placeholder='Email'
                            />                      
                        </Form.Group>

                        <Form.Group >
                            <Form.Control
                            onChange={handleOnChange}
                            required
                            name='phone'
                            type='tel'
                            placeholder='Phone'
                            />
                        </Form.Group>

                        <Form.Group controlId='formBasicTextArea'>
                            <Form.Control
                            onChange={handleOnChange}
                            required
                            name='message'
                            as='textarea'
                            rows={3}
                            placeholder='Message'
                            />
                        </Form.Group>
                    
                        </div>
                        <button type="submit" className="btn-read-more rounded-pill"> Enviar </button>
                    </Form>  
                </div>

                <div className="img-derecha-s5">
                    <img src="images/contact-image.png" alt="" />
                </div>
            </div>
            { showAlert 
                ? error 
                  ? <Alert >Hubo un error al enviar el email </Alert> 
                  : <Alert variant={'success'}>Email enviado con éxito</Alert> 
                : null }
        </div>
            
    )
}  

export default Contact