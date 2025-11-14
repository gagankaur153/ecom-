import axios from 'axios'
import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router'
import Appcontext from '../Context/Appcontext'
import Relatedproduct from './Relatedproduct'

const Singleproduct = () => {
    const {id} = useParams()
    const {fetchsingleproduct } = useContext(Appcontext)
    const [product,setproduct ] = useState('')
useEffect(()=>{
     fetchsingleproduct(id,setproduct)
},[id])
  return (
<>
<div className='flex  justify-center items-center'>
<div className="container flex justify-center m-8 ">
    <div className='w-1/2  m-2 flex justify-center'>
          <img className='w-[220px] h-[250px] rounded' src={product.image} alt="" />
    </div>
    <div className='w-1/2 m-2 flex flex-col justify-center items-start space-y-4'>
       
            <p className='text-4xl font-bold'>{product.title}</p>
            <p className='text-md'>{product.description}</p>
            <p className='text-3xl font-semibold text-center  w-full'>Rs: {product.price}</p>
            <div className=' flex items-center justify-center w-full gap-5 '>
            <button className='bg-red-600 font-semibold text-lg text-white px-2 rounded'>Buy Now</button>
            <button className='bg-yellow-400 font-semibold text-lg text-black px-2 rounded'>Add TO Cart</button>
            </div>
    </div>
</div>
</div>

<div className='m-9'>
    <h1 className=' text-white text-5xl text-center'>Related Products</h1>
   <Relatedproduct category={product?.category} />
</div>

</>
   
    
  )
}

export default Singleproduct
