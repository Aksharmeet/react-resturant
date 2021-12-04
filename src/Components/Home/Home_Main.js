import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
function Home_Main() {
    return (
        <div>
            <Main>
            <h2>THE RESTURANT</h2>
            <h4>New Delhi</h4>
            <NavLink to="/Reservations">
                <MakeReservation>
                    <p>Make A Reservation</p>
                </MakeReservation> 
            </NavLink>
            <Covid19>
               <NavLink to="Covid">
                    <p>Covid-19 Health & Safety Policy</p>
               </NavLink>
            </Covid19>
            </Main>
         
        </div>
    )
}
const Main = styled.main`
    padding-top: 30vh;
    height:100vh;
    background-image: linear-gradient(to bottom, #33333392, #0012189d), url(/images/Home_main.jpg);
    background-size:cover;
    color:#fff;
    font-family:Lato;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    a{
        color:#fff;
        text-decoration:none;
    }
    h2{
        font-size:3em;
        font-family:Cinzel;
        font-weight:400;
        word-spacing:10px;
        
    }
    h4{
        margin-top:2px;
        font-family:monospace;
        font-size:1.4em;
        font-weight:200;
        word-spacing:-2px;
    }
    

`
const MakeReservation = styled.div`
    width:300px;  
    border-top:2px solid #a11212;
    border-bottom:2px solid #a11212;
    margin:40px auto;
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

const Covid19= styled.div`

    font-weight:200;
    letter-spacing:5px;
    border-bottom:2px solid #fff;

` 

export default Home_Main
