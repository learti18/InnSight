import React, { useEffect, useState } from "react";
import axios from 'axios'
import Perks from "../components/Perks";
import { useNavigate } from 'react-router-dom'

export default function CreateListing() {
    const [error,stateError] = useState("")
    const [title,setTitle] = useState("")
    const [address,setAddress] = useState("")
    const [description,setDesc] = useState("")
    const [perks,setPerks] = useState([])
    const [file,setFile] = useState([])
    const [space,setSpace] = useState(0)
    const [bedrooms,setBedRooms] = useState(0)
    const [bathrooms,setBathRooms] = useState(0)
    const [price,setPrice] = useState(0)

    const upload = async () => {
        try{
            const formData = new FormData()
            for(let img of file){
                formData.append('file',img)
            }
            const res = await axios.post('/upload',formData)

            return res.data
        }catch(err){
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const imgsData= await upload()
        const imgsUrl = imgsData.map(img => img.fileUrl);
        
        try{
            await axios.post('/listings/',{
                title,
                description,
                address,
                options: perks,
                space,
                price,
                images: imgsUrl,
                bedrooms,
                bathrooms
            })
            navigate('/');
        }catch(err){
            console.log(err)
        }
    }

   const navigate = useNavigate() 
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'></h1>
        <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
            <div className="flex flex-col gap-4 flex-1">
                <input  
                        onChange={e => setTitle(e.target.value)}
                        type="text" 
                        placeholder='Title' 
                        className='border p-3 rounded-lg' 
                        id='title'
                        name="title" 
                        maxLength="62" 
                        minLength="10"
                        required
                        />
                <input  
                        onChange={e => setAddress(e.target.value)}
                        type="text" 
                        placeholder='Address' 
                        className='border p-3 rounded-lg' 
                        id='address'
                        name="address" 
                        required
                        />         
                <textarea  
                        onChange={e => setDesc(e.target.value)}
                        type="text" 
                        placeholder='Description' 
                        className='border p-3 rounded-lg' 
                        id='description'
                        name="description" 
                        maxLength="62" 
                        minLength="10"
                        required
                        /> 
                <div className='flex flex-wrap gap-5'>
                    <Perks selected={perks} onChange={setPerks}/>
                    <div className='flex flex-wrap gap-6'>
                        <div className='flex items-center gap-2'>
                            <input  
                                    onChange={e => setSpace(e.target.value)}
                                    type="number" 
                                    id="space"
                                    name="space" 
                                    min="1" 
                                    className='p-3 border border-gray-300 rounded-lg'
                                    placeholder='86.6'
                                    required/>
                            <p>m²</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input  
                                    onChange={e => setBedRooms(e.target.value)}
                                    type="number" 
                                    id="bed-rooms"
                                    name="bed-rooms" 
                                    min="1" 
                                    max="10" 
                                    className='p-3 border border-gray-300 rounded-lg'
                                    placeholder='1'
                                    required/>
                            <p>Bedrooms</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input  
                                    onChange={e => setBathRooms(e.target.value)}
                                    type="number" 
                                    id="bath-rooms"
                                    name="bath-rooms"  
                                    min="1" 
                                    max="10" 
                                    className='p-3 border border-gray-300 rounded-lg'
                                    placeholder='1'
                                    required/>
                            <p>Bathrooms</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input  
                                    onChange={e => setPrice(e.target.value)}
                                    type="number" 
                                    id="price"
                                    name="price" 
                                    min="1"  
                                    className='p-3 border border-gray-300 rounded-lg'
                                    placeholder='200'
                                    required/>
                            <div className='flex flex-col text-center'>
                                <p className='text-lg'>Price</p>
                                <span className='font-thin text-xs m-0'>($ / Month)</span>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Images:
                <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
                </p>
                <div className='flex gap-4'>
                    <input
                        onChange={e => setFile(e.target.files)}  
                        className='p-3 border border-gray-300 rounded w-full' 
                        type="file"
                        name="images" 
                        id='images' 
                        accept='image/*' 
                        multiple 
                        />
                    <button onClick={upload} type="button" className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
                </div>
                <button type="submit" className='bg-gray-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create listing</button>
                {error && <span>error</span>}
            </div>
        </form>
    </main>
  )
}
