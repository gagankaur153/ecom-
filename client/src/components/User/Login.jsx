import React,{useContext, useState} from 'react'
import { NavLink, useNavigate } from 'react-router'
import Appcontext from '../Context/Appcontext'

const Login = () => {
  const {login }= useContext(Appcontext)
  const [data,setdata] = useState({email:"",password:"",})
  const navigate = useNavigate()
  const inputhandle = (e)=>{
  const  {name, value} = e.target;
    setdata({
      ...data,
      [name]: value
    })
  }
  const handleform = (e)=>{
    e.preventDefault()
    login(data?.email, data?.password,setdata)
  }
  return (
   <>
    <div className='  h-[90vh] flex items-center  justify-center '>
     <form onSubmit={handleform} className=' container shadow-xl rounded-2xl bg-gray-900 w-1/2 p-10  '>
     <div className="mb-6  flex flex-col space-y-2 ">
  <label className="form-label text-lg font-semibold">Email address</label>
  <input type="string" name='email' value={data.email} onChange={inputhandle} className="form-control py-2 text-black rounded-full px-2 focus:outline-none" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-10 flex flex-col space-y-2 ">
  <label className="form-label text-lg font-semibold">Password</label>
  <input type="string" className="form-control py-2 text-black rounded-full px-2 focus:outline-none" name='password' value={data.password} onChange={inputhandle} placeholder="enter password"/>
</div>
<div className="mb- w-full flex container justify-center">
  <button type='submit' className='btn btn-primary px-14 py-2 text-lg rounded-lg hover:bg-sky-700 bg-sky-800 text-white font-semibold '>Login</button>
</div>
<div className='mb- w-full flex flex-col text-sm  items-center justify-center mt-2'>
  <p>Do'not account ?</p>
  <NavLink to={'/register'} className='hover:underline'>Register</NavLink>
</div>
     </form>
    </div>
   </>
    
  
  )
}

export default Login
