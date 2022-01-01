
import './App.css';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Components/Home/Home";
import Reservations from './pages/Reservations/Reservations';
import Covid19 from './pages/Covid19';
import Menu from "./pages/Menu/Menu";
import Gallery from './pages/Gallery';
import Contact from './pages/Contact'
import Order from './pages/Menu/Order';
// import hooks
import {useReducer} from 'react'
// importing menu Data
import { IndianMenu } from './pages/Menu/MenuComponents/Data'


function App() {
  
    
    // button state
    const reducer=(button, action) => {
      switch(action.type) {
          case 'data/LOCAL_STORAGE':
              return JSON.parse(window.localStorage.getItem('button'))

              
          case 'clicked/ADD_TO_CART' :
             
              return button.map(data =>
                  {
                      if(data.id === action.payload.id){ 
                     
                      return {...data, add: true, orderCount: 1}
                  }
                
                  return data
              })
              case  'decrement/COUNT_ORDER' :
                 
                  return button.map(data => {
                      if(data.id == action.payload.id){
                          if(data.orderCount >= 1){
                            
                              return {
                                  ...data, orderCount: data.orderCount - 1,message:''}
                          } else {
                             
                              return {...data, add: false}
                          }
                      }
                     
                     return data
                  })
                  case  'increment/COUNT_ORDER' :
                      
                      return button.map(data => {
                          if(data.id == action.payload.id){
                          if(data.orderCount < 3){
                             
                              return {...data, orderCount: data.orderCount + 1, message:''}
                          } else {
                              return {...data, message:'MAX_ORDER_LIMIT_REACHED'}
                          }
                          
                      }
                      return data 
                      })
              default:
                  return button
      }
    }
    const [button, dispatch] =  useReducer(reducer,IndianMenu)

   


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Reservations" element={<Reservations/>}> </Route>
        <Route path="/Covid19" element={<Covid19/>}> </Route>
        <Route path="/Menu" element={<Menu button={button} dispatch={dispatch}/>}> </Route>
        <Route path="/Gallery" element={<Gallery/>}> </Route>
        <Route path="/Contact" element={<Contact/>}> </Route>
        <Route path="/Order" element={<Order button={button} dispatch={dispatch} button={button}/>}> </Route>
      </Routes>
      <Footer/> 

      
      </BrowserRouter>
     </div>
  )
}

export default App;
