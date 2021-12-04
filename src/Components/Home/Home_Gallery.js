import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Home_Gallery() {
    return (
        <Div>
            <Section>
                <p>NEW DELHI</p>
                <h6>EXPERIENCE BEAUTY</h6>
                <NavLink to="/Gallery">
                    <Button>
                    VIEW GALLERY
                    </Button>
                </NavLink>
            </Section>
            
        </Div>
    )
}
const Div = styled.div`
    a{
        color:#fff
    }
  
`
const Section = styled.div`
    font-family:Cinzel;
    background-image:linear-gradient(to bottom, #0f20279d, #203a434d, #2c5364), url(/images/gallery.jpg);
    background-size:100%;
    background-repeat:no-repeat;
    background-position:bottom;
    color:white;
    text-align:center;
    padding-top:10%;
   
    h6{
        margin:40px auto;
        font-size:2.5rem;
        font-weight:200
    }
   
`
const Button = styled.div`
    width:300px;  
    border-top:2px solid #a11212;
    border-bottom:2px solid #a11212;
    display:inline-block;
    margin-bottom:10%;
    padding:20px;
    transition:background-color .5s ; 
    &:hover{
        background-color:#242230;
        border-top:0px solid #a11212;
        border-bottom:0px solid #a11212;
        padding:22px;
        cursor:pointer;
    }
    &:active{
        background-color:#242210;
    }


`
    

export default Home_Gallery
