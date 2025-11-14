import React, { useContext, useEffect } from 'react'
import Appcontext from '../Context/Appcontext'

const Orderconfirmation = () => {
  const {userorder} = useContext(Appcontext)
  useEffect(()=>{
        userorder()
  },[])
  return (
    <div>
    
    </div>
  )
}

export default Orderconfirmation
