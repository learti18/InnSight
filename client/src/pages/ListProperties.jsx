import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default function ListProperties() {
  const  [properties,setProperties] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get("/listings")
        setProperties(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
 
  return (
      <div className='py-4 px-3 sm:px-8 m-auto bg-sky-50 min-h-screen'>
        <div className='flex justify-center gap-4'>
            <Link to='/create-listing'>
                <button className=' text-sky-500 px-6 py-2 rounded-3xl border border-sky-500 hover:bg-sky-500 hover:text-white'>Add property +</button>
            </Link>
            <Link to='/create-listing'>
                <button className='bg-sky-500 text-white px-6 py-2 rounded-3xl'>Edit listing</button>
            </Link> 
        </div>
        <div className='mt-8 flex flex-row flex-wrap justify-center gap-x-6 gap-y-8'>
          {properties.map(property => (
              <Link to={'/property/'+property.id} className='w-60 cursor-pointer' key={property.id}>
                <div className='bg-gray-500 rounded-2xl mb-2'>
                  <img className='shadow-md rounded-xl aspect-square hover:shadow-xl' src={property.images[0]} alt="" />
                </div>
                <h2 className='font-semibold text-lg'>{property.title}</h2>
                <h3 className='text-sm text-gray-500'>{property.address}</h3>
                <div className='mt-2'>
                  <span className='font-semibold'>${property.price}<span className='text-sm text-gray-500'>/month</span></span>
                </div>
              </Link>
            ))
          }
      </div>
    </div>              
  )
}