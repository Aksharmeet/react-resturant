import React from 'react'
import styled from 'styled-components'
import {ReactComponent as EmptyCart} from '../../svgs/empty_cart 1svg.svg'
import { NavLink } from 'react-router-dom'
function Order(props) {
    
    const button = props.button
   const foodAdded = button.filter(data => data.orderCount > 0);
   const dispatch =props.dispatch;
   let TotalAmount;
    function CalculateTotal() {
        const TotalArray =foodAdded.map(items => {
            const total = items.orderCount * items.price
            return total;
          })
       
        if(TotalArray.length >= 1){
             TotalAmount = TotalArray.reduce((prevItems, currentItems) => prevItems + currentItems );
            return TotalAmount;
        }
       
    }
   CalculateTotal()
  
    return (
        <Main>
         { TotalAmount &&
          <MainCart>
            <h1>Cart:</h1>
            <div className="hr"/>
            <Titles>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p className='total'>Amount</p>
            </Titles>
            <div className="hr1"/>
            {foodAdded.map((items) =>

            <CartItems key={items.id}>
                <InnerCart>
                <p>{items.title}</p>
                <p className='price'><span className='ruppee'>&#8377;</span>{items.price}</p>
                <Quantity>
                <button onClick={() => dispatch({type: 'decrement/COUNT_ORDER', payload: {id :items.id}})}>-</button>
                <p>{items.orderCount}</p>
                <button onClick={() => dispatch({type: 'increment/COUNT_ORDER', payload: {id :items.id}})}>+</button>
                </Quantity>
                <p className='total'>{items.orderCount * items.price }</p>
                </InnerCart>
                <div className="hr"/>
            </CartItems>
           
             )}
             <Total_GoBack>
                <TotalAmounte>
                    <p>Total:</p>
                    <p>{TotalAmount}</p>
                </TotalAmounte>
                <NavLink to="/Menu">
                        <GoBack>
                        <div className='arrow'>&larr;</div>
                        <p>Menu</p>
                        </GoBack>
                </NavLink>
            </Total_GoBack>
           
            </MainCart>
            }
            {!TotalAmount &&
             <MainEmpty>
                 <div className='emptyCart'>
                     <h1>Cart is Empty</h1>
                 </div>
                 <Svg>
                 <EmptyCart/>
                 </Svg>
                 <NavLink to="/Menu">
                     <EmptyCart_GoBack>
                        <GoBack>
                        <div>&larr;</div>
                        <p>Menu</p>
                        </GoBack>
                    </EmptyCart_GoBack>
                </NavLink>
             </MainEmpty>
            
             }
        </Main>
    )
}
const Main =styled.div`
    font-family:lato;
    padding:100px 40px;
    color:#000000af;
  
    a{
        text-decoration:none;
        color:#000;
     }
 
`
const MainCart = styled.div`
    .hr{
        height:2px;
        background:#000000;
    }
    .hr1{
        height:1px;
        background:#0000002f;
        margin:3px auto;
    }
    h1{
    font-size:2rem;
    font-weight:600;
    margin-bottom:10px;
    }
    p{
        
        font-size:1.5rem;
        font-weight:600;
        margin:20px 0 10px 0;
    }
`
const CartItems = styled.div`
 
  
  .hr{
    margin:3px auto;
    height:1px;
    background:#0000002f;
    }
  .total{
    text-align:left;
    }   
  .ruppee{
    position:relative;
    top:1.3px;
    }
    .total{
        text-align:right;
    }
  
  
  p{
        margin:0;
        font-size:1rem;
        font-weight:500;
       
  }

 
    
  }
`
const InnerCart = styled.div`
    display:flex;
    justify-content:space-between;
    div{
        display:flex;
        position:relative;
        text-align:center;
        align-items:center;
        margin:0;

    }
    p{
      width:150px;
    }
    
`
const Quantity  =styled.div`
    width:80px;
    button
    {
          font-family:monospace;
          font-weight:900;
          color:#000;
          background-color:#ffffffaf;
          width:80px;
          height:20px;
          border-radius:100px;
          border-style:none;
          cursor:pointer;
         
       
        &:hover{
            color:#fff;
            background-color:#feaa1a;
        
        }
`
const Titles = styled.div`
    display:flex;
    justify-content:space-between;
    p{
        width:100px;
    }
    .total{
        text-align:right;
    }
`
const Total_GoBack = styled.div`
    position:relative;
   
`
const TotalAmounte = styled.div`
    display:flex;
    justify-content:right;
    align-items:center; 
    gap:5px;
`
const EmptyCart_GoBack = styled.div`
    position:relative;
`
const GoBack = styled.div`
   display:flex;
   align-items:baseline;
   width:65px;
   margin:0;
   transition:transform .2s ;
   p{
    color:#000;
    font-size:1rem;
    
    }
    :hover{
        transform:translateX(-4px);
    }

    .arrow{
      width:100%:
     
    }
}
   
`

const MainEmpty = styled.div` 
    .emptyCart{
        display:block;
        margin:50px auto 500px auto;
        text-align:center;
    }

`
const Svg = styled.div`
    display:flex;
    justify-content:center;
    width:50%;
    max-width:400px;
    position:absolute;
    bottom:0px;
    left:0;
    right:0;
`

export default Order
