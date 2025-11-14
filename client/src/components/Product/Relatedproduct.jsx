import React, { useContext, useEffect, useState } from 'react'
import Appcontext from '../Context/Appcontext'
import { NavLink } from 'react-router';

const Relatedproduct = ({category}) => {
    const {products} = useContext(Appcontext)
    const [realtedprodcts,setrealtedproduct] = useState([])
    useEffect(()=>{
      setrealtedproduct(products?.filter((item)=> item?.category?.toLowerCase() == category?.toLowerCase()))
    },[category,products])
  
  return (
    <div className='d-flex items-center justify-center'>
    {
          realtedprodcts && <div className='text-white gap-2 md:gap-6  justify-items-center p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
          
              { realtedprodcts.map((product)=>(
                <div  key={product._id} className="card rounded-xl my-4 p-4 h-fit bg-gray-900"  >
               <NavLink to={`/singleproduct/${product._id}`}  className='flex justify-center m-2 rounded-xl  items-center '>
               <img src={product.image} className="card-img-top rounded-xl border border-yellow-600 " style={{width:["150px"], height:["200px"]}} alt="..."/>
               </NavLink>
                <div className="card-body text-base md:text-xl">
                  <h5 className="card-title">{product.title}</h5>
                  <div className=' items-center justify-center gap-2 lg:flex p-2 '>
                  <button className="btn mb-2 lg:mb-0 btn-primary  px-1 bg-blue-600">Price: {product.price}</button>
                  <button className="btn  btn-danger px-1  bg-yellow-600">Add to cart</button>
                  </div>
                </div>
              </div>
              ))}
          </div>
      }
    </div>
  )
}

export default Relatedproduct
