import React from 'react'
import { IndianMenu } from './MenuComponents/Data'
function Menu() {
    let images=[];
    IndianMenu.map((items) => images.push(items.img))
    return (
        <div>
            {console.log(images)}
         {images.forEach((image) =>  <img key={image} href={image}/>)}
       
        
        </div>
    )
}

export default Menu
