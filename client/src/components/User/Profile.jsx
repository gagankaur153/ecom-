import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import{ toast} from 'react-toastify'
import Appcontext from '../Context/Appcontext'



const Profile = () => {
  const {user_detail, profile} = useContext(Appcontext)
useEffect(()=>{ profile()},[])
  return (
    <div className='flex flex-col items-center m-8 border justify-center'>
      <div className='flex gap-4 text-4xl'>
        <h1>Welcome</h1>
        <h1>{user_detail.username}</h1>
      </div>
      <div className='text-2xl mt-3'>
        <h2>{user_detail.email}</h2>
      </div>
    
    </div>
  )
}

export default Profile
