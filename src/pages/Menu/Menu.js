import React from 'react'
import { IndianMenu } from './MenuComponents/Data'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUtensils} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Menu() {
    let Veg = IndianMenu.filter((items) => (items.category == "vegMain"));
    let NonVeg = IndianMenu.filter((items) => (items.category == "nonMain"));
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
                <ul>
                <li>Curries (VEG)</li>
                <li>Curries(NON-VEG)</li>
                <li>Briyani</li>
                <li>Breads</li>
                <li>Deserts</li>
                <li>Beverages</li>
                </ul>
                <SideMenuWrapper onClick={OpenClose} onMouseOver={() => setMouseMenu(true)} onMouseOut={() =>setMouseMenu(false)}>
                    <FontAwesomeIcon icon={faUtensils} style = {MouseMenu ? {color: "#fff"}:{color:"#000"}} size="lg"/>
                </SideMenuWrapper>
                <CartWrapper onMouseOver={() => setMouse(true)} onMouseOut={() =>setMouse(false)}>
                <FontAwesomeIcon icon ={faShoppingCart}  style = {Mouse ? {color: "#fff"}:{color:"#000"}} size="lg" />
                </CartWrapper>
          </Categories>
          <FoodWrapper>
        

          <VegContainer>
           <h4>Veg Items</h4><div></div>
          {Veg.map((item) => <img key={item.img} src={item.img}/>)}
          </VegContainer>

          <NonVegContainer>
          <h4>Non-Veg Items</h4><div></div>
          {NonVeg.map((item) => <img key={item.img} src={item.img}/>)}
          </NonVegContainer>

          <BriyaniContainer>
          <h4>Briyani</h4><div></div>
          {Breads.map((item) => <img key={item.img} src={item.img}/>)}
          </BriyaniContainer>

          <DesertsContainer>
          <h4>Deserts</h4><div></div>
          {Deserts.map((item) => <img key={item.img} src={item.img}/>)}
          </DesertsContainer>

          <BeveragesContainer>
          <h4>Beverages</h4><div></div>
          {Beverages.map((item) => <img key={item.img} src={item.img}/>)}
          </BeveragesContainer>
          </FoodWrapper>
            
        
        
        </MenuBody>  
    )
}
const MenuBody = styled.div`
    background-color:#100000;
    color:#fff;
    display:flex;
    padding-top:150px;
   
        h4{
            margin:30px;
            font-family:cinzel;
            font-size:2rem;
            font-weight:200;
            
        }
        img{
            width:35%;
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
`
const Categories = styled.div`
   
    padding:150px 10px 50px 10px;
    
    ul{
       
        list-style:none;
        font-family:cinzel;
        line-height:2rem;
        font-size:1rem;

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

const BriyaniContainer = styled.div`
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
