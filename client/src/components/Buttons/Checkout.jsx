import React, { useContext, useEffect } from 'react'
import Appcontext from '../Context/Appcontext'
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuCircleMinus } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate()
    const {carts, fetchcarts ,deletecart,oldaddress,  quantityDecrease, dec,inc,remove, quantityIncrease, quantityRemove} = useContext(Appcontext)
    useEffect(()=>{
        fetchcarts()
      },[dec,inc,remove])

    // quantity decrease
    const decrease = (id)=>{
        quantityDecrease(id)
      }

    //   quantity increase
    const increase = (id)=>{
        quantityIncrease(id)
      }

//    quantity remove
const rremove = (id)=>{
    quantityRemove(id)
  }

// procced to payment gateway button
const handlepayment = ()=>{
  axios.post("http://localhost:4000/payment/checkout", {
    amount: carts?.totalamount,
    cartItems: carts?.item,
    userShipping: [oldaddress?.country, oldaddress?.state, oldaddress?.city, oldaddress?.address, oldaddress?.pincode, oldaddress?.fullname],
    userId: carts?.user
  })
  .then((res)=>{
    const {orderId, amount:amount} = res.data
     
    const options = {
      key: 'rzp_test_Re6YOXhlqRIFyh', // Replace with your Razorpay key_id
      amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Ecom app',
      description: 'Test Transaction',
      order_id: orderId, // This is the order_id created in the backend
      handler: async function (response){
          const paymentdetails = {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            amount: carts?.totalamount ,
            orderItems: carts?.item ,
            userId: carts?.user,
            userShipping : [oldaddress?.country, oldaddress?.state, oldaddress?.city, oldaddress?.address, oldaddress?.pincode, oldaddress?.fullname]
          }
          console.log("paymentdetails", paymentdetails)
          const verifyresponse = await axios.post("http://localhost:4000/payment/verify-payment",paymentdetails)
          console.log("verifyresponse", verifyresponse.data)
          if(verifyresponse.data.status){
            // console.log("verifyresponse", verifyresponse.data)
            deletecart()
            navigate('/order-confirmation')
          }
      },
      prefill: {
        name: 'Ecom',
        email: 'ecom@gmail.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F37254'
      },
    };
    const rzp = new Razorpay(options);
    rzp.open();
   
  })
  .catch((err)=>{
    console.log(err)
  })
}

    
  return (
    <div className=' m-2  p-4'>
   <div className=' p-2'>
    <div className='text-center font-bold text-xl md:text-4xl'>
        Order Summary
    </div>

    {
        carts?.item.length == 0 ? 
            (
<div className='md:text-6xl text-2xl font-bold text-center flex mt-14 text-yellow-500'>
<h1>Continue to shopping...</h1>
</div>
            )
        : (
            <div>
                    <div className='grid mt-5 grid-cols-1 md:grid-cols-12 border border-blue-600'>
        <div className='col-span-8 border border-blue-600'>
            <div className='border border-blue-600 text-xl font-bold  text-center p-4 '>
                <h1>Product's Detail</h1>
            </div>
            <div>
                <div className=' flex m-4 mb-0 '>
                  <div className='w-[25%]   p-2 md:text-lg font-bold text-center border-blue-600 border'>
                    <p className=''>Product Img</p>
                  </div>
                  <div className='w-[30%] text-sm md:p-3 md:text-lg font-bold  text-center border-blue-600 border'>
                    <p>Title</p>
                  </div>
                  <div className='w-[15%] text-sm md:p-3 md:text-lg font-bold  text-center border-blue-600 border' >
                    <p>Price</p>
                  </div>
                  <div className='w-[10%] text-sm md:p-3 md:text-lg font-bold  text-center border-blue-600 border'>
                    <p>Oty</p>
                  </div>
                  <div className='w-[10%] text-sm md:p-3 md:text-lg font-bold  text-center border-blue-600 border'> 
                    <p>Oty--</p>
                  </div>
                  <div className='w-[10%] text-sm md:p-3 md:text-lg font-bold  text-center border-blue-600 border'>
                    <p>Oty++</p>
                  </div>
                  <div className='w-[20%] text-sm md:p-3 md:text-lg font-bold  text-center border-blue-600 border'>
                    <p>Remove</p>
                  </div>
                </div>
                <div className=' m-4 mb-0 mt-0'>
                {
                   carts && (
                    carts.item.map((product)=>(
                        <div className='flex' key={product._id}>
                            <div className='w-[25%] 
                            p-3 flex items-center justify-center border-blue-600 border'>
                   <img src={product?.productid?.image} className='w-[70px] rounded  ' alt="" />
                  </div>
                  <div className='w-[30%] md:p-3 flex justify-center items-center border-blue-600 border'>
                    <p className='text-center'>{product?.productid?.title}</p>
                  </div>
                  <div className='w-[15%] md:p-3 flex justify-center items-center text-center border-blue-600 border' >
                    <p>{product?.price}</p>
                  </div>
                  <div className='w-[10%] md:p-3 flex items-center justify-center text-center border-blue-600 border'>
                    <p>{product?.quantity}</p>
                  </div>
                  <div className='w-[10%] flex items-center justify-center text-2xl md:p-3 text-center border-blue-600 border'> 
                    <p onClick={()=>decrease(product?.productid?._id)}><LuCircleMinus /></p>
                  </div>
                  <div className='w-[10%] flex items-center justify-center text-2xl md:p-3 text-center border-blue-600 border'>
                    <p onClick={()=>increase(product?.productid?._id)}><IoMdAddCircleOutline /></p>
                  </div>
                  <div className='w-[20%] flex items-center justify-center md:p-3 text-3xl   text-center border-blue-600 border'>
                    <p onClick={()=>rremove(product?.productid?._id)}><MdDeleteOutline /></p>
                  </div>
                        </div>
                    ))
                   )
                }
                </div>
                <div className=' flex m-4 mt-0'>
                <div className='w-[25%] md:p-3 md:text-lg font-bold text-center border-blue-600 border'>
                  </div>
                  <div className='w-[30%] md:p-3 md:text-lg font-bold flex justify-center text-center border-blue-600 border'>
                    <p className='bg-blue-600 md:py-1 w-1/2  rounded'>Total</p>
                  </div>
                  <div className='w-[15%] md:p-3 md:text-lg font-bold flex justify-center text-center border-blue-600 border' >
                    <p className='bg-yellow-600 md:py-1 px-1  rounded'>{carts?.totalamount}</p>
                  </div>
                  <div className='w-[10%] md:p-3 md:text-lg font-bold flex justify-center  text-center border-blue-600 border'>
                  <p className='bg-sky-500 md:py-1 px-2  rounded'>{carts?.totalquantity}</p>
                  </div>
                  <div className='w-[10%] md:p-3 md:text-lg font-bold  text-center border-blue-600 border'> 
                    
                  </div>
                  <div className='w-[10%] md:p-3 md:text-lg font-bold  text-center border-blue-600 border'>
                   
                  </div>
                  <div className='w-[20%] md:p-3 md:text-lg font-bold  text-center border-blue-600 border'>
                    
                  </div>
                </div>

              
            </div>
        </div>
        <div className='col-span-4'>
            <div className='border border-blue-600 text-xl font-bold  text-center p-4 '>
                <h1>Shipping Address</h1>
            </div>
            <div className='p-4 text-lg md:text-xl md:space-y-7  font-semibold'>
                <h2 >Name: {oldaddress?.fullname}</h2>
                <h2 >Country: {oldaddress?.country}</h2>
                <h2 >State: {oldaddress?.state}</h2>
                <h2 >City: {oldaddress?.city}</h2>
                <h2 >Pincode: {oldaddress?.pincode}</h2>
                <h2 >NearBy: {oldaddress?.address}</h2>
            </div>
        </div>
    </div>
    <div className=' flex  justify-center mt-8 '>
        <button className='md:text-lg px-3 py-2 rounded bg-gray-800 hover:bg-gray-900 font-bold ' 
        onClick={handlepayment} 
        >Proceed To Pay</button>
    </div>
                </div>
        )
    }
   </div>
    </div>
  )
}

export default Checkout
