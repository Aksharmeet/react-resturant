import React from 'react'
import styled from 'styled-components'

function Order(props) {
    
    const button = props.button
   const foodAdded = button.filter(data => data.orderCount > 0);
   const dispatch =props.dispatch;
  console.log(foodAdded);
  
    return (
        <Main>
            <h1>Cart:</h1>
            <div className="hr"/>
            <Titles>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p className='total'>Total</p>
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
            
        </Main>
    )
}
const Main =styled.div`
    font-family:lato;
    padding:100px 40px;
    color:#000000af;
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
export default Order
