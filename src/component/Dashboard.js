import React from 'react';
import TradExpress from "../images/TradExpress.svg";
// import dashb from '../images/dashb.jpeg';
// import exchange_rate from '../images/exchange_rate.png'
// import wallet_icon from '../images/wallet_icon.jpeg'
// import learn from '../images/learn.jpeg'
// import blog from '../images/blog.jpeg'
// import profile from '../images/profile.jpeg'
// import setting from '../images/setting.jpg'
// import logout from '../images/logout.jpeg'
// import line from '../images/line.jpeg'
// import notification from '../images/notification.jpeg';
// import Ngn_deposit from '../images/Ngn_deposit.jpeg'
// import Ngn_redraw from '../images/Ngn_redraw.jpeg'
 import bitcoin from  '../images/bitcoin.svg'
 import ethereum from  '../images/ethereum.svg'
 import litecoin from  '../images/litecoin.svg'
// import tether from  '../images/tether.svg'
// import img1 from '../images/trad.png'
import {BiMenuAltLeft, BiPencil} from 'react-icons/bi';
import {AiOutlineBell, AiFillWallet,AiOutlineSetting} from 'react-icons/ai';
import {FiLogOut} from 'react-icons/fi'
import {FaBlogger} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg';
import {RiDashboardLine, RiExchangeDollarFill} from 'react-icons/ri'
import tether from '../images/tether.svg';
import income from '../images/income.png'
import bank from  '../images/bank.jpg'
// import {BsBank2} from 'react-icons/bs'


const Dashboard = (props) => {
  return (
      <section className='getstartedd'>
          <section className='getstartedd_sectionone'>
              <img src={TradExpress}/>
              <ul>
                  <li><RiDashboardLine/> Dashboard</li>
                  <li><AiFillWallet/> Wallet</li>
                  <li><RiExchangeDollarFill/> Exchange rates</li>
                  <li><BiPencil/> Learn</li>
                  <li><FaBlogger/> Blog</li>
                  <li><CgProfile/> Profile</li>
                  <li><AiOutlineSetting/> Settings</li>
                  <li><FiLogOut/> Logout</li>
              </ul>
             <div className
             ='contactbut'><button className='contact_support'>Contact Support</button></div> 
          </section>
          <section className='getstartedd_sectiontwo'>
              <div className='icon_nav'>
                  <BiMenuAltLeft className='icon_nav_bi'/>
                  <AiOutlineBell className='icon_nav_ai'/>
              </div>
              {/* <Wallet/> */}
              <section className='wallet'>
            <div className='wallet_place'>
                <h5>wallet balance</h5>
                <p className='wallet_money'>230,000 <span className='naija'>NGN</span></p>
            </div>
            <div className='bank_space'>
                <div className='income'>
                    <img src={income} className='income_img'/>
                    <span>NGN Deposit</span>
                </div>
                <div className='bank'>
                    <img src={bank} className='bank_img'/>
                    <span>NGN Withdrawal</span>
                </div>
            </div>
        </section>


                  <section className='crypto_wallet_bal'>
                  <h4>Crypto Wallet Balance</h4>


                <div className='cryptowalletbalflex'>
                   <div className='cryptowalletbal'><span className='crypt'>Bitcoin </span> <img src={bitcoin} alt=''></img></div>
                   <div  className='cryptowalletbal'><span className='crypt'>Ethereum</span><img src={ethereum} alt=''></img></div>
                   <div className='cryptowalletbal'><span className='crypt'>USDT</span><img src={tether} alt=''></img></div>
                   <div className='cryptowalletbal'><span className='crypt'>Litecoin</span><img src={litecoin} alt=''></img></div>
                </div>


                <div className='landingpagecrypto'>
                                     <div className='cryptowalletba2'>BTC/NGN  <spam className='num3'>-3.21</spam> <div className='num2'>46,000,000 NGN </div> </div>
                                     <div className='cryptowalletba2'>ETH/NGN  <spam className='num3'>-3.21</spam> <div className='num2'>46,000, NGN </div> </div>
                                     <div className='cryptowalletba2'>BTC/NGN  <spam className='num3'>-3.21</spam> <div className='num2'>46,000,000 NGN </div> </div>  
                                     <div className='cryptowalletba2'>BTC/NGN  <spam className='num3'>-3.21</spam> <div className='num2'>46,000,000 NGN </div> </div>   <div className='cryptowalletba2'>BTC/NGN  <spam className='num3'>-3.21</spam> <div className='num2'>46,000,000 NGN </div> </div>  


                                    
                               </div>
                
                                      
                                        




                  {/* <div className='ppp'> */}
                    
                      {/* <IndCryptoBal crypto='bitcoin' balance='1.67' img={bitcoin}/>
                      <IndCryptoBal crypto='USDT' balance='100.67' img={usdt}/>
                      <IndCryptoBal crypto='ethereum' balance='41.67' img={ethereum}/> */}
                  {/* </div> */}
              </section> 
              {/* <section className='fetchy'>
                  <Fetcher my_data={props.my_data}/>
              </section>     */}
          </section>
          
      </section>
  )
}

export default Dashboard




