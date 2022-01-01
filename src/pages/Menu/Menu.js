import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUtensils} from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';
import { NavLink } from 'react-router-dom';


function Menu(props) {
       
   
    let dispatch = props.dispatch;
    let button = props.button;
    

    // for color on cart on mouseover
    const [MouseMenu, setMouseMenu] = useState(false);
    const [Mouse, setMouse] = useState(false);
    // for getting state of side menu
    const [SideMenu, setSideMenu] = useState(true);
    const OpenClose = () => {
      
        if(SideMenu === true){
            setSideMenu(false);
        }else {
            setSideMenu(true);
        }
    }
    
  
    let Veg = button.filter((items) => (items.category == "vegMain"));
    let NonVeg = button.filter((items) => (items.category == "nonMain"));
    let Biryani = button.filter((items) => (items.category == "biryani"));
    let Breads = button.filter((items) => (items.category == "breads"));
    let Deserts = button.filter((items) => (items.category == "deserts"));
    let Beverages = button.filter((items) => (items.category == "beverages"));
   

    
    return (
        <MenuBody>
          
          <Categories SideMenu={SideMenu}>
                <ul onClick ={OpenClose}>
                    <li><a href="#veg">Curries (VEG)</a></li>
                    <li> <a href="#nonVeg">Curries(NON-VEG)</a></li>
                    <li> <a href="#biryani">Briyani</a></li>
                    <li> <a href="#breads">Breads</a></li>
                    <li> <a href="#deserts">Deserts</a></li>
                    <li> <a href="#beverages">Beverages</a></li>
                </ul>
                <SideMenuWrapper onClick={OpenClose} onMouseOver={() => setMouseMenu(true)} onMouseOut={() =>setMouseMenu(false)}>
                    <FontAwesomeIcon icon={faUtensils} style = {MouseMenu ? {color: "#fff"}:{color:"#000"}} size="lg"/>
                </SideMenuWrapper>
                <NavLink to='/Order'><CartWrapper onMouseOver={() => setMouse(true)} onMouseOut={() =>setMouse(false)}>
                <FontAwesomeIcon icon ={faShoppingCart}  style = {Mouse ? {color: "#fff"}:{color:"#000"}} size="lg" />
               
                 </CartWrapper></NavLink>
          </Categories>
          <FoodWrapper>
        

          
            <div id="veg">
            <h4>Veg Items</h4>
            {Veg.map((item) => 
                (
                    <VegContainer key={item.id}>
                    
                    <img  src={item.img}/>
                    <Div> 
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377;{item.price}</p>
                    {item.add ? 
                        <div>
                            <div className='plusMinusContainer'>
                                <button className="minus" onClick={() => dispatch({type: 'decrement/COUNT_ORDER', payload: {id :item.id}})}>-</button>
                                <p className='count'>{item.orderCount}</p>
                            
                                <button className='plus' onClick={() => dispatch({type: 'increment/COUNT_ORDER', payload: {id :item.id}})}>+</button>
                            </div> 
                            <p className='message'>{item.message}</p>
                        </div>
                    : 
                        <button onClick={() =>dispatch({type: 'clicked/ADD_TO_CART', payload: {id: item.id}})}>Add To Cart</button>}
                    </Div>
                    </VegContainer>
                )
            )}
          
            </div>
          
         
            <div id="nonVeg">
                 <h4>Non-Veg Items</h4>
         
                {NonVeg.map((item) => 
                (  
                    <NonVegContainer key={item.id}>
                    <img  src={item.img}/>
                    <Div>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377;{item.price}</p>
                    {item.add ? 
                        <div>
                            <div className='plusMinusContainer'>
                                <button className="minus" onClick={() => dispatch({type: 'decrement/COUNT_ORDER', payload: {id :item.id}})}>-</button>
                                <p className='count'>{item.orderCount}</p>
                            
                                <button className='plus' onClick={() => dispatch({type: 'increment/COUNT_ORDER', payload: {id :item.id}})}>+</button>
                            </div> 
                            <p className='message'>{item.message}</p>
                        </div>
                    : 
                        <button onClick={() =>dispatch({type: 'clicked/ADD_TO_CART', payload: {id: item.id}})}>Add To Cart</button>}
                    </Div>
                    </NonVegContainer>
                    
                )
                )}
            </div>
         
            <div id="biryani">
                 <h4>Biryani</h4>
         
                {Biryani.map((item) => 
                (  
                    <BiryaniContainer key={item.id}>
                    <img key={item.img} src={item.img}/>
                    <Div>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377;{item.price}</p>
                    {item.add ? 
                        <div>
                            <div className='plusMinusContainer'>
                                <button className="minus" onClick={() => dispatch({type: 'decrement/COUNT_ORDER', payload: {id :item.id}})}>-</button>
                                <p className='count'>{item.orderCount}</p>
                            
                                <button className='plus' onClick={() => dispatch({type: 'increment/COUNT_ORDER', payload: {id :item.id}})}>+</button>
                            </div> 
                            <p className='message'>{item.message}</p>
                        </div>
                    : 
                        <button onClick={() =>dispatch({type: 'clicked/ADD_TO_CART', payload: {id: item.id}})}>Add To Cart</button>}
                    </Div>
                    </BiryaniContainer>
                    
                )
                )}
            </div>

            <div id="breads">
                 <h4>Breads</h4>
         
                {Breads.map((item) => 
                (  
                    <BreadsContainer key={item.id}>
                    <img key={item.img} src={item.img}/>
                    <Div>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377;{item.price}</p>
                    {item.add ? 
                        <div>
                            <div className='plusMinusContainer'>
                                <button className="minus" onClick={() => dispatch({type: 'decrement/COUNT_ORDER', payload: {id :item.id}})}>-</button>
                                <p className='count'>{item.orderCount}</p>
                            
                                <button className='plus' onClick={() => dispatch({type: 'increment/COUNT_ORDER', payload: {id :item.id}})}>+</button>
                            </div> 
                            <p className='message'>{item.message}</p>
                        </div>
                    : 
                        <button onClick={() =>dispatch({type: 'clicked/ADD_TO_CART', payload: {id: item.id}})}>Add To Cart</button>}
                    </Div>
                    </BreadsContainer>
                    
                )
                )}
            </div>
        
            <div id="deserts">
                 <h4>Deserts</h4>
         
                {Deserts.map((item) => 
                (  
                    <DesertsContainer key={item.id}>
                    <img key={item.img} src={item.img}/>
                    <Div>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377;{item.price}</p>
                    {item.add ? 
                        <div >
                            <div className='plusMinusContainer'>
                                <button className="minus" onClick={() => dispatch({type: 'decrement/COUNT_ORDER', payload: {id :item.id}})}>-</button>
                                <p className='count'>{item.orderCount}</p>
                            
                                <button className='plus' onClick={() => dispatch({type: 'increment/COUNT_ORDER', payload: {id :item.id}})}>+</button>
                            </div> 
                            <p className='message'>{item.message}</p>
                        </div>
                    : 
                        <button onClick={() =>dispatch({type: 'clicked/ADD_TO_CART', payload: {id: item.id}})}>Add To Cart</button>}
                    </Div>
                    </DesertsContainer>
                    
                )
                )}
            </div>
          
            <div id="beverages">
                 <h4>Beverages</h4>
         
                {Beverages.map((item) => 
                (  
                    <BeveragesContainer key={item.id}>
                    <img key={item.img} src={item.img}/>
                    <Div>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377; {item.price}</p>
                    {item.add ? 
                        <div className='buttonUniversalContainer'>
                            <div className='plusMinusContainer'>
                                <button className="minus" onClick={() => dispatch({type: 'decrement/COUNT_ORDER', payload: {id :item.id}})}>-</button>
                                <p className='count'>{item.orderCount}</p>
                            
                                <button className='plus' onClick={() => dispatch({type: 'increment/COUNT_ORDER', payload: {id :item.id}})}>+</button>
                            </div> 
                            <p className='message'>{item.message}</p>
                        </div>
                    : 
                        <button onClick={() =>dispatch({type: 'clicked/ADD_TO_CART', payload: {id: item.id}})}>Add To Cart</button>}
                    </Div>
                    </BeveragesContainer>
                    
                )
                )}
            </div>
         
          </FoodWrapper>
            
        
        
        </MenuBody>  
    )
}
const MenuBody = styled.div`
    background-color:#100000;
    color:#fff;
    display:flex;
    padding-top:100px;
   
        h4{
            padding:30px 0 10px 0;
            border-bottom: 1px solid #ffffff80;
            margin:20px auto 60px 80px;
            text-align:left;
            font-family:cinzel;
            font-size:2rem;
            font-weight:200;
            @media (max-width:900px){
                text-align:center;
                margin:20px auto 60px auto;

            }
            
        }
        img{
            width:100%;
            max-width:300px;
            box-shadow: 8px 8px #feaa1a;
            margin:40px 30px;
            
        }

       

    
   
`
const CartWrapper = styled.div`
    position:fixed;
    bottom:20px;
    left:20px;
    background-color:#fff;
    display:flex;
    align-items:center;
    width:50px;
    height:50px;
    border-radius:50px;
    cursor:pointer;
    transition: all .3s; 
    &:hover{
        background-color: #feaa1a;
        
    }
`
const SideMenuWrapper = styled.div`
    position:fixed;
    bottom:100px;
    left:20px;
    background-color:#fff;
    display:flex;
    align-items:center;
    width:50px;
    height:50px;
    border-radius:50px;
    cursor:pointer;
    transition: all .3s; 
    &:hover{
        background-color: #feaa1a;
        
    }
    @media (min-width: 901px){
        display:none;
    }
`
const Categories = styled.div`
   
    padding:150px 10px 50px 10px;
    @media (max-width:900px){
        padding:0;
       margin:0;
    }
    ul{
       
        list-style:none;
        font-family:cinzel;
        line-height:2rem;
        font-size:1rem;

    }
  
    li{
        cursor:pointer;
        padding:10px 0;

      
       
    }
    a{
        color:#fff;
        text-decoration:none;
        &:hover{
            color:#feaa1a
        }
    }
    @media (max-width:900px){
        ul{
            position:fixed;
            bottom:100px;
            left:80px;
            border-radius:10px;
            background-color:#fff;
            color:#000;
            transition:transform .3s;
            transform:${props => props.SideMenu ? "translateY(70vw) translateX(-50vw) Scale(0, 0)" : "translateY(0) translateX(0) Scale(1, 1)"};
        }
        li{
         
            border-bottom: 1px solid #0000003e;
            padding:0;
            transition:all .2s;
            
            &:hover{
                background-color:#feaa1a;
            }
            &:first-child{
               border-radius:10px 10px 0 0;
            }
            &:last-child{
                border-radius:0px 0px 10px 10px;
            }
           
        }
        a{
            color: #000;
            padding:10px;
            display:inline-block;
            width:100%;
            &:hover{
                color:#fff
            }
        }
       
        
    }
`

const FoodWrapper = styled.div`
    height:100vh ;
    overflow-y: scroll;
    scroll-behavior: smooth;
    display:flex;
    flex-direction:column;
   
   
`

const Div = styled.div`
    font-family:cinzel;
    padding:20px;
    padding-left:80px;
    text-align:center;
    position:relative;
    height:300px;
    h5{
        font-size:1.5rem;
        font-weight:200;
    }
    p{
        font-family:lustra;
        font-size:1rem;
        letter-spacing:.1rem;
        margin:20px auto;
        color:#ffffffd0;
        
     }
     
     button{
        margin:10px auto;
        padding:.5rem 1rem;
        font-family:Cinzel;
        color:#ffffff;
        background-color:#feaa1a;
        border-radius:20px;
        border-style:none;
        transition: all .3s;
        font-size:.8rem;
        &:hover{
        color:#000;
        background-color:#fff;
        font-size:1rem;
        
        }
        &:active{
        font-size:.8rem;
        
        }
     }
     .plusMinusContainer{
        display:flex;
        margin-top:20px;
        align-items:center;
        width:120px;
        position:relative;
        p{
            margin:0 auto;
            width:10px;
            padding:0;
            font-weight:900;
            font-family:monospace;
            color:#ffffffaf
        }

        button
        {
            margin:0 auto;
            font-family:monospace;
            font-weight:900;
            color:#000;
            background-color:#ffffffaf;
            
            &:hover{
                color:#fff;
                background-color:#feaa1a;
            
            }
        }
        .minus{
                position:absolute;
            }
        .plus{
            position:absolute;
            right:0;
        }
    }
   
     @media (max-width:900px){
        max-width:400px;
        padding:30px;
     }

     
`
const VegContainer = styled.div`
   
  
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row-reverse;


  
    @media (max-width:900px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        width: 100%;
      
        img{
            width:60%;
            max-width:none;
        }
    }
`

const NonVegContainer = styled.div`
    
   
display:flex;
align-items:center;
justify-content:center;
flex-direction:row-reverse;


@media (max-width:900px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width: 100%;
  
    img{
        width:60%;
        max-width:none;
    }
}
`

const BreadsContainer = styled.div`
    
   
display:flex;
align-items:center;
justify-content:center;
flex-direction:row-reverse;


@media (max-width:900px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width: 100%;
  
    img{
        width:60%;
        max-width:none;
    }
}
`
const BiryaniContainer = styled.div`
    
display:flex;
align-items:center;
justify-content:center;
flex-direction:row-reverse;


@media (max-width:900px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width: 100%;
  
    img{
        width:60%;
        max-width:none;
    }
}
`
const DesertsContainer = styled.div` 
   
display:flex;
align-items:center;
justify-content:center;
flex-direction:row-reverse;


@media (max-width:900px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width: 100%;
  
    img{
        width:60%;
        max-width:none;
    }
}
` 

const BeveragesContainer = styled.div`
    
display:flex;
align-items:center;
justify-content:center;
flex-direction:row-reverse;


@media (max-width:900px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width: 100%;
  
    img{
        width:60%;
        max-width:500px;
        margin:0;
    }
}
`

export default Menu
