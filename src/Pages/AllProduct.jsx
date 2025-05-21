import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../Components/Products' // ✅ Make sure this import is correct

const AllProduct = () => {

    const { products, searchQuery } = useAppContext()
    const [filteredProducts, setFilteredProduct] = useState([]) // ✅ Corrected useState

    useEffect(() => {
        if (searchQuery.length > 0) {
            setFilteredProduct(
                products.filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            )
        } else {
            setFilteredProduct(products)
        }
    }, [products, searchQuery])

    return (
        <div className="mt-16 flex flex-col m-auto w-[90%]">
            <div className="py-10">
                <h1 className="text-2xl font-medium uppercase text-green-600">All Product</h1>
                <div className="w-16 h-0.5 bg-green-600 rounded-full"></div>
            </div>

            <div className="w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5  gap-3">
                {
                    filteredProducts.filter(product => product.inStock).map((item, index) => (
                        <ProductCard key={item.id || index} product={item} />  // ✅ Use ProductCard, not AllProduct
                    ))
                }
            </div>
        </div>
    )
}

export default AllProduct
