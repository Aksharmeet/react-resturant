import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import a from "../../images/Dining.jpg"
function Home_Info() {
    return (
        <Div>
            <Section>
                <Contact>
                <span>Hours of Operation</span>
                <p>1615 Cahuenga Blvd, Los Angeles, CA 90028 | 323.676.8880 A Tao Group Hospitality Property</p>
                </Contact>
                <InnerSection>
               <Text>
                   <h6>
                        CHEF AKSHARMEET & RADISSON GROUP HOSPITALITY PERSENT
                   </h6> 
                   <h5>
                        THE RESTURANT
                   </h5>
                   
                    <p>
                    The third location of The Resturant occupies 10,000 square feet of space on North World. The menu features Chef Aksharmeet’ signature multi-ethnic dishes including: Grilled Cheese and Chicken Tandoori, Tuna Poke Wonton Tacos, and Oven Braised Chicken Meatballs. 
                    </p>
                    <NavLink to="/Menu">
                        <Button>
                         <p>View Menu</p>
                        </Button>
                    </NavLink>
               </Text>
              
               <Image>
                    <Img >
                    </Img>
               </Image>
               </InnerSection>
               <Contact>
                <span>Best In Delhi</span>

                </Contact>
            </Section>
        </Div>
    )
}
const Div = styled.div`
    display:flex;
    justify-content:center;
    a{
        text-decoration:none;
    }
`
const Section = styled.section`
    background-color:#13121b;
   
`
const Contact =styled.div`
    background-image:url("images/divider.webp");
    background-size:20%;
    background-repeat:no-repeat;
    background-position: bottom;
    text-align:center;
    line-height:50px;
    color:#fff;
    margin:40px auto 80px auto;
    padding-bottom:5%;
    span{
        color: rgb(200,200,200);
        transition:color .2s;
        font-family:Cinzel;
    }
    span:hover{
        color: rgb(255,255,255);
    }
    p{
        font-family:lato;
        font-weight:200;
        letter-spacing:1px;
        font-size:13px;
    }
`
const InnerSection = styled.div`
    display:flex;
    @media (max-width:880px){
        flex-direction:column;
        height:auto;
        padding:0 20px;
        
    }
`
const Text = styled.div`
    margin:40px 0 40px 40px; 
    padding:40px 0 40px 40px;
    text-align:left;
    background-color:#e0e0e0;
    width:50%;
   
    h5{
        font-family:Lustria;
        font-size:3rem;
        font-weight:400;
        letter-spacing:5px;
        margin:40px 0;
    }
    h6{
        font-family:Lato;
        font-size:1rem;
        font-weight:300;
        letter-spacing:3px;
        
    }
    p{
        font-size:1rem;
        font-weight:400;
        font-family:lato;
        text-align:justify;
        margin-right:10%;
        letter-spacing:1px;
        line-height:1.4rem;
       
    }
    @media (max-width:880px){
        margin:40px auto; 
        width:100%;

        
    }
     
  
   
   
`
const Button = styled.div`
    margin:0; 
    margin-top:20px;
    background-color:#000;
    color:white;
    width:200px;
    padding:20px 30px;
    transition:all .5s;
    p{
        text-align:center;

    }
    &:hover{
        background-color:#242230;
    }
    
   

`
const Img = styled.img`
    height:100%;
    max-height:80vh;
    margin: 40px 20px 40px auto;
    @media (max-width:880px){
        margin: auto;
        max-height:none;
        height:auto;
        width:100%;
        
    }

    
`
Img.defaultProps = {
    src: a,
}
  

const Image = styled.div`
    width:50%;
    display:flex;
    margin:40px 40px 40px 0px; 
    background-color:#e0e0e0;

    @media (max-width:880px){
        width:100%;
        padding:20px;
        margin: 40px 40px 40px 0; 
    }
    
`


export default Home_Info
