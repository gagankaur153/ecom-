import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Appcontext from '../Context/Appcontext';



const Cart = () => {
  const navigate = useNavigate()
 const { fetchcarts, carts,quantityDecrease,dec,inc,remove,quantityIncrease,quantityRemove,deletecart} = useContext(Appcontext)

  
  useEffect(()=>{
    fetchcarts()
  },[dec,inc,remove])
 

  const decrease = (id)=>{
    quantityDecrease(id)
  }

  const increase = (id)=>{
    quantityIncrease(id)
  }

  const rremove = (id)=>{
    quantityRemove(id)
  }

  const btnhandler = ()=>{
    navigate('/shipping')
  }
 
  const clearcart = ()=>{
    deletecart()
  }

  return (
   <>
     <div className='flex flex-col gap-4 p-4 m-4'>
      <div className='flex justify-center p-2 gap-4 md:gap-8'>
      <p className='bg-sky-600 px-4 py-2 text-black rounded font-bold text-xl'>Total Qty:- {carts?.totalquantity}</p>
        <p className='bg-yellow-600 px-4 py-2 text-black font-bold rounded text-xl'>Total Amount:- {carts?.totalamount}</p>
      </div>
     <div className='  m-8 flex container flex-col gap-8'>
     {
            carts?.item.map((product)=>(
                <div key={product._id} className=' bg-zinc-900 p-2 flex items-center md:justify-around  '>
               <div className='flex items-center'>
               <img className=' md:w-[100px] md:h-[100px] rounded-xl ' src={product?.image}/>
               </div>
                 <div className='flex flex-col justify-center font-bold'>
                 <p className='md:text-4xl ' >{product?.productid?.title}</p>
                  <p className=' md:text-2xl text-center  '>{product.price}</p>
                  <p className='md:text-xl text-center' >{product?.quantity}</p>
                 </div>
                 <div className='flex items-center gap-4 '>
                  <button className='bg-yellow-500 btn btn-primary md:px-5 py-1 md:text-2xl rounded text-black font-bold ' onClick={()=>decrease(product?.productid?._id)} >Qty--</button>
                  <button className='bg-sky-500  btn-primary md:px-5 py-1 md:text-2xl rounded text-black font-bold'onClick={()=>increase(product?.productid?._id)} >Qty++</button>
                  <button className='bg-red-500  btn-primary md:px-5 py-1 md:text-2xl rounded text-white font-bold'onClick={()=>rremove(product?.productid?._id)} >Remove</button>
                 </div>
    
              </div>
              )
    
              )
            }
     </div>
     <div className='flex justify-center p-2 gap-4 md:gap-8'>
      <button className='bg-sky-600 px-4 py-2 text-black rounded font-bold text-xl' 
      onClick={()=>btnhandler()}  >Checkout</button>
      <button className='bg-red-500 px-4 py-2 text-black font-bold rounded text-xl' 
      onClick={clearcart}
      >Clear</button>
     </div>
     </div>
   </>
  )
}

export default Cart
