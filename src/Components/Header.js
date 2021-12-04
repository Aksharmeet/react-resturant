import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
function Header() {
    const [navbar, setStatus] = useState(false);
    return (
        <Nav>
           <LeftNav>
                <h1>
                    The Resturant
                </h1>
                <p>
                    New Delhi
                </p>
           </LeftNav>
           <RightNav show = {navbar}>
                <h3> Reservations</h3>
                <h3> Menu</h3>
                <h3> Contact</h3>
                <h3> Gallery</h3>
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
    
    @media(max-width:750px){
        position:fixed;
        
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
        text-align:left;
        background-color:#1b1f24;
        height:100vh;
        transform:${props => !props.show ? "translateX(100%)" : "translateX(0)"};
        transition:transform .5s;


        h3{
            position:relative;
            top:160px;
            padding: 20px 40px;
            margin:0;
        }
        h3:hover{
            background-color: #24222b;
            color:rgba(255,255,255);
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
