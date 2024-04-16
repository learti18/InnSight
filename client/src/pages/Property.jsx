import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { Images,CircleX,MapPin,Heart } from 'lucide-react';

export default function Property() {
  const {id} = useParams()
  const  [property,setProperty] = useState({})
  const [showAllPhotos,setShowAllPhotos] = useState(false) 
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/listings/${id}`)
        setProperty(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData() 
  },[id])

  if(showAllPhotos){
    return(
        <div className='absolute inset-0 bg-white min-h-screen'>
            <div className='p-8 grid gap-4'>
                <div>
                    <button onClick={() => setShowAllPhotos(false)} className='fixed flex items-center gap-2 py-2 px-4 rounded-2xl bg-gray-600 opacity-80 text-white right-12 top-8'> 
                        <CircleX size={20} strokeWidth={1.25} />
                        Close photos
                    </button>
                </div>
                {property.images.map(img => (
                    <div>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
  }

  return (
    <div className=' flex justify-center px-5'>
        <div className='-mx-8 px-8 py-8 max-w-7xl'>
            <div className='flex justify-between'>
                <h1 className='text-3xl'>{property.title}</h1>
                <button className='flex items-center gap-1 rounded-lg p-2 hover:bg-gray-100'>
                    <Heart size={20} strokeWidth={1.25} />
                    Save
                </button>
            </div> 
            <a className='flex items-center gap-1 my-3 font-semibold underline' target='_blank' href={'https://maps.google.com/?q='+property.address}>
                <MapPin size={20} strokeWidth={1.25} />
                {property.address}
            </a> 
            <div className='relative'>
                <div className='grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden'>
                    <div>
                        {property.images?.[0] && (
                            <div>
                                <img className='aspect-square object-cover' src={property.images[0]} alt="" />
                            </div>
                        )}
                    </div>
                    <div className='grid'>
                        {property.images?.[1] && (
                            <img className='aspect-square object-cover' src={property.images[1]} alt="" />
                        )}
                        {property.images?.[2] && (
                            <div className='overflow-hidden'>
                                <img className='aspect-square object-cover relative top-2' src={property.images[2]} alt="" />
                            </div>
                        )}
                    </div>
                </div>
                <button onClick={() => setShowAllPhotos(true)} className='absolute bottom-4 right-6 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500 flex items-center gap-2 hover:scale-105'>
                    <Images size={20} strokeWidth={1.25} />
                    Show more photos
                </button>
            </div>
            <div className='my-4'>
                <h2 className='font-semibold text-2xl'>Description</h2>
                {property.description}
            </div>
            <div className='grid grid-cols-2'>
                <div></div>
            </div>
        </div>
    </div>
  )
}
