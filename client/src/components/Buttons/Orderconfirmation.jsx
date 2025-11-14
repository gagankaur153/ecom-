import React, { useContext, useEffect } from 'react'
import Appcontext from '../Context/Appcontext'

const Orderconfirmation = () => {
  const {userorder,  recentlyorder } = useContext(Appcontext)
  useEffect(()=>{
        userorder()
  },[])
  console.log( "recenty order",recentlyorder )
  return (
    <div>
    <div className='flex items-center flex-col  m-6 space-y-2 '>
      <h1 className='font-semibold text-xl md:text-5xl'>Your order has been confirm ,</h1>
      <h2 className='font-semibold text-lg md:text-4xl'>it will delivered soon !</h2>
    </div>
    <div className='flex justify-center mt-10'>
     <div className='grid  border grid-cols-1 md:grid-cols-2 w-[80%]'>
      {/* left table */}
      <div className=' border-r p-4 pr-0 pl-0 '>
        <h2 className=' text-xl text-center border-b font-bold pb-2'>Order items</h2>
        {/* table */}
        <table className='border mt-10 m-5 text-center border-collapse '>
          <thead className=''>
            <tr className='border-b text-center'>
              <th className='p-2 border-r'>Product Img</th>
              <th className='p-2 border-r'>Title</th>
              <th className='p-2 border-r'>Price</th>
              <th className='p-2 border-'>Qty</th>
            </tr>
          </thead>
          <tbody className=''>
           {
            recentlyorder?.orderItems?.map((item)=>(
              <tr key={item._id} className='border-b text-center '>
                <th className='p-2 border-r '><img src={item?.image} className='w-[50px] h-[]100px' alt="" /></th>
                <th className='p-2 border-r'>{item?.productid?.title}</th>
                <th className='p-2 border-r'>{item?.price}</th>
                <th className='p-2 border-r'>{item?.quantity}</th>
                
              </tr>
            ))
           }
         <tr>
            <td className="p-2  text-center font-semibold text-blue-400">Total</td>
            <td></td>
            <td className="p-2 bg-yellow-500 text-black font-bold">{recentlyorder.amount}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>

      {/* Right table */}
      <div className='border-r p-4 pr-0 pl-0'>
      <h2 className='pb-2 text-xl text-center font-bold border-b'>Order Details & Shipping Address</h2>
     <div className='p-6 space-y-1'>
     <p className='p- font-semibold text-lg'>Order id : {recentlyorder?.orderId}</p>
      <p className='p- font-semibold text-lg'>Payment id : {recentlyorder?.paymentId}</p>
      <p className='p- font-semibold text-lg'>Pay status : {recentlyorder?.Paystatus}</p>
      <p className='p- font-semibold text-lg'>Order Date : {recentlyorder?.orderDate}</p>
      <p className='p- font-semibold text-lg'>Name : {recentlyorder?.userShipping[5]}</p>
      <p className='p- font-semibold text-lg'>State : {recentlyorder?.userShipping[0]}</p>
      <p className='p- font-semibold text-lg'>City : {recentlyorder?.userShipping[1]}</p>
      <p className='p- font-semibold text-lg'>Pincode : {recentlyorder?.userShipping[4]}</p>
     </div>
      </div>
      </div>    

    </div>
    </div>
  )
}

export default Orderconfirmation
