import React from 'react'
import Products from './Products'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {

    const {products} = useAppContext()

    return (
        <>
            <div className="w-[90%] flex flex-col gap-3 m-auto mt-10 py-10">
                <h1 className='text-2xl md:text3xl font-medium text-green-600'>Best Seller</h1>
                <div className="w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    <Products product={products[0]}/>
                </div>
            </div>
        </>
    )
}

export default BestSeller
