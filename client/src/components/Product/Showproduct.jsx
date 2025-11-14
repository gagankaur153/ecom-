import React, { useContext } from 'react'
import Appcontext from '../Context/Appcontext'
import { LuFilter } from "react-icons/lu";
import { NavLink, useNavigate } from 'react-router';


const Showproduct = () => {
    const {products,addcart,role} = useContext(Appcontext)
    const navigate = useNavigate()
   const updateproduct = (id)=>{
         navigate(`/updateproduct/${id}`)
   }
  return (
   <>
       <div className='sticky top-20 z-50'>
       <div className= 'hidden border md:flex w-full justify-around bg-blue-800 t md:text-lg text-white font-semibold py-5 md:py-3'>
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
       </div>


       <div className=' bg-black'>
      <div className='d-flex items-center justify-center'>
      {
            products && <div className='text-white gap-2 md:gap-6  justify-items-center p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            
                {products.map((product)=>(
                  <div key={product._id} className="card  rounded-xl my-4 p-4 h-fit bg-gray-900"  >
                 <NavLink to={`/singleproduct/${product._id}`}  className='flex justify-center m-2 rounded-xl  items-center '>
                 <img src={product.image} className="card-img-top rounded-xl border border-yellow-600 " style={{width:["150px"], height:["200px"]}} alt="..."/>
                 </NavLink>
                  <div className="card-body text-base md:text-xl">
                    <h5 className="card-title">{product.title}</h5>
                    <div className=' items-center justify-center gap-2 lg:flex p-2 '>
                    <button className="btn mb-2 lg:mb-0 btn-primary  px-1 bg-blue-600">Price: {product.price}</button>
                    {role !== "admin"? <>
                    <button  className="btn  btn-danger px-1  bg-yellow-600"
                    onClick={()=>addcart(product._id)}
                    >Add to cart</button>
                    </>: <>
                    <button  className="btn  btn-danger px-1  bg-yellow-600"
                    onClick={()=>updateproduct(product._id)}
                    >Update</button>
                    </>}
                    </div>
                  </div>
                </div>
                ))}
            </div>
        }
      </div>
     </div>
   </>
  )
}

export default Showproduct
