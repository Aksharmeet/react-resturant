import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Calender from '../Components/Calender/Calender';
import { useState } from 'react';

function Reservations() {
   
   const [state, setstate] = useState(true);
    const 
    return (
       <Div>
           <Width>
           <Info>
           <h1>Reservations</h1>

          
          </Info>
    
        <Main>
            <P>
            <Find state={state}>1. Find a Table</Find>
            <Details state={state}>2.Your Details</Details>
            </P>
        <FindATable state ={state}>
            <Options>
            <select id="select1">
                <option value="1">1 people</option>
                <option value="2">2 people</option>  
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
                <option value="7">7 people</option>
                <option value="8">8 people</option>
                <option value="9">9 people</option>
                <option value="10">10 people</option>
                <option value="11">11 people</option>
                <option value="12">12 people</option>
                <option value="13">13 people</option>  
                <option value="14">14 people</option>
                <option value="15">15 people</option>
                <option value="16">16 people</option>
                <option value="17">17 people</option>
                <option value="18">18 people</option>
                <option value="19">19 people</option> 
                <option value="20">20 people</option>
            </select>
            
            
            <Cal>
               <Calender/>
            </Cal>
            <select>
                <option value="5:00PM">5:00PM</option>
                <option value="5:30PM">5:30PM</option>
                <option value="6:00PM">6:00PM</option>
                <option value="6:30PM">6:30PM</option>
                <option value="7:00PM">7:00PM</option>
                <option value="7:30PM">7:30PM</option>
                <option value="8:00PM">8:00PM</option>
                <option value="8:30PM">8:30PM</option>
                <option value="9:00PM">9:00PM</option>
                <option value="9:30PM">9:30PM</option>
                <option value="10:00PM">10:00PM</option>
                <option value="10:30PM">10:30PM</option>
                <option value="11:00PM">11:00PM</option>
            </select>
           </Options>
       
        <Button onClick ={console.log(document.getElementById("select1").value)} onClick={() => setstate(false)}>Find A Table</Button>
        </FindATable>
        <YourDetails state={state}>
            <Form>
               
                <input type="text" placeholder="First Name" id="name" required></input>
              
                <input type="text" placeholder="Last Name" id="name" required></input>
                
                <input type="tel" placeholder="Phone Number" id="name" required></input>
                <input type="email" placeholder="Email" id="name" required></input>
                <select>
                    <option value='' disabled selected>Select an Occasion (optional)</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversery">Anniversery</option>
                    <option value="Date">Date</option>
                    <option value="BusinessMeal">Business Meal</option>
                </select>
                <input type="submit" value="Make Reservation"></input>
            </Form>
            <Details>

            </Details>
        </YourDetails>
        </Main>
        </Width>
        
        </Div>
      
    )
}

const Div= styled.div`
    background: linear-gradient(to bottom,#23074d, #cc5333); 
    padding-bottom:80px;
    min-height:1200px;
    
   
    
`
const Width = styled.div`
    max-width:800px;
    
`
const Info = styled.div`
   
    padding:200px 50px 100px 50px;
    font-family:lato;
    word-spacing:3px;
    letter-spacing:1px;
    color:#fffc;
    text-align:center;
h1{
    font-family:cinzel;
    font-weight:400;
   
}
p{
    line-height:1.7rem;
    margin:40px auto 0px auto;
    font-size:.9rem;
    max-width:700px;
}
`
const Find = styled.p`

    color:${props => props.state ? '#ad1111' : '#000' };
`
const Details = styled.p`
    color:${props => !props.state ? '#ad1111' : '#000' };
`
const Main = styled.div` 
    color:#000;
    width:90%;
    text-align:center;
    p{
        margin:0;
        margin-right:30px;
    }
  
   
   
  
                                
   
`
const P = styled.div
`   
background-color:#fff;
    margin-top:100px;
    padding:30px 0px 10px 20px;
    font-weight:500;
    display:flex;
    justify-content:;
    font-family:cinzel;
    border-bottom:1.5px solid #e4e3e3;
    

  
`
const FindATable = styled.div`
    background-color:#fff;
    transition: transform .3s;
    transform : ${props => props.state ? 'translateX(0)' : 'translateX(-100vw)'};
    position:${props => props.state ? '' : 'absolute'};

`
const Options = styled.div`
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:40px 20px 40px 20px;
   
    
    
    select{
      
        
    }
    input{
       
        
    }
    
    select{
        font-family:lato;
        font-size:1rem;
        height:50px;
        width:34.3%;
        border-radius:0;
        margin:0;
        cursor:pointer;
       

    }

   
     @media(max-width:627px){
       
        select,button{
            min-width:1px;
        }
        button{
           width:100%;
        }
     }
     
`
const Button = styled.button`
    display:inline-block;
    background-color:#ad1111;
    border:none;
    color:#fff;
    height:51px;
    width:34.3%;
    cursor:pointer;
    font-family:lato;
    font-size:1rem;
    margin:0 auto 40px auto;

 
`
const Cal = styled.div`
    border-top: 1px solid #000;
    margin:0;
    
    input{
        padding:15.5px 0px 14.5px 5px;
        font-family:lato;
        font-size:1rem;
        cursor:pointer;
    }
    
`
const YourDetails = styled.div`
transform: ${props => props.state ? "translateX(100vw)" : "translateX(0)"};
background-color:white;
padding:20px
`
const Form = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
   
    input,select{
        cursor:pointer;
        margin:20px 0;
        width:50%;
        height:40px;
        padding-left:5px;
        border-radius:5px;
        border:1px solid #000;
    }
    input[type=submit]{
        padding-left:0;
        width:100%;
        background-color:#ad1111;
        color:#fff;
        border-style:none;
      
    }
`


export default Reservations
