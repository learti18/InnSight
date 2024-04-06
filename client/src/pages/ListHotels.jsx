import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function ListHotels() {
  const  [posts,setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get("/listings")
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
 
  return (
    <div className='flex flex-wrap max-2xl justify-center p-10 gap-8'>
      {posts.map(post => (
          <div className='flex flex-col gap-2 w-80 p-2 border border-gray-600 rounded-2xl' key={post.id} >
            <img className='rounded-2xl' src={post.images[0]} alt="" />
            <p>{post.title}</p>
            <span>{post.price}$</span>
        </div>
        ))
      }
    </div>
  )
}
