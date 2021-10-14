import React from 'react'




const Instant_buy = (props) => {
    
    return (
    
     <div>
       
            <div className='Getstartedpageform'>
               <form>
                          <h2 className='formheading'>Buy/Sell Instantly</h2>

                  

           <div className='getformdiv'>
            
               <div className='labelforcrypto'><label for="Crypto">Coin to Buy</label></div>
                 <select className='getform'  id="Crypto">
                   <option value="Bitcoin">Bitcoin(BTC)</option>
                      <option value="Ethurem">Ethurem(Eth)</option>
                        <option value="Litecoin">Litecoin(LTC)</option>
                         <option value="USDT">USDT</option>
                         <option value="Binance">BNB</option>
                  </select>
                  
                  <div className='labelforcrypto1'><label for="Naira">Currency</label>
                  </div>
                  <select className='getform'  id="Cyrpto">
                   <option value="Naira">Naira(NGN)</option>
                      <option value="Dollar">Dollar(USD)</option>
                        <option value="Pounds">Litecoin(GBP)</option>
                         <option value="Euro">EURO</option>
                         <option value="Yuan">RNB</option>
                  </select>


                  <div className='labelforcrypto2'><label for="Amount">Amount</label></div>
                   <div className='ngngetform'>

                  {/* <button className='spamNGN' >NGN</button>  */}
                  
                  <input   className='getform3'  type="Amount" id="Amount" name="Amount" placeholder='NGN'   />  </div>

                    <div className='getbuttonsignupdiv'>
                     <button  className='getbuttonsignup'> Continue</button>
          </div> 
  </div>
               



                </form>
            </div>
        </div>
    )
}

export default Instant_buy
