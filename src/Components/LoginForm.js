import React from 'react';
import { Formik, Form, Field,ErrorMessage } from "formik";
import styled from 'styled-components'

export default function LoginForm() {

   function handleSubmit (event) {
     console.log(this.state.value)
     event.preventDefault();
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
                <div>
                    <Formik 
                    initalValues={{ username: '', email: '', password: ''}}
                    onSubmit={handleSubmit}
                    render={props => {
                    return(
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
                         );
                         }}
                    />

                </div>
        </div>
   
        <div className='operatorCard'>
            <h5>Operator</h5>
                <div>
                    <Formik 
                    initalValues={{ username: '', email: '', password: ''}}
                    onSubmit={handleSubmit}
                    render={props => {
                    return(
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
                    );
                    }}
                    />
                    
                </div>
        </div>
    </div>
   )
}