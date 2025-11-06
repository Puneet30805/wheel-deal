import React from 'react'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
const Index = () => {
  return (
    <div>
      <Header/>

      <div className='my-10 px-10 md:px-20'>
        <div className='flex justify-between items-center ' >
            <h2 className='font-bold text-4xl'>
             My Listing
            </h2>
            <Link to={'/listing'}>
            <Button className="bg-blue-600 text-white">+ Add New Listing</Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Index
