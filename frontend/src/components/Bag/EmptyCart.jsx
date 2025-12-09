import React from 'react'
import logo from '../../assets/images/empty-cart.png'

const EmptyCart = () => {
  return (
    //make a div center aligned both vertically and horizontally
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <img className='h-20 w-20' src={logo} alt="Empty Cart" />
        <h2 className='mt-8'>Cart is empty</h2>
    </div>
  )
}

export default EmptyCart