import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
function Header() {
    const [navbar, setStatus] = useState(false);
    return (
        <Nav>
           <LeftNav>
                <NavLink to="/">
                    <h1>
                       
                        The Resturant
                       
                    </h1>
                    <p>
                        New Delhi
                    </p>
                </NavLink>
           </LeftNav>
           <RightNav show = {navbar}>
           <li><NavLink to="/Reservations" onClick={() => setStatus(false)}>Reservations</NavLink></li>
                <li><NavLink to="/Menu" onClick={() => setStatus(false)}>Menu</NavLink></li>
                <li><NavLink to="/Gallery" onClick={() => setStatus(false)}>Gallery</NavLink></li>
                <li><NavLink to="/Contact"onClick={() => setStatus(false)}>Contact</NavLink></li>
           </RightNav>
           <NavIcon>
           {!navbar && 
           <FontAwesomeIcon onClick={() => setStatus(true)} icon={faBars} />}
           {navbar && <FontAwesomeIcon onClick={()=>setStatus(false)} icon={faTimes} />}
           </NavIcon>
        </Nav>
    )
}
const Nav = styled.nav`
    position:absolute;
    display:flex;
    align-items:baseline;
    color:#fff;
    padding:20px 0;
    width:100%;
    a{
        text-decoration:none;
        color:#fff;
       
        
    }
    li{
     list-style-type:none
     
        
    }
    @media(max-width:750px){
        position:fixed;
        a{
            display:block;
            width:100vw;
        }
    }
    
    
   
    

    
   
`
const LeftNav = styled.div`
    width:40%;
    text-align:left;
    @media (max-width:750px){
        width:100%;
        margin: 0 40px;
        z-index:1;
    }
    p{
        font-weight:200;
        position:relative;
        left:40px;
    }
    a{
        display:inline;
    }
    
  
`

const RightNav = styled.div`
    display:flex;
    justify-content: space-between;
    width:40%;
    max-width:300px;
    
    h3{
        font-weight:400;
        font-size:1rem;
        
    }
    @media (max-width:750px){
        
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        position:absolute;
        top:0;
        // width and max- width  to change the above rules
        width:100%;
        max-width:100%;
       
        background-color:#1b1f24;
        height:100vh;
        transform:${props => !props.show ? "translateX(100%)" : "translateX(0)"};
        transition:transform .5s;
    


        li{
            position:relative;
            top:160px;
            // padding: 20px 40px;
            margin:0;
            text-decoration:none;
            text-align:left;
            transition:all .3s;
            display:block;
            cursor:pointer;
            
          
        }
        li:hover{
            background-color: #24222b;
            color:rgba(255,255,255);
        }
        a{
            padding:20px 40px;
        }
    }
`

const NavIcon = styled.div`
    font-size: 2.2rem;
    display:none;
    @media (max-width:750px){
        display:block;
        margin-right:20px;
        cursor:pointer;
        z-index:1
    }
`

export default Header
