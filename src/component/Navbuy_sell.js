import React, {useState} from 'react';
import Instant_buy from "./Instant_buy";
import Instant_sell from "./Instant_sell";



const Navbuy_sell = () => {
    const [state, setState] = useState('buy')

    const switchCompToBuy = () =>{
        setState('buy')
    }
    const switchCompToSell = () =>{
        setState('sell')
    }
    if (state === 'buy'){
        return (
            <div>    
                <div  className='getbuttondiv2'>
                   <button className='getbutton' onClick={switchCompToBuy}>Buy</button>
                     <span className='getbutton3'><button className='getbutton2' onClick={switchCompToSell}>Sell</button></span>


               
                 </div>
            

          
            <Instant_buy />
               
           
            </div>
            
    )
    }else if(state === 'sell'){
        return (
            <div>    
                <div  className='getbuttondiv2'>
                <button className='getbutton' onClick={switchCompToBuy}>Buy</button>
               <span className='getbutton3'><button className='getbutton2' onClick={switchCompToSell}>Sell</button></span>


               
            </div>
            

          
            <Instant_sell />
               
           
            </div>
            
    )
    }
    
}

export default Navbuy_sell
