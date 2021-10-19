import React from "react";

import Appstore from '../images/Appstore.svg'
import Googleplay from '../images/Googleplay.svg'
import Buyandsell from '../images/Buyandsell.svg'
import Deposit from    '../images/Deposit.svg'
import Union  from '../images/Union.svg'
import Group79 from '../images/Group79.svg'
import bfooter from '../images/bfooter.svg'
import Group0 from '../images/Group0.svg'
import { Link } from "react-router-dom";





const Landing_page =  (props) => {
    console.log(props.Data);
    return (
        <div className="landingpage">
           
                    <div className='landingpagehandp'>
                        <h1 className='landingpageh '>Buy, Sell and manage your Crypto on TradExpress. </h1>
                        <p className='landingpagep'> Easily trade Cryptocurrencies like Btc,USDT,ETH,LTC & XPR   with NGN.</p>

                        <button className='landingpagebutton3'>Get Started</button>

                         <div className='landingpage2n3' >
                            <img className='landingpages3'  src={Googleplay} alt=""></img>
                            <img className='landingpage3' src={Appstore} alt=""></img> 
                        </div>
                    </div>


                               <div className='landingpagecrypto'>
                                     

                                     {
                                         props.Data.map(d=>{
                                             return(
                                                <div>{d.id}/NGN  <spam className='num'>{d.market_cap_dominance}</spam> <div className='num2'>{parseInt(d.price) * 465} NGN </div> </div>
                                             )
                                         })
                                     }  
                                    
                                    
                               </div>


                                        <h2 className='section2h'>Why do people get involved with Cryptocurrencies? </h2>

                    <div className='section2'>

                            <div className='section2handp'>
                                  <img className='landingpageimage' src={Deposit} alt="" ></img>
                                   <h3> Easy mode of payment </h3>
                                   <p className='section2p'>people can now easily send and recieve money anywhere in the world to purchase goods and pay for service.</p>
                                   
                              </div>
                                    
                               <div  className='section2handp'>
                                      <img className='landingpageimage' src={Deposit} alt=""></img>

                                      <h3>Financial Freedom</h3>

                                      <p className='section2p'>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>
                              </div>

                              <div  className='section2handp'>
                                      <img className='landingpageimage' src={Deposit} alt=""></img>

                                      <h3>Investment</h3>

                                      <p className='section2p'>The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.</p>
                              </div>
                         </div>


                     <div className='section3' >

                           <div className='section3button' > 
                               <button className='landingpagelearnmorebutton'>Learn More</button>
                           </div>   

                                <h2 className='section3h'>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
                        
                           <div className='section3flex1'>
                                <div className='mobilesec3'>
                                    <h3 className='section3h3'>Create a free Account</h3>
                                     <p className='section3p'>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                                 </div>
                            <div className='sec3mobileimg'>
                                 <img className='section3landingpageimage1' src={Buyandsell} alt=""></img>
                            </div>
                          </div>


                          <div className='section3flex1'>
                                   <img className='section3landingpageimage' src={Deposit} alt=""></img>
                                
                                <div className='mobilesec3_1'>
                                    <h3 className='section3deposith'>Deposit</h3>
                                     <p className='section3deposit'>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
                                 </div>
                          </div>

                          
                          <div className='section3flex1'>
                                  
                                <div className='mobilesec3_1' >
                                    <h3 className='section3h3'>Buy/ Sell Crypto</h3>
                                     <p className='section3p'>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family..</p>
                                 </div>
                               <div className='mobilesec3'>
                                 <img className='section3landingpageimage1' src={Buyandsell} alt=""></img>
                                 </div>
                          </div>

                <div className='section4maincon'> 
                         <p className='section4p'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
                         <h2  className='section4h'>Create your account for free and start trading today!</h2>
                           
                           <div className='section4button'>
                           <Link to='/nav_indvidual_business'>  <button  className='section4button1'>Get Started</button> </Link>
                           </div>


                           <div className='section4appleandgoogle' >
                               <img   src={Googleplay} alt=""></img>
                               <img className='landingpages3' src={Appstore} alt=""></img> 
                           </div>


                           <div className='section5maincon'>
                                  <h2 className='section5h'>Customer's Review</h2>

                            <div className='section5flexcon'>
                                  <div className='unionimage' > <img className='Group0' src={Group0} alt=""></img><p className='Group1'>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p></div>

                                  <div className='unionimage' ><img className='Group0' src={Group0} alt=""></img><p className='Group1' >Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p></div>

                                  <div className='unionimage' ><img className='Group0' src={Group0} alt=""></img><p className='Group1'>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p></div>
                           </div>    
                           </div>

                           {/* <div className='section5maincon'>
                                  <h2 className='section5h'>Customer's Review</h2>
                                  <img className='unionimage' src={Union} alt="" ></img>
                                  <img className='unionimage' src={Union} alt="" ></img><img className='unionimage' src={Union} alt="" ></img>
                           </div> */}

                     </div>
              


        <div>
            <div className='footermaincon'>

                <div className='footermainflex1'>
                    <div className='footerflex'>
                        <h2>Products</h2>
                        <p>Bitcoin</p>
                        <p>Alt</p>
                        <p>Fiat</p>
                        <p>Refil</p>
                        <p>P2P</p>
                    </div>

                    <div className='footerflex'>
                        <h2>Learn</h2>
                        <p>Blog</p>
                        <p>Help Centre</p>

                    </div>


                    <div className='footerflex'>
                        <h2>Contact</h2>
                        <p>hello@tradeexpress.com </p>
                        <p>support@tradeexpress.com</p>
                        <p> <img className='Group79' src={Group79} alt="" ></img></p>
                    </div>
                </div>
                <div className='footerflexmaincon2'>
                    <div className='footerflex'>
                        <h2>Products</h2>
                        <p>Bitcoin</p>
                        <p>Alt</p>
                        <p>Fiat</p>
                        <p>Refil</p>
                        <p>P2P</p>
                    </div>
                    <div className='footerflex'>
                        <h2>Company</h2>
                        <p>About Us </p>
                        <p>Careers</p>
                        <p>Rates</p>
                        <p> Mobile</p>

                    </div>
                    <div className='footerflex'>
                        <h2>Legal</h2>
                        <p>Privacy Policy</p>
                        <p>Anti-Money  Laundering</p>
                        <p> Terms and Conditions</p>
                    </div>
                </div>



            </div>
            <div img className='bfooter'><img src={bfooter} alt="" ></img></div>

        </div>
                    
             </div>
                          
         </div>
    )
}


export default Landing_page