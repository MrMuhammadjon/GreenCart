import React from 'react'
import { assets, categories } from '../assets/assets/assets'
import { useAppContext } from '../context/AppContext'

const Category = () => {

    const {navigate} = useAppContext()

    return (
        <>
            <div className="w-[90%] h-auto flex flex-col gap-2 m-auto mt-15 py-5">
                <p className='text-2xl md:text-3xl font-medium text-green-600'>
                    Categories
                </p>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
                    {
                        categories.map((item, index) => {
                            return (
                                <div key={index} className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
                                    style={{backgroundColor: item.bgColor}}
                                    onClick={()=>{
                                        navigate(`/product/${item.path.toLocaleLowerCase()}`);
                                        scroll(0,0)
                                    }}
                                >
                                    <img src={item.image} alt="" className='group-hover:scale-110 transition-[0.3s]' />
                                    <p>{item.path}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Category
