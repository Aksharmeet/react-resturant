import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGithub, faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
        <Div>
            <Logo>
                <h6>THE RESTURANT</h6>
                <p>NEW DELHI</p>
            </Logo>
            <MenuItems>
                <li>Reservations</li>
                <li>Menu</li>
                <li>Gallery</li>
                <li>Contact</li>
            </MenuItems>
            <Social>
                <Github>
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                </Github>
                <Linkedin>
                <FontAwesomeIcon icon={faLinkedinIn}  size="2x"/>
                </Linkedin>
            </Social>

            <Divider/>

            <Copyright>
                Copyright &#9400; 2021 Aksharmeet's Hospitality. All Rights Reserved.
            </Copyright>

           
            
        </Div>
    )
}

const Div = styled.div`
    font-family:cinzel;
    color: rgba(255, 255, 255, .6);
    background-color:#202023;
    text-align:center;
   
    li:hover{
        color: rgba(255, 255, 255, .9);
        cursor:pointer
        }

`

const Logo = styled.div`
    h6{
        padding:40px 0 20px 0;
        font-size:2rem;
        font-weight:200
    }

`

const MenuItems = styled.div`
    margin:80px auto 40px auto;
    padding-left:20px;
    text-align:left;
    
    li{
        list-style:none;
        padding:10px;
        font-size:14px;
    }
    @media (min-width:900px){
        display:flex;
        width:400px
    }


`

const Social = styled.div`
    display:flex;
    width:100px;
    margin:0 20px 60px 20px;
    @media (min-width:900px){
        margin:auto;

    }
   
`
const Github = styled.div`
    &:hover{
        color: rgba(255, 255, 255, .9);
        cursor:pointer
    }
`
const Linkedin = styled.div`
    &:hover{
        color: rgba(255, 255, 255, .9);
        cursor:pointer
    }
`

const Divider = styled.div`

`

const Copyright = styled.div`
    padding:20px 0;
    font-size:13px;
    letter-spacing:1px;
    font-family:lato;
    font-weight:300


`



export default Footer
