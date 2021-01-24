import React from "react";
import "./login.scss";
import emailImg from "../../images/login_assets/email.png";
import passImg from "../../images/login_assets/Password-1.png";
import logo from "../../images/login_assets/logo.png";
import flower from "../../images/login_assets/Group2220.png";
import bar from "../../images/login_assets/345343@2x.png";
import Group1209 from "../../images/login_assets/Group1209.png";
const Login = () => {
  return (
    <div>
      <div className='loginContainer'>
        {" "}
        <img src={Group1209} alt='' className='backimg' />
        <div className='form-wrapper'>
          <div className='logoContainer text-center d-flex justify-content-center '>
            <img src={logo} className='text-center logoimg' alt='' />
          </div>
          <h6 className='text-center mb-3'>For Consumers</h6>{" "}
          <form action='' method='post'>
            <img src={emailImg} alt='' className='formimg' />
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Email Address'
              />
            </div>{" "}
            <img src={passImg} alt='' className='passimg' />
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Password'
              />
            </div>
            <div className='text-right'>
              <a href='' className='text-right'>
                forgot password
              </a>{" "}
            </div>
            <br></br>
            <div className='text-center'>
              <button type='submit' className='signinBtn'>
                Signin
              </button>
            </div>{" "}
            <div className='flowerimg'>
              <img src={flower} alt='' />
            </div>
          </form>
          <div className='text-center d-flex flex-column my-4'>
            <label htmlFor='' className=' mb-0'>
              dont have an accpunt
            </label>
            <a href='' className='mb-3 signup'>
              Signup
            </a>
            <button className='theme-btn'>Want to drive with us?</button>
            <button className='theme-btn'>Want to sell with us?</button>
          </div>
          <div className='barimg'>
            <img src={bar} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
