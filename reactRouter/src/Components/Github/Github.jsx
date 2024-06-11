import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/abhay-on-git")
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(data)
    //         setData(res)
    //     })
    // },[])
  return (

    <div className='bg-gray-700'>
    <div className='text-3xl text-white'>Github Followers : {data.followers}</div>
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response = await fetch("https://api.github.com/users/abhay-on-git")
     return response.json()
}