import React from 'react';



const Get_started_page = () => {
    return(
<div>
         {/* <div className='landingpagemainflex'>
      <div className='landingpageflex1'> 
            <img className='landingpageimage' src={TradExpress} alt=""></img> 
      </div>
<div className='getnav'>
  <div className='landingpageflex2'>
      <a className='landingpagelink' href="">Instant Buy/Sell</a>
      <a className='landingpagelink' href="">Learn</a>
     
        <a className='landingpagelink' href="">Log in</a>
        
        <button className='landingpagebutton2'>Get Started</button>
    </div>
</div>
    

</div> */}

        
            <div className='Getstartedpageform'>
               <form>
                          <h1 className='formheading'>Welcome!</h1>

                     

           <div className='getformdiv'>
                 <div><input className='getform' type="text" id="uname" name="username"placeholder='Username'/> </div>
                   <div><input className='getform' type="text" id="Fname" name="Fname"placeholder='Full Name'/> </div>
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


export default Get_started_page;