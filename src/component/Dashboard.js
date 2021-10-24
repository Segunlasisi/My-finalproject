import React from 'react';
import TradExpress from "../images/TradExpress.svg";
import bitcoin from  '../images/bitcoin.svg';
import ethereum from  '../images/ethereum.svg';
import litecoin from  '../images/litecoin.svg';
import {BiMenuAltLeft, BiPencil} from 'react-icons/bi';
import {AiOutlineBell, AiFillWallet,AiOutlineSetting} from 'react-icons/ai';
import {FiLogOut} from 'react-icons/fi';
import {FaBlogger} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import {RiDashboardLine, RiExchangeDollarFill} from 'react-icons/ri';
import tether from '../images/tether.svg';
import income from '../images/income.png';
import bank from  '../images/bank.jpg';



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
              </section> 
           
          </section>
          
      </section>
  )
}

export default Dashboard




