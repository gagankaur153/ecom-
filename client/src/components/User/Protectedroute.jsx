import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Appcontext from '../Context/Appcontext'

const Protectedroute = ({children}) => {
    const navigate = useNavigate()
    const {logout}= useContext(Appcontext)
          useEffect(()=>{
            const gettoken = localStorage.getItem("isauth")
            if(!gettoken){
              navigate('/login')
            }
          },[logout])
  return (
    children   
  )
}

export default Protectedroute
