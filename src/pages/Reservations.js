import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Calender from '../Components/Calender/Calender';
import { useState } from 'react';
import { normalizeUnits } from 'moment';


function Reservations() {
   
   const [state, setstate] = useState(true);
   const [select1, setSelect1] = useState('');
   const [select2, setSelect2] = useState('');
   const [count, setCount] = useState(0)
   let error = "";
   const retry = () =>{
        if(select1 == ''){
           error = "error: please select number of guests";
            return false;
        } 
        if(select2 == ''){
            error = "error: please select your of prefrred time";
            return false;
        } 
        return true;
        

   }
    return (
       <Div>
           <Width>
           <Info>
           <h1>Reservations</h1>

          
          </Info>
    
        <Main>
            <P>
            <Find state={state} onClick={() => setstate(true)}>1. Find a Table</Find>
            <Details state={state}>2.Your Details</Details>
            </P>
        <FindATable state ={state}>
            <p>We don't take reservation for more than 45-Days prior.</p>
            <Options>
            <select  onChange ={(e) => setSelect1(e.target.value)} value={select1} >
                <option value=""   disabled hidden>No. of People</option>
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
               <Calender selectedDate = {Calender.selectedDate}/>
            </Cal>
            <select onChange ={(e) => setSelect2(e.target.value !== null ? e.target.value : "5:00PM")} value={select2}>
            <option value=""   disabled hidden>Time</option>
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
        
        <Button  onClick={retry() ? () => setstate(false) : () =>   setCount(1)}>Find A Table</Button>
        {(count == 1) ? <Error> <p>{error}</p ></Error> 
        : <Error></Error>}
        
        </FindATable>
        <YourDetails state={state}>
            <Form>
               
                <input type="text" placeholder="First Name" id="name" required></input>
              
                <input type="text" placeholder="Last Name" id="name" required></input>
                
                <input type="tel" placeholder="Phone Number" id="name" required></input>
                <input type="email" placeholder="Email" id="name" required></input>
                <select defaultValue= "Select an Occasion (optional)">
                <option value="Birthday">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversery">Anniversery</option>
                    <option value="Date">Date</option>
                    <option value="BusinessMeal">Business Meal</option>
                </select>
                <input className="button" type="submit" value="Make Reservation" onClick={console.log('g')}></input>
            </Form>
            <YDetails >
               
            <h6>Number of Guest:</h6><p>{select1}</p>
            <h6></h6><p>{select2}</p>
            <div></div>
            <h6>What to know before you go</h6>
            <p>mportant dining information
            We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.

            We may contact you about this reservation, so please ensure your email and phone number are up to date.

            Your table will be reserved for 2 hours.</p>

            <p>
                
            </p>
            </YDetails>
        </YourDetails>
        </Main>
        </Width>
        
        </Div>
      
    )
}
const Error = styled.div`
    position:absolute;
    bottom:150px;
    left:5px;
    color:#ad1111;

    
`
const Div= styled.div`
    background: linear-gradient(to bottom,#23074d, #cc5333); 
    padding-bottom:80px;
    min-height:1200px;
    
   
    
`
const Width = styled.div`
    width:700px;  
    // 730px media queries
   
    
`
const Info = styled.div`
   
    padding:150px 50px 0px 50px;
    font-family:lato;
    word-spacing:3px;
    letter-spacing:1px;
    color:#fffc;
    text-align:;
    h1{
        font-family:cinzel;
        font-weight:400;
    
    }

`
const Find = styled.p`

    color:${props => props.state ? '#ad1111' : '#000' };
    cursor:pointer;
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
    margin-top:20px;
    padding:30px 0px 10px 20px;
    display:flex;
    justify-content:;
    font-family:Lustria;
    font-weight:700;
    border-bottom:1.5px solid #e4e3e3;
    font-size:1.1rem;
    
`
const FindATable = styled.div`
    background-color:#fff;
    transform : ${props => props.state ? 'translateX(0)' : 'translateX(-100vw)'};
    position:${props => props.state ? '' : 'absolute'};
    
    p{  
        text-align:left;
       padding-top:30px; 
       margin-bottom:-20px;
       margin-left:20px;
       font-family:monospace;
       letter-spacing:-1px;
       word-spacing:-2px;
       font-size:1rem
    }

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
    select{
        :focus{
           border:1px solid #ad1111;
        }
        
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
    margin:25px auto 40px auto;
    transition:all .3s; 
        box-shadow:0px 2px 5px  #000000;
        &:hover{
            background-color:#9d1111;
            
        }
        &:active{
            box-shadow:0px 0px 0px #888888;
        }

 
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
padding:20px;
display:flex;
justify-conent:space-between;
align-items:top;

`
const Form = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    margin:0;
    input,select{
        font-family:lato;
        font-size:1rem;
        height:50px;
        cursor:pointer;
        margin:20px 0;
        width:300px;
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
        transition:all .3s; 
        box-shadow:0px 2px 5px  #000000;
        &:hover{
            background-color:#9d1111;
            
        }
        &:active{
            box-shadow:0px 0px 0px #888888;
        }

      
    }
`
const YDetails = styled.div`
    margin-top:20px;
`


export default Reservations
