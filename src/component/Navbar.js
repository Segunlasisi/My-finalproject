import {Link,} from 'react-router-dom';
import TradExpress from '../images/TradExpress.svg'
// import { useState } from 'react';
import React from 'react';





const Navbar = () => {
  // const[toggle,setToggle] =useState(true)
  // // switch the mobile menu  on and off 
  // const flip = () =>{
  //   let navmob =Document.getElementbyId('navmoblie');
  //   if (toggle){
  //     navmob .style.display ='block'
  //     setToggle(!toggle)

  //   }else{
  //     navmob .style.display ='none'
  //     setToggle(!toggle)

  //   }



  // }


  return (


    <div className='landingpagemainflex'>
      <div className='landingpageflex1'>
        <Link to='/'><img className='landingpageimage' src={TradExpress}></img>
        </Link>
      </div>

      <div className='landingpageflex2'>
        <Link to='/navbuy_sell'><span className='landingpagelink'>Instant Buy/Sell</span></Link>
        <Link to='/Dashboard'><span className='landingpagelink'>Board</span></Link>

        <Link to='/Login'><button className='landingpagebutton1'>Log in</button></Link>
        <Link to='/nav_indvidual_business'><button className='landingpagebutton2'>Get Started</button></Link>
      </div>

    


      

      <div className='navmobile'>
      
        <Link to='/navbuy_sell'><li className='navbuysell'>Instant Buy/Sell</li></Link>
         <Link to='/Dashboard'><span className='landingpagelink'>DashBoard</span></Link>

        <Link to='/Login'><li className='navbuysell'  > Log in</li></Link>
        <Link to='/nav_indvidual_business'><li className='navbuysell'>Get Started</li></Link>

        </div>


      </div>



      )
}


export default Navbar;
