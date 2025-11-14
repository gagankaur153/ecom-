import React, { useState, useContext } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import Appcontext from '../Context/Appcontext'


const Navbar = () => {
  const {logout,setsearch, search ,isauth,role} = useContext(Appcontext)
    const [isopen, setisopen] = useState(false)
    
  
    const smallbuttons = ()=>{
        setisopen((prev)=> !prev)
        console.log(isopen)
    }

    console.log("role", role)
    
    const buttons = [
       {
        button: "Cart",
        link: '/cart'
       },
       {
        button: "Profile",
        link: '/profile'
       },
       {
        button: "Login",
        link: '/login'
       },
       {
        button: "Sign up",
        link: '/register'
       },
    ]

    const adminbuttons = [
      {
       button: "Go To Home",
       link: '/cart'
      },
      {
       button: "Add Product",
       link: '/addproduct'
      },
      {
       button: 'All Orders',
       link: '/admin'
      },
      {
       button: "All User",
       link: '/login'
      },
   ]
    console.log(isauth)
   if(isauth === "false"){
    buttons.splice(0,2)
   }

   if(isauth === "true"){
    buttons.splice(2,4)
   }

  
  return (
    <div className='max-w-8xl sticky top-0 z-50 mx-auto  '>
  {/* small device navbar */}
  <nav className='  md:hidden bg-purple-900 sticky top-0 p-3 w-full flex flex-col space-y-3  '>

     
     <div className='text-2xl text-white font-semibold'>
        <NavLink to={'/'}>Mern-Ecommerce</NavLink>
      </div>

     <div className=' flex justify-between gap-3 items-center '>
        <input type="text" placeholder='search product...' className='input input-bordered rounded-full w-full px-3 bg-black   placeholder:font-semibold font-semibold placeholder:text-white text-white' />
        {
            !isopen ?  <IoReorderThreeOutline size={40} className='text-white cursor-pointer' onClick={smallbuttons} /> :
            <RxCross2 size={40} className='text-white cursor-pointer' onClick={smallbuttons} />
         }
     </div>    
          {
          isopen  && (
          <div className='w-full p-2 bg-purple-800 bg-purple-80 rounded-xl flex flex-col items-center'>
            {
              role !== "admin"? <>
               {buttons.map((item, index)=> (
             <NavLink key={index} className='bg-purple-700 m-2 text-center p-1 hover:bg-purple-600 font-semibold w-full text-white'  to={item.link} onClick={smallbuttons}>
                 {item.button}
                 </NavLink>
                 ))}
              </> : <>
              {adminbuttons.map((item, index)=> (
             <NavLink key={index} className='bg-purple-700 m-2 text-center p-1 hover:bg-purple-600 font-semibold w-full text-white'  to={item.link} onClick={smallbuttons}>
                 {item.button}
                 </NavLink>
                 ))}
              </>
            }
            

                  {
                  isauth === "true" && (
                    <button onClick={()=>logout()} className='bg-purple-700 m-2 text-center p-1 hover:bg-purple-600 font-semibold w-full text-white' >Logout</button>
                  )
                 }
            
            </div>
                 )}
  </nav>
 
 {/* desktop device navbar */}
    <nav className='hidden sticky-top w-full md:flex bg-purple-900 p-5 items-center justify-between mx-auto'>
        <div className='md:text-3xl text-white font-sans'>
            <NavLink to={'/'}>Mern Ecom</NavLink>
        </div>
        <div>
            <input type="search" placeholder='search products...' className='input input-bordered rounded-full text-md bg-black  px-5 placeholder:font-semibold font-semibold placeholder:text-white text-white' value={search} onChange={(e)=>setsearch(e.target.value)} />
        </div>
        <div className='flex  gap-4'>

          {
            role !== "admin" ? <>
                   {
            buttons.map((item, index)=><div key={index} className='bg-blue-600 px-3 py-1 rounded lg:text-lg text-white font-semibold'>
                <NavLink to={item.link} >{ item.button}</NavLink>

            </div>)
            }
            </> : <>
            {
          adminbuttons.map((item, index)=><div key={index} className='bg-blue-600 px-3 py-1 rounded lg:text-lg text-white font-semibold'>
                <NavLink to={item.link} >{ item.button}</NavLink>

            </div>)
            }
            </>
          }
         
             {
              isauth === "true" && (
                <button onClick={()=>logout()} className='bg-blue-600 px-3 py-1 rounded lg:text-lg text-white font-semibold'>Logout</button>
              )
             }
    
        </div>
    </nav>

    </div>
  )
}

export default Navbar
