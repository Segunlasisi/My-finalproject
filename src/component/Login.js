import React from "react";
import TradExpress from '../images/TradExpress.svg'





const Login = () => {
    return (

     <div>

            <div className='Loginpageform'>
                <form>
                    <h1 className='formheading'>Welcome!</h1>

                    <div className className='getbuttondiv'>
                    </div>

                    <div className='getformdiv'>
                        <div><input className='getform' type="text" id="uname" name="username" placeholder='Username' /> </div>
                        <div><input className='getform' type="text" id="password" name="password" placeholder='Password' /> </div>

                    </div>

                    <div className='getlink2'>
                        <p>Remember password  <a className='loginlink' href="">Forgot Password?</a>
                        </p>
                    </div>
                    <div className='loginbuttondiv'>
                        <button className='loginbutton'>Login</button>
                    </div>
                    <div className='getlink2'>New User ? <a className='getlink' href="">Click here</a></div>

                </form>
            </div>
        </div>

    )
}


export default Login;