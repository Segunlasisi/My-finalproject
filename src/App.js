import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Landing_page from './component/Landing_page';
import Login from './component/Login';
import Verifyemail from './component/Verifyemail';
import Navbuy_sell from './component/Navbuy_sell';
import Nav_indvidual_business from './component/Nav_indvidual_business';
import Dashboard from './component/Dashboard';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'
// import NotFound from '*'






function App() {
  //  implementing a state variable
  const [Data,setData]=useState([])
       
  // create a function to fetch data
  const getData=async () => {


    let response = await fetch('https://api.nomics.com/v1/currencies/ticker?key=2b608f1fec12e145ea2c885cf2cbc2d8e49786f9&ids=BTC,ETH,XRP,LTC,AB,ABL&interval=1d,30d&convert=EUR&per-page=100&page=1')
  
    let myData=await response.json()
    // console.log(myData);
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

             <Route exact path="/" >
               <Landing_page Data={Data}/>
             </Route>
            
            <Route path = "/Login" component={Login}/>
          
             <Route  path = "/verifyemail" component={Verifyemail}/>
          
            <Route   path = "/navbuy_sell" component={Navbuy_sell}/>
          
             <Route   path = "/nav_indvidual_business" component={Nav_indvidual_business}/>
          
             <Route  path = "/Dashboard" component={Dashboard}/>

             {/* <Route  path = "*" component = {NotFound}/> */}
               </Switch> 
           
           
          </div>
    </Router>
    
  );
  }
export default App;





// return (
//   <Router>
//    <div>
 
        
//         <Navbar/>
        
        
//             <Switch>

//             <Router exact path = "/"><Landing_page Data ={Data} />
//             </Router> 

            
//             <Router  exact path = "/Login/"><Login/>
//             </Router>

//             <Router  exact path = "/verifyemail/"><Verifyemail/>
//             </Router>

//             <Router  exact path = "/navbuy_sell/"><Navbuy_sell/>
//             </Router>

//             <Router  exact path = "/nav_indvidual_business/"><Nav_indvidual_business/>
//             </Router>

            
            
//             <Router  exact path = "/Dashboard"><Dashboard/>
//             </Router>
           
//             </Switch> 
          
          
//          </div>
//    </Router>
   
//  );
//  }
// export default App;
