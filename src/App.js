import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Landing_page from './component/Landing_page';
import  Get_started_page from './component/Get_started_page';
import  Bussines_get_started_page from './component/Bussines_get_started_page';
import Instant_buy from './component/Instant_buy';
import Instant_sell from './component/Instant_sell';
import Login from './component/Login';
import Verifyemail from './component/Verifyemail';
import Navbuy_sell from './component/Navbuy_sell';
import Nav_indvidual_business from './component/Nav_indvidual_business';
import Dashboard from './component/Dashboard';
import {BrowserRouter as Router, Switch } from 'react-router-dom'





function App() {
  //  implementing a state variable
  const [Data,setData]= useState([])
       
  // create a function to fetch data
  const getData = async () => {


    let response = await fetch('https://api.nomics.com/v1/currencies/ticker?key=2b608f1fec12e145ea2c885cf2cbc2d8e49786f9&ids=BTC,ETH,XRP,LTC,AB,ABL&interval=1d,30d&convert=EUR&per-page=100&page=1')
  
    let myData = await response.json()
    console.log(myData);
    setData(myData)

  }

  
  useEffect(()=>{
    getData()

  }
  ,[]

  )    

  return (
   <Router>
    <div>
  
         
         <Navbar/>
         
         
             <Switch>

             <Router exact path = "/"><Landing_page Data ={Data} />
             </Router>  

            

             {/* <Router  exact path = "/get_started_page"><Get_started_page/>
             </Router>

             <Router  exact path = "/bussines_get_started_page"> <Bussines_get_started_page/>
             </Router> */}

             
             <Router  exact path = "/Login/"><Login/>
             </Router>

             <Router  exact path = "/verifyemail/"><Verifyemail/>
             </Router>

             <Router  exact path = "/navbuy_sell/"><Navbuy_sell/>
             </Router>

             <Router  exact path = "/nav_indvidual_business"><Nav_indvidual_business/>
             </Router>
             
             <Router  exact path = "/Dashboard"><Dashboard/>
             </Router>
            
             </Switch> 
           
           
          </div>
    </Router>
    
  );
  }
export default App;
