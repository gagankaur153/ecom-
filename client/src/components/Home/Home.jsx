import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LuFilter } from "react-icons/lu";

const Home = () => {
    const [data,setdata] = useState(null)
    

    const getallproduct = ()=>{
        axios.get('http://localhost:4000/product/allproduct')
        .then((res)=>{
            setdata(res.data.data)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{getallproduct()},[])
  return (
    <div className='mx-auto  '>
     <div className= 'hidden md:flex w-full justify-around bg-blue-800 t md:text-lg text-white font-semibold py-5 md:py-3'>
        <p>No Filter</p>
        <p>Mobiles</p>
        <p>Laptops</p>
        <p>Tablets</p>
        <p>Camera's</p>
        <p>Headphones</p>
     </div>
     <div className='md:hidden bg-black p-4 text-3xl text-white '>
        <LuFilter />

     </div>

     <div className=' overflow-scroll p-5 h-[90vh] bg-black'>
      <div className=' bg-gray-800'>
      {
            data && <div className='text-white  gap-2 lg:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols- '>
            
                {data.map((product)=>(
                  
                  <div className="card rounded-xl  h-fit bg-gray-900"  >
                 <div className='flex justify-center bg-gray-800 m-2 rounded-xl  items-center '>
                 <img src={product.image} className="card-img-top rounded-xl border border-yellow-600 " style={{width:["150px"], height:["200px"]}} alt="..."/>
                 </div>
                  <div className="card-body text-base md:text-xl">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: {product.price}</p>
                    <a href="#" className="btn bg-blue-800 btn-primary">Add to cart</a>
                  </div>
                </div>
                    
                ))}
            </div>
        }
      </div>
     </div>
    </div>
  )
}

export default Home
