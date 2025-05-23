import React, { useEffect, useState } from 'react'
import Products from './Products'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
    const { products } = useAppContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading or wait for products to load
        if (products && products.length > 0) {
            setLoading(false)
        }
    }, [products])

    return (
        <div className="w-[90%] flex flex-col gap-3 m-auto mt-10 py-10">
            <h1 className='text-2xl md:text-3xl font-medium text-green-600'>Best Seller</h1>

            {loading ? (
                <div className="flex flex-row gap-2 w-full h-vh items-center justify-center mt-40">
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
                </div>
            ) : (
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
                    {
                        products.filter(p => p.inStock).slice(0, 15).map((product, index) => (
                            <Products key={index} product={product} />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default BestSeller
