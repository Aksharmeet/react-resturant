import React from 'react'
import styled from 'styled-components'
import {IndianMenu} from "./Menu/MenuComponents/Data"
import { useState } from 'react';
function Gallery() {
    const VegMain = IndianMenu.filter((items) => items.category === "vegMain");
    const NonMain = IndianMenu.filter((items) => items.category === "nonMain");
    const Biryani = IndianMenu.filter((items) => items.category === "biryani");
    const Beverages = IndianMenu.filter((items) => items.category === "beverages");

  
    return (
        <GalleryWrapper> 
            {VegMain.map((items) => 
            <div>
            <img id ="veg0" src={items.img}></img>
            <HoverDisc><h5>{items.title}</h5> <p>{items.disc}</p></HoverDisc>
            </div>
            
            )}
             {NonMain.map((items) => 
            <div>
            <img id ="nonVeg0" src={items.img}></img>
            <HoverDisc><h5>{items.title}</h5> <p>{items.disc}</p></HoverDisc>
            </div>
            
            )}
            {Biryani.map((items) => 
            <div>
            <img id ="biryani0" src={items.img}></img>
            <HoverDisc><h5>{items.title}</h5> <p>{items.disc}</p></HoverDisc>
            </div>
            
            )}
            {Beverages.map((items) => 
            <div>
            <img id ="beverages0" src={items.img}></img>
            <HoverDisc><h5>{items.title}</h5> <p>{items.disc}</p></HoverDisc>
            </div>
            
            )}
            
 
        </GalleryWrapper>  
    )
}

const GalleryWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
padding-top:100px;
background-color:#000000f0;
    div{
        max-width:300px;;
        position:relative;
        margin-bottom:-140px;
        cursor:pointer;
       
    }
    img{
        width:100%;
        max-width:300px;
        height:300px;

        }


`
const HoverDisc = styled.div`
    
    color:#fff;
    position:absolute;
    bottom:65%;
    text-align:center;
    background-color:#faa01adf;
    height:300px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    p{
        width:250px;
        margin:20px;
        font-family:lato;
        font-size:1rem;
        line-height:1.7rem;
        
    }
    h5{
        font-family:cinzel;
        font-size:1.3rem;
        
    }
    opacity:0;
    transition:opacity .5s;
    &:hover{
       opacity:1;
    }
   

`

export default Gallery
