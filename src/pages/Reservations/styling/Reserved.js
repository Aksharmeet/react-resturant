import styled from 'styled-components'


export const Reserved = styled.div`
    width:90%;
    max-width:700px;
    background-color:#e0e0e0;
    margin:200px auto;
    display:${props => props.ReservationStatus ? " " : "none"};
    
    
`

export const Success = styled.div`
    background-color:#4a934a;
    color:#fff;
    display:flex;
    align-items:center;
    padding:1%;
    h6{
        font-family:lastro;
        font-weight:500;
        font-size:1.7rem;
        letter-spacing:.08rem;
        margin:5% auto; 
    }
    p{
        font-family:helvetica;
        font-weight:300;
        font-size:1rem;
        margin:2% auto;
    }
    div{
        margin:20px;
    }
`



