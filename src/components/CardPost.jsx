import React, { useEffect, useState } from 'react'

const CardPost = () => {

    const [data, setData] = useState ([]);
    const fetchApi = async () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => setData(json))

        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [data])

  return (
    <div className='w-full h-full grid grid-cols-3 justify-between gap-10'>
        {
            data.map((prev) => (
                <div key={prev.id} className='w-[350px] p-3 border border-gray-400 rounded-md space-x-3'>
                    <h1 className='text-xl font-bold text-gray-600'>{prev.title}</h1>
                    <p className='text-base text-gray-500'>{prev.body}</p>
                <a href="" className='text-blue-500'>
                Read More ▶️
                </a>
                </div>
            ))
        }
    </div>
  )
}

export default CardPost