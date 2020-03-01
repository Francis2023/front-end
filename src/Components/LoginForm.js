import React,{useState} from 'react';
import { Formik, Form, Field,ErrorMessage } from "formik";
import axios from 'axios'
import styled from 'styled-components'
//import { validateAll } from ‘indicative’
export default function LoginForm() {

    const [message,setMessage] = useState('');

   function handleSubmit (values, tools) {
     //console.log(this.state.value)
     //event.preventDefault();
     axios.post('https://foodtruck-tracker-lambda1.herokuapp.com/api/auth/login', values)
        .then(response => {
          setMessage(response.data.message)
        })
        .catch()
        .finally(() => {
            tools.setSubmitting(false)
         } )
        //const data = this.state;
        //const rules = {
        //    name: 'required|string',
           // email: 'required|email'
           // password: 'required|string|min:8;
       // }
    }
    
    function handleInputChange (event) {

        this.setState({
            [event.target.name]: event.target.value
        })
    }
  
    function validateName (value) {
      const errors = {};
    //username validation
    if(!value === 'admin') {
        errors.name ="You need to enter a name";
    }
    return errors
   } 
   function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  
   return ( 
    <div className='dinerOrOperatorCard'>
        <div className='dinerCard'>
            <h5>Diner</h5>
                
                    <Formik 
                    initalValues={{ username: '', email: '', password: ''}}
                    onSubmit={handleSubmit}
                    render={props => (
                    
                        <Form>
                            <Field name='name' type='text' placeholder='enter name' validate={validateName } onChange={handleInputChange} />
                            <ErrorMessage name='name' component='div' classname='red' />
                            
                            <Field name='email' type='text' placeholder='Email Address' validate={validateEmail} onChange={handleInputChange} />
                            <ErrorMessage name='email' component='div' classname='red' />

                            <Field name='password' type='password' placeholder='password' onChange={handleInputChange} />
                            <ErrorMessage name='password' component='div' classname='red' />

                            <button 
                                type="submit"
                                disabled={props.isSubmitting}>
                                    {
                                    props.isSubmitting ? 'Submitting' : 'submit'
                                    }
                            </button>
                        </Form>
                         
                    )}
                    />
            <div>{message}</div>
                
        </div>
   
        <div className='operatorCard'>
            <h5>Operator</h5>
                
                    <Formik 
                    initalValues={{ username: '', email: '', password: ''}}
                    onSubmit={handleSubmit}
                    render={props => (
                
                        <Form>
                            <Field name='name' type='text' placeholder='enter name' validate={validateName }  />
                            <ErrorMessage name='name' component='div' classname='red' />
                            
                            <Field name='email' type='text' placeholder='Email Address' validate={validateEmail}/>
                            <ErrorMessage name='email' component='div' classname='red' />

                            <Field name='password' type='password' placeholder='enter password'/>
                            <ErrorMessage name='password' component='div' classname='red' />

                        <button 
                        type="submit"
                        disabled={props.isSubmitting}>
                            Submit
                            </button>
                        </Form>
                
                    )}
                    />
             <div>{message}</div>       
                
        </div>
    </div>
   )
}