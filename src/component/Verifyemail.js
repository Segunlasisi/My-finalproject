import React from 'react'
import mailing from '../images/mailing.svg'

const Verifyemail = () => {
    return ( 

<div>            
      <div className='Loginpageform'>
                <form>
                    <h1 className=''>You're Almost In!</h1>
                    <h1>Welcome Iretiayo</h1>
                    <img className='' src={mailing} alt=""></img>

                    <p className='getlink2'>An activation link has been sent to  <a className='getlink' href="">
                    Ireti4tech@gmail.com   </a>Please click on the link to verify your email and activate your TradExpress account.</p>
                    
                    
                   

                    <div className='loginbuttondiv'>
                        <button className='loginbutton'>Login</button>
                    </div>
                  

                    <p className='getlink2'>Didn't get an email? Kindly click resend email</p> <p className='getlink2'>Wrong email supplied?<a className='getlink' href="">
                    Edit email address  </a> </p>






                </form>
            </div>

     
        
    </div>
     
        
    )
}

export default Verifyemail
