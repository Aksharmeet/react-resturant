import React from 'react'
import styled from 'styled-components'
function Contact() {
    return (
        <ContactWrapper>
             <h6>
                Location & Contact
            </h6>
            <FlexWrapper>
            <Div>
           
            <p>
                Telephone:
                <br/>
                <a href="tel:8587813436">+91 8587813436</a>
            </p>
            <p>
                Location:
                <br/>
                Red Fort,
                <br/>
                Delhi
                <br/>
                <a href="https://www.google.com/maps/place/Red+Fort/@28.6561592,77.2388316,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfce26ec085ef:0x441e32f4fa5002fb!8m2!3d28.6561592!4d77.2410203" target="_blank">Directions</a>
            </p>
            <p>
               Email:
                <br/>
                <a href="mailto:aksharmeetsingh21@gmail.com" target="_blank">aksharmeetsingh21@gmail.com</a>
            </p>
            </Div>
            <HoursWrapper>
                <h5>
                    HOURS
                </h5>
                <p>Wednesday & Thursday | 6pm - 11pm</p>
                <p>Friday & Saturday | 5:30pm - 11:30pm</p>
                <p>Sunday Brunch |11am - 4pm</p>
            </HoursWrapper>
            </FlexWrapper>
        </ContactWrapper>
    )
}

const ContactWrapper = styled.div`
   padding:150px 50px;
   

    font-family:cinzel;
    background-color:#000000f0;
    color:#ffffffcf;

   
    p{
        font-size:1rem;
        margin:30px auto; 
        font-family:lato;
        line-height:1.8rem;
    }
    a{
        color:#ffffff80;
        text-decoration:none;
        position:relative;
        top:2px;

        &:hover{
            color:#ffffffcf;
        }
    }
    h6{
        font-size:3rem;
        
    }

`
const FlexWrapper = styled.div`
display: flex;
@media (max-width:1000px){
    flex-direction:column;
}
`
const Div = styled.div`
    
    margin:100px auto;
    width:700px;
    @media (max-iwdth:1000px){
        margin-bottom:auto;
    }

`
const HoursWrapper = styled.div`
    max-width:500px;
    width:100%;
    border: 4px solid #ffad00cf;
    display:flex;
    flex-direction:column;
    padding:20px;
    height:fit-content;
    margin:150px auto 200px auto;

    p{
        line-height:0rem;
    }
    @media (max-width:1000px){
       
        margin-bottom:150px;
    }
    
`

export default Contact
