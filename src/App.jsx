import React from 'react'
import CardPost from './components/CardPost'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center py-20 px-10 gap-10'>
      <h1 className='text-2xl font-bold gap-10'>Latest Post 📕</h1>
      <CardPost/>
    </div>
  )
}

export default App