import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Calender from '../../Components/Calender/Calender';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import {
    Booking,
    Info,
    Main,
    P,
    Find,
    Details,
    FindATable,
    Options,
    Cal,
    Button,
    Error,
    YourDetails,
    Form,
    YDetails,
    E } from './styling/Booking';
import {Reserved,
        Success} from './styling/Reserved';



function Reservations() {
   
   const [state, setstate] = useState(true);
   const [select1, setSelect1] = useState('');
   const [select2, setSelect2] = useState('');
   
  
   const [Reservation, setReservation] = useState(false);
   
   useEffect(() => {
    window.scrollTo(
        {
            top:0,
            behavior:'smooth',
        }
    )
   
    }, [Reservation,state])

    const [count, setCount] = useState(0);
    let error = "";
    const validate = () =>{
       
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




   const [user, setUser] = useState({
       fName:'', lName: "", number: "", email: "", occassion: ""
   });
   const [userErrors, setUserErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
   let name, value;
   const handleInputs = (e) => {
        
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});

       
   }



   const handleSubmit = (e) => {
     e.preventDefault();
     setUserErrors(validate2(user));
     if (userErrors.fName || userErrors.lName || userErrors.number || userErrors.email === " " ){
     return  setIsSubmit(true);
   }
    
      
       
     
   }
  
   const errors = {}
   const validate2 = (values) => {
      
        const mailReg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const telReg = new RegExp(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/);
        ;
        if (!values.fName.trim()){
            errors.fName = "First name is required";
        } else if(values.fName.length < 4){
            errors.fName = "First name must be atleast 4 letters";
        } else{
            errors.fName = " ";
        }


        if (!values.lName.trim()){
            errors.lName = "Last name is required";
        }else{
            errors.lName = " ";
            }
        


        if (!values.number){
            errors.number = "Number  is required";
        }
        else if(!telReg.test(values.number)){
                errors.number = "Please enter valid mobile number";
        }
        else{
            errors.number = " ";
        }


        if (!values.email){
            errors.email = "E-mail  is required";
        } else if(!mailReg.test(values.email)) {
            errors.email = "Please enter valid E-mail Address";
        } else {
            errors.email = " "
        }
        return errors;
   }
   
   useEffect(() =>{
     
       if(Object.keys(userErrors).length === 0 && isSubmit){
         
       }
   })
 
    return (
       <Div>
            <Booking ReservationStatus ={Reservation}>
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
        
                        <Button  onClick = {validate() ? () => setstate(false) : () =>  setCount(1)}>Find A Table</Button>
                        {(count == 1) ? <Error> <p>{error}</p ></Error> 
                        : <Error></Error>}
                      
                    </FindATable>
                    <YourDetails state={state}>
                  
                        <Form state ={state} onSubmit={handleSubmit}>
                        
                            <input type="text" placeholder="First Name" value = {user.fName} name="fName" onChange={handleInputs}></input>
                            {<E>{userErrors.fName}</E>}
                        
                            <input type="text" placeholder="Last Name" value = {user.lName} name="lName" onChange={handleInputs}></input>
                            {<E>{userErrors.lName}</E>}
                            
                            
                            <input type="tel" placeholder="Phone Number" value = {user.number} name="number" onChange={handleInputs} r></input>
                            {<E>{userErrors.number}</E>}
                            <input type="text" placeholder="Email" value = {user.email} name="email" onChange={handleInputs}></input>
                            {<E>{userErrors.email}</E>}
                            <select defaultValue= "Select an Occasion (optional)">

                                <option value="Birthday">None</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversery">Anniversery</option>
                                <option value="Date">Date</option>
                                <option value="BusinessMeal">Business Meal</option>

                            </select>
                         
                            <input className="button" type="submit" value="Make Reservation" onSubmit={handleSubmit} onClick={isSubmit ? () => setReservation(true) : () => setReservation(false)}></input>
                            

                        </Form>
                        <YDetails state ={state}>
                            <h3>The Resturant</h3>
                            <h4>Delhi</h4>
                            <h6>Number of Guest: {select1}</h6>
                            <h6>At: {select2}</h6>
                            <div></div>
                            <h6>What to know before you go</h6>
                    
                            <p>We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.</p>

                            <p>We may contact you about this reservation, so please ensure your email and phone number are up to date.</p>

                            <p>Your table will be reserved for 2 hours.</p>
                            <p>

                            </p>
                        </YDetails>
                    </YourDetails>
                </Main>
            </Booking>


            <Reserved ReservationStatus={Reservation}>
                <Success>
                    <div>
                        <FontAwesomeIcon icon={faCheckCircle} size="3x"></FontAwesomeIcon>
                    </div>
                    <div>
                        <h6>Your Table has been confirmed!</h6>
                        <p>An email confirmation has been sent to you.</p>
                        <p>Confirmation No. : {count}</p>
                    </div>
                </Success>
            </Reserved>
        
        </Div>
      
    )
}

const Div= styled.div`
    background: url(./images/Reservation-bg.jpg);
    background-size:cover;
    padding-bottom:80px;
  
    min-height:500px;
   
    
`



export default Reservations
