import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    //   ] = useSignInWithEmailAndPassword(auth);

    //   if(user){
    //       navigate('/home');
    //   }
    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        // signInWithEmailAndPassword(email,password);
        // console.log(email,password)
    }
    const navigateRegister=event=>{
        navigate('/Register');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary  text-center mt-3 '>Please LogIn</h2>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">                   
                    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">                   
                    <Form.Control ref={passwordRef} type="password" placeholder="Password"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
               </Button>
          </Form> 
            <p className='mt-4'>New to Genius car? <Link to='/Register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register.</Link> </p>  
             <SocialLogin></SocialLogin>      
        </div>
    );
};

export default Login;