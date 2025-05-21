import React from 'react'
import { useAppContext } from '../context/AppContext'

const AllProduct = () => {

    const{products} = useAppContext()

  return (
    <>
    <div className="mt-16 flex flex-col">
        <h1 className='text-2xl font-medium uppercase'>All Product</h1>
        <div className="w-16 h-0.5 bg-green-600 rounded-full">

        </div>
    </div>
    </>
  )
}

export default AllProduct
