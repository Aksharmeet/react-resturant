
import styled from 'styled-components'


export const Booking = styled.div`
    width:700px;  
    opacity:${props => props.ReservationStatus ? "0" : ""};
    height:${props => props.ReservationStatus ? "0" : ""};
    pointer-events:${props => props.ReservationStatus ? "none" : ""};
  
    @media (max-width:730px){
        width:100%;
    }
`
export const Info = styled.div`
   
    padding:150px 50px 0px 50px;
    font-family:lato;
    word-spacing:3px;
    letter-spacing:1px;
    color:#fff;
    text-align:;
    h1{
        font-family:cinzel;
        font-weight:500;
    
    }

`
export const Find = styled.p`

    color:${props => props.state ? '#ad1111' : '#000' };
    cursor:pointer;
`
export const Details = styled.p`
    color:${props => !props.state ? '#ad1111' : '#000' };
`
export const Main = styled.div` 
    color:#000;
    width:90%;
    text-align:center;
    p{
        margin:0;
        margin-right:30px;
    }
   @media (max-width:730px){
    width:100%;
    }
   
   
  
                                
   
`
export const P = styled.div
`   
    background-color: #e0e0e0;
    margin-top:20px;
    padding:30px 0px 10px 20px;
    display:flex;
    justify-content:;
    font-family:Lustria;
    font-weight:700;
    border-bottom:1.5px solid #000;
    font-size:1.1rem;
    
`
export const FindATable = styled.div`
    background-color: #e0e0e0;
    opacity : ${props => props.state ? '' : '0'};
    position:${props => props.state ? '' : 'absolute'};
    pointer-events: ${props => props.state ? " " : "none"};
    
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
export const Options = styled.div`
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:40px 20px 40px 20px;
   

    
    select{
    
        
    }
    input{
        
        
    }
   
    select{
        appearance:none;
        background-color: #e0e0e0;
        font-family:lato;
        font-size:1rem;
        
        width:34.3%;
        border-radius:0;
        margin:0;
        cursor:pointer;
        padding-left:10px;
        padding:15px 15px 14px 15px;
       
    

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
export const Button = styled.button`
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
export const Cal = styled.div`
    border-top: 1px solid #000;
    margin:0;
   
    input{
        padding:15.5px 0px 14.5px 5px;
        font-family:lato;
        font-size:1rem;
        cursor:pointer;
    }
    
`

export const YourDetails = styled.div`
    opacity: ${props => props.state ? "0" : " "};
    postion:absolute;
    pointer-events: ${props => props.state ? "none" : " "};
    background-color:#e0e0e0;
    padding:20px;
    display:flex;
    justify-conent:space-between;
    align-items:top;
    @media (max-width:730px){
        flex-direction:column-reverse;
    }

`
export const Form = styled.form`    
    height: ${props => props.state ? "0" : ""};
  
    display:flex;
    flex-direction:column;
    align-items:left;
    margin:0;
    input,select{
        background-color:#e0e0e0;
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
    @media (max-width:730px){
        input,select{
            width:100%;
        }
    }
   
`
export const YDetails = styled.div`
    height: ${props => props.state ? "0" : ""};
    margin-top:20px;
    padding-left:20px;
    text-align:justify;
    font-family:lato;
    font-size:1rem;
    font-weight:400;
    p{
        color:rgba(0, 0, 0, 0.6);
        line-height:1.4rem;
        margin-bottom:10px;
    }
    h3{
        font-family:cinzel;
        font-size:1.5rem;
        font-weight:700
    }
    h4{
        font-weight:300;
        margin-bottom:10px;
    }
    div{
        height:1px;
        background-color:rgba(0, 0, 0, 0.2);
        margin:20px 0;
    }
    h6{
        font-size:1rem;
        font-weight:400;
        margin:10px 0;
       
    }
    @media (max-width:730px){
        padding-left:0px;
    }
`
export const Error = styled.div`
    position:relative;
    margin:-20px 0;
    bottom:130px;
    left:10px;
    color:#ad1111;
    p{
        
        padding-top:0;
    } 

`




