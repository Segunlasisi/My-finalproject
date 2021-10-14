
import React from 'react'



const Business_get_started_page = () => {
    return (
        <div>
                           

        
            <div className='Getstartedpageform'>
               <form>
                          <h1 className='formheading'>Welcome!</h1>

                  

           <div className='getformdiv'>
                 <div><input className='getform' type="text" id="uname" name="username"placeholder='Username'/> </div>
                   <div><input className='getform' type="text" id="Bname" name="Bname"placeholder='Business Name'/> </div>
                    <div>   <input className='getform' type="email" id="Email" name="Email" placeholder='Email'/> </div>
                   <div>   <input className='getform' type="number" id="pnumber" name="phonenumber" placeholder='Phone Number'/> </div>
                   <div>   <input className='getform' type="text" id="referral" name="ReferralCode" placeholder='Referral Code (optional)'/> </div>
          </div> 

               <div className='getlink2'>
                   <p>By clicking the Sign Up button below, you agree to <br/>TradExpress  <a className='getlink' href="">term and service</a>
                       </p>
                </div>  
                     <div className='getbuttonsignupdiv'>
                        <button  className='getbuttonsignup'>Sign Up</button>
                    </div>
                      <div className='getlink2'>Already have an account ? <a className='getlink' href="">Click here</a></div>



                </form>
            </div>
        </div>
    )
}

export default Business_get_started_page
