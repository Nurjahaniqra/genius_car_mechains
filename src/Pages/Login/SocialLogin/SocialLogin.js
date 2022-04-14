import React from 'react';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import google from '../../../images/social/google.png';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-item-center'>
                <div className='bg-primary w-50' style={{height:'1px'}}></div>
                <p>or</p>
                <div className='bg-primary w-50' style={{height:'1px'}}></div>
            </div>
            <div>
                <button className='btn btn-primary w-50 mt-2'>
                <img className='imagestyle' src={google} alt="" />
                    Google Sign In
                </button>
            </div>
            <div>    

                <button className='btn btn-primary w-50 mt-2'>
                <img className='imagestyle' src={facebook} alt="" />
                    Facebook Sign In
                </button>
            </div> 
            <div> 
                <button className='btn btn-primary w-50 mt-2'>
                <img className='imagestyle' src={github} alt="" />
                    Github Sign In
                </button>
            </div>  
        </div>
       
    );
};

export default SocialLogin;