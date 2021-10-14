import React from 'react'
import TradExpress from '../images/TradExpress.svg'
import {BrowserRouter as Router, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Instant_sell = () => {
    return (


        <div>        
            <div className='Getstartedpageform'>
               <form>
                          <h2 className='formheading'>Buy/Sell Instantly</h2>

              

           <div className='getformdiv'>
            
               <div className='labelforcrypto'><label for="Crypto">Coin to Sell</label></div>
                 <select className='getform'  id="Crypto">
                   <option value="Bitcoin">Bitcoin(BTC)</option>
                      <option value="Ethurem">Ethurem(Eth)</option>
                        <option value="Litecoin">Litecoin(LTC)</option>
                         <option value="USDT">USDT</option>
                         <option value="Binance">BNB</option>
                  </select>
                  
                  <div className='labelforcrypto1'><label for="Naira">Currency</label></div>
                  <select className='getform'  id="Cyrpto">
                  <option value="Dollar">Dollar(USD)</option>
                   <option value="Naira">Naira(NGN)</option>
                   
                        <option value="Pounds">Litecoin(GBP)</option>
                         <option value="Euro">EURO</option>
                         <option value="Yuan">RNB</option>
                  </select>


                  <div className='labelforcrypto2'><label for="Amount">Amount</label></div>
                   <div className='ngngetform'>
                   {/* <button className='spamNGN' >USD</button> */}
                   <input   className='getform3'  type="Amount" id="Amount" name="Amount" placeholder='USD' /> </div>

                    <div className='getbuttonsignupdiv'>
                        <button  className='getbuttonsignup'> Continue</button>
          </div> 
  </div>
               



              </form>
            </div>
        </div>
    )
}

export default Instant_sell
