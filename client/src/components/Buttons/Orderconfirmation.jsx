import React, { useContext, useEffect } from 'react'
import Appcontext from '../Context/Appcontext'

const Orderconfirmation = () => {
  const {userorder,  recentlyorder } = useContext(Appcontext)
  useEffect(()=>{
        userorder()
  },[])
  console.log( recentlyorder )
  return (
    <div>
    <div className='flex items-center flex-col  m-6 space-y-2 '>
      <h1 className='font-semibold text-xl md:text-5xl'>Your order has been confirm ,</h1>
      <h2 className='font-semibold text-lg md:text-4xl'>it will delivered soon !</h2>
    </div>
    <div>
      <div>

      </div>
      <div>
        
      </div>
    </div>
    </div>
  )
}

export default Orderconfirmation
