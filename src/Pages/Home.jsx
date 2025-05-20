import React from 'react'
import MainBanner from '../Components/MainBanner'
import Category from '../Components/Category'
import BestSeller from '../Components/BestSeller'
import BottomBanner from '../Components/BottomBanner'

const Home = () => {
    return (
        <>
            <MainBanner />
            <Category />
            <BestSeller />
            <BottomBanner/>
        </>
    )
}

export default Home
