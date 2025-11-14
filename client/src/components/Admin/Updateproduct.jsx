import React, {useState,useContext, useEffect, useRef} from 'react'
import { useParams } from 'react-router'
import Appcontext from '../Context/Appcontext'

const Updateproduct = () => {
    const {id} = useParams()
    const fileInputref = useRef()
    const {fetchsingleproduct, updateproduct} = useContext(Appcontext)
    const [product,setproduct ] = useState(null)
    const [file, setfile] = useState(null)
    const [productdetail, setproductdetail] = useState({
        title: "",
        price: "",
        description: "",
        category: ""
     })
useEffect(()=>{
     fetchsingleproduct(id,setproduct)
},[id])
useEffect(()=>{
    if(product){
        setproductdetail({
            title: product?.title,
        price: product?.price,
        description: product?.description,
        category: product?.category
        })
    }
},[product])
   
     const inpputhandler = (e)=>{
         const {name,value} = e.target
         setproductdetail((prev)=>({
                 ...prev,
                 [name]: value
             }))}
     
     const filehandler = (e)=>{
         setfile(e.target.files[0])
     }
     const submit = (e)=>{
        e.preventDefault()
        updateproduct(id,productdetail?.title,productdetail?.price,productdetail?.description, productdetail?.category, file,setfile,setproductdetail,fileInputref)
     }
 
  return (
    <div className=' flex justify-center max-w-8xl h-[90%]  '>
    <div className='border  border-yellow-100 mx-auto w-[90%] sm:w-[90%] rounded-xl md:w-2/3 m-6 p-8  space-y-4'>
         <div className=''>
           <h1 className='text-center text-2xl md:text-5xl font-semibold'>
               Update Product
           </h1>
           </div>
      
    <div className='flex flex-col mt-5 space-y-2'>
           <label className='md:text-2xl text-xl font-medium'>Title</label>
       <input type="text" name='title' value={productdetail?.title || ""}
        onChange={(e)=>inpputhandler(e)} className='bg-gray-900 py-2 px-2  rounded border-white border' />
       </div>
       <div className='flex flex-col space-y-2'><label>Price</label>
       <input type="text"className='bg-gray-900 py-2 px-2 rounded border-white border'
       name='price' value={productdetail.price || ""} onChange={(e)=>inpputhandler(e)} />
       </div>
       <div className='flex flex-col space-y-2'>
       <label  className='md:text-2xl font-medium'>Category</label>
       <input type="text" placeholder='  --select category--' className='bg-gray-900 px-2 py-2 rounded border-white border' name='category' value={productdetail.category || ""}
       onChange={(e)=>inpputhandler(e)}/>
      </div>
      <div className='flex flex-col space-y-2'>
       <label  className='md:text-2xl font-medium'>URL Image</label>
       {
        product?.image && <>
        <label className='text-sm font-semibold'>Current Image : </label>
        <img src={product?.image} alt="old image" className='w-[100px] h-[50px]' /></>
       }
       <input type="file" ref={fileInputref} onChange={(e)=>filehandler(e)}className='bg-gray-900 py-2 px-2 rounded border-white border'/>
      </div>
     

      <div className='flex flex-col space-y-2'>
           <label  className='md:text-2xl font-medium'>Description</label>
           <textarea type="text" className='bg-gray-900 py-3 px-2 rounded border-white border' name='description' value={productdetail.description || ""} onChange={(e)=>inpputhandler(e)} />
       </div>
       <div className='p-8 flex justify-center '>
           <button className='py-2 px-6 rounded-2xl bg-purple-900 text-2xl font-semibold hover:bg-purple-950' onClick={(e)=>submit(e)}>Submit</button>
       </div>
    </div>

    </div>
  
  )
}

export default Updateproduct
