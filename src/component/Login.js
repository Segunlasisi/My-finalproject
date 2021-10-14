import React from "react";
import TradExpress from '../images/TradExpress.svg'





const Login = () => {
    return (

     <div>
{/* 
<div className='landingpagemainflex'>
      <div className='landingpageflex1'> 
            <img className='landingpageimage' src={TradExpress} alt=""></img> 
      </div>
<div className='getnav'>
  <div className='landingpageflex2'>
      <a className='landingpagelink' href="" >Instant Buy/Sell</a>
      <a className='landingpagelink' href="">Learn</a>
     
        <button className='instantbuysellbutton' href="">Log in</button>
        
       
        <a className='instantsellgetstartedlink' href="">Get Started</a>
    </div>
</div>
    

</div> */}

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