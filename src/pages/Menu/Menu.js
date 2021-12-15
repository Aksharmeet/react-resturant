import React from 'react'
import { IndianMenu } from './MenuComponents/Data'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUtensils} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Menu() {
    let Veg = IndianMenu.filter((items) => (items.category == "vegMain"));
    let NonVeg = IndianMenu.filter((items) => (items.category == "nonMain"));
    let Biryani = IndianMenu.filter((items) => (items.category == "biryani"));
    let Breads = IndianMenu.filter((items) => (items.category == "breads"));
    let Deserts = IndianMenu.filter((items) => (items.category == "deserts"));
    let Beverages = IndianMenu.filter((items) => (items.category == "beverages"));

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
    
    
    return (
        <MenuBody>
          
          <Categories SideMenu={SideMenu}>
                <ul onClick ={OpenClose}>
                <a href="#veg"><li>Curries (VEG)</li></a>
                <a href="#nonVeg"><li>Curries(NON-VEG)</li></a>
                <a href="#biryani"><li>Briyani</li></a>
                <a href="#breads"><li>Breads</li></a>
                <a href="#deserts"><li>Deserts</li></a>
                <a href="#beverages"><li>Beverages</li></a>
                </ul>
                <SideMenuWrapper onClick={OpenClose} onMouseOver={() => setMouseMenu(true)} onMouseOut={() =>setMouseMenu(false)}>
                    <FontAwesomeIcon icon={faUtensils} style = {MouseMenu ? {color: "#fff"}:{color:"#000"}} size="lg"/>
                </SideMenuWrapper>
                <CartWrapper onMouseOver={() => setMouse(true)} onMouseOut={() =>setMouse(false)}>
                <FontAwesomeIcon icon ={faShoppingCart}  style = {Mouse ? {color: "#fff"}:{color:"#000"}} size="lg" />
                </CartWrapper>
          </Categories>
          <FoodWrapper>
        

          
            <div id="veg">
            <h4>Veg Items</h4>
            {Veg.map((item) => 
                (
                    <VegContainer>
                    
                    <img key={item.img} src={item.img}/>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377; {item.price}</p>
                    </VegContainer>
                )
            )}
            </div>
          
         
            <div id="nonVeg">
                 <h4>Non-Veg Items</h4>
         
                {NonVeg.map((item) => 
                (  
                    <NonVegContainer>
                    <img key={item.img} src={item.img}/>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377; {item.price}</p>
                    </NonVegContainer>
                    
                )
                )}
            </div>
         
            <div id="biryani">
                 <h4>Biryani</h4>
         
                {Biryani.map((item) => 
                (  
                    <BiryaniContainer>
                    <img key={item.img} src={item.img}/>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377; {item.price}</p>
                    </BiryaniContainer>
                    
                )
                )}
            </div>

            <div id="breads">
                 <h4>Breads</h4>
         
                {Breads.map((item) => 
                (  
                    <BreadsContainer>
                    <img key={item.img} src={item.img}/>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377; {item.price}</p>
                    </BreadsContainer>
                    
                )
                )}
            </div>
        
            <div id="deserts">
                 <h4>Deserts</h4>
         
                {Deserts.map((item) => 
                (  
                    <DesertsContainer>
                    <img key={item.img} src={item.img}/>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377; {item.price}</p>
                    </DesertsContainer>
                    
                )
                )}
            </div>
        

          
            <div id="beverages">
                 <h4>Beverages</h4>
         
                {Beverages.map((item) => 
                (  
                    <BeveragesContainer>
                    <img key={item.img} src={item.img}/>
                    <h5>{item.title}</h5>
                    <p>{item.disc}</p>
                    <p> &#8377; {item.price}</p>
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
            padding-top:30px;
            margin:0px auto 30px auto;
            text-align:center;
            font-family:cinzel;
            font-size:2rem;
            font-weight:200;
            
        }
        img{
            width:35%;
            max-width:300px;
            box-shadow: 8px 8px #feaa1a;
            margin:40px 30px;
            
        };
        a{
            color:#000;
            text-decoration:none;
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
`
const Categories = styled.div`
   
    padding:150px 10px 50px 10px;
    
    ul{
       
        list-style:none;
        font-family:cinzel;
        line-height:2rem;
        font-size:1rem;

    }
  
    li{
        cursor:pointer;
       
    }
    @media (max-width:720px){
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
            padding:10px 20px;
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
       
        
    }
`
const FoodWrapper = styled.div`
    height:100vh ;
    overflow-y: scroll;
    scroll-behavior: smooth;
`
const VegContainer = styled.div`
    div{
        background-color:#ffffff80;
        height:1px;
        margin:auto 30px;
    
    
    }
    @media (max-width:720px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        img{
            width:60%;
            max-width:none;
        }
`

const NonVegContainer = styled.div`
    
    div{
        background-color:#ffffff80;
        height:1px;
        margin:auto 30px;
        
    
    
    }
    @media (max-width:720px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        img{
            width:60%;
            max-width:none;
        }
`

const BreadsContainer = styled.div`
    div{
        background-color:#ffffff80;
        height:1px;
        margin:auto 30px;
    
    
    }
    @media (max-width:720px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        img{
            width:60%;
            max-width:none;
        }
`
const BiryaniContainer = styled.div`
    div{
        background-color:#ffffff80;
        height:1px;
        margin:auto 30px;


    }
    @media (max-width:720px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        img{
            width:60%;
            max-width:none;
        }   
`
const DesertsContainer = styled.div` 
    div{
        background-color:#ffffff80;
        height:1px;
        margin:auto 30px;
    
    
    }
    @media (max-width:720px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        img{
            width:60%;
            max-width:none;
        }   
` 

const BeveragesContainer = styled.div`
    div{
        background-color:#ffffff80;
        height:1px;
        margin:auto 30px;
    
    
    }
    @media (max-width:720px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        img{
            width:60%;
            max-width:none;
        }
`

export default Menu
