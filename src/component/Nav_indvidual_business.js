import { useState } from 'react'
import Get_started_page from './Get_started_page'
import Bussines_get_started_page from './Bussines_get_started_page'
import React from 'react'


const Nav_indvidual_business=()=>{
  const [state, setState] = useState('individual')

  const switchtoindividual=()=>{
    setState('individual')
  }

  const switchtobussiness=()=>{
    setState('bussiness')
  } 

  if (state === 'individual'){
    return (
      <div>

        <div className='getbuttondiv2'>
          <button className='getbutton' onClick={switchtoindividual}>Individual</button>

          <span className='getbutton3' onClick={switchtobussiness}><button className='getbutton'>Business</button></span>
        </div>



        <div className='mobilegetbuttondiv2'>
          <button className='mobilegetbutton' onClick={switchtoindividual}>Individual</button>

          <span className='mobilegetbutton3' onClick={switchtobussiness}><button className='mobilegetbutton'>Business</button></span>
        </div>




        <div>

          <Get_started_page />
        </div>

      </div>


    )
  } else if (state === 'bussiness') {
    return (

      <div>

        <div className='getbuttondiv2'>
          <button className='getbutton' onClick={switchtoindividual}>Individual</button>

          <span className='getbutton3' onClick={switchtobussiness}><button className='getbutton'>Business</button></span>
        </div>

        <div className='mobilegetbuttondiv2'>
          <button className='mobilegetbutton' onClick={switchtoindividual}>Individual</button>

          <span className='mobilegetbutton3' onClick={switchtobussiness}><button className='mobilegetbutton'>Business</button></span>
        </div>
        


        <div>

          <Bussines_get_started_page />

        </div>

      </div>

    )
  }
}

export default Nav_indvidual_business
