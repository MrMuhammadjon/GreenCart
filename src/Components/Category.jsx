import React from 'react'
import { assets } from '../assets/assets/assets'

const Category = () => {
    return (
        <>
            <div className="w-[90%] h-auto flex flex-col gap-2 m-auto mt-15 py-5">
                <p>
                    Categories
                </p>
                <div className="">
                    <div className="">
                        <img src={assets.box_icon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
