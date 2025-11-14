import React, { useContext, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import Appcontext from '../Context/Appcontext'

const Address = () => {
    const {addnewaddress, oldaddresss} = useContext(Appcontext)
 const [data,setdata] = useState({
    fullname: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    address: ""
 })
 

const inputhandler = (e)=>{
   const {name,value} = e.target
    setdata((prev)=>({
        ...prev,
        [name]: value
    }))
}

const click= (e)=>{
    e.preventDefault()
    addnewaddress(data?.fullname, data?.country, data?.state ,data?.city, data?.pincode, data?.address, setdata)
   
  }
 const useoldaddress = ()=>{
       oldaddresss()
  }
 

  return (
    <div className='bord m-4 max-w-8xl flex justify-center items-center '>
    <div className='border border-yellow-100 rounded m-5 w-full  p-8 mx-auto '>
        <div className='text-center text-3xl md:text-4xl font-bold'>
            <h1>Shipping Address</h1>
        </div>
        <div className='grid grid-cols-3 gap-4 w-full mt-9'>
          <div className='flex flex-col space-y-2 '>
            <label className='md:text-xl font-bold' >Full Name</label>
            <input type="text" className='py-1 bg-zinc-800 rounded border-white border'
            name='fullname' value={data.fullname} onChange={(e)=>inputhandler(e)} />
          </div>
        
          <div className='flex flex-col space-y-2 '>
            <label className='md:text-xl font-bold' >Country</label>
            <input type="text" className='py-1 bg-zinc-800 rounded border-white border'
              name='country' value={data.country} onChange={(e)=>inputhandler(e)}  />
          </div>
          <div className='flex flex-col space-y-2 '>
            <label className='md:text-xl font-bold'>State</label>
            <input type="text" className='py-1 bg-zinc-800 rounded border-white border' 
              name='state' value={data.state} onChange={(e)=>inputhandler(e)}  />
          </div>
          <div className='flex  flex-col  space-y-2 '  >
            <label className='md:text-xl font-bold'>City</label>
            <input type="text" className='py-1 bg-zinc-800 rounded border-white border' 
              name='city' value={data.city} onChange={(e)=>inputhandler(e)}  />
          </div>
          <div className='flex flex-col space-y-2 '>
            <label className='md:text-xl font-bold'>Pincode</label>
            <input type="text" className='py-1 bg-zinc-800 rounded border-white border'
              name='pincode' value={data.pincode} onChange={(e)=>inputhandler(e)}  />
          </div>
       
          <div className='flex flex-col space-y-2 col-span-3'>
            <label className='md:text-xl font-bold'>Address Line</label>
            <input type="text" className='py-2 bg-zinc-800 rounded border-white border w-full' 
              name='address' value={data.address} onChange={(e)=>inputhandler(e)} />
          </div>
        </div>
        <div className=' mt-5 flex items-center flex-col space-y-5 '>
            <button className='w-1/2 bg-blue-600 py-1 md:text-xl font-semibold text-white ' onClick={(e)=>click(e)}
           >Submit</button>
            <button className='w-1/2 bg-yellow-600 py-1 md:text-xl font-semibold text-black' onClick={()=>useoldaddress()}>Use Old Address</button>
        </div>
    </div>
    </div>
  )
}

export default Address

