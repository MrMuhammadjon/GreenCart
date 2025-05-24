import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets/assets'
import ProductCard from '../Components/Products'


const ProductCategory = () => {

  const { products } = useAppContext()
  const { category } = useParams()


  const searchCategory = categories.find((item) => item.path.toLowerCase() === category)
  const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)



  return (
    <>
      <div className="mt-16 m-auto w-[90%]">
        <div className="pb-10">
          {searchCategory && (
            <div className="flex flex-col items-end w-max">
              <h1 className='text-black text-2xl font-medium'>{searchCategory.text.toUpperCase()}</h1>
              <div className="w-16 h-0.5 bg-green-600 rounded-full"></div>
            </div>
          )
          }
        </div>
        {
          filteredProducts.length > 0 ? (
            <div className="w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5  gap-3">
              {
                filteredProducts.map((item, index) => {
                  return (
                    <ProductCard key={item.id || index} product={item} />
                  )
                })
              }
            </div>
          ) : (<div className=''><p>404</p></div>)
        }
      </div>
    </>
  )
}

export default ProductCategory
