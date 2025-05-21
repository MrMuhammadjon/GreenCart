import {useEffect} from 'react'
import { assets, dummyProducts } from '../assets/assets/assets';
import { useAppContext } from '../context/AppContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = ({ product }) => {

    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext()

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return product && (
        <>

            <div onClick={() => { navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0, 0) }} className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-42 max-w-60 w-full shadow hover:shadow-lg transition-[0.3s]" data-aos="fade-up">
                <div className="group cursor-pointer flex items-center justify-center px-2" >
                    <img className="group-hover:scale-105 transition max-w-26 md:max-w-36"
                        src={product.image[0]} alt={product.name} />
                </div>
                <div className="text-gray-500/60 text-sm">
                    <p>{product.category}</p>
                    <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                    <div className="flex items-center gap-0.5">
                        {Array(5).fill('').map((_, i) => (
                            <img key={i} className='md:w-3.5 w3' src={i < 4 ? assets.star_icon : assets.star_dull_icon} />

                        ))}
                        <p>(4)</p>
                    </div>
                    <div className="flex items-end justify-between mt-3">
                        <p className="md:text-xl text-base font-medium text-green-500">
                            {currency}${product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}${product.price}</span>
                        </p>
                        <div onClick={(e) => { e.stopPropagation(); }} className="text-green-500">
                            {!cartItems[product._id] ? (
                                <button className="flex items-center justify-center gap-1 bg-indigo-100 border border-green-300 md:w-[80px] w-[70px] h-[36px] rounded text-green-600 font-medium cursor-pointer"
                                    onClick={() => addToCart(product._id)} >
                                    <img src={assets.cart_icon} alt="cart_icon" className='w-6' />
                                    Add
                                </button>
                            ) : (
                                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                                    <button onClick={() => { removeFromCart(product._id) }} className="cursor-pointer text-md px-2 h-full" >
                                        -
                                    </button>
                                    <span className="w-5 text-center">{cartItems[product._id]}</span>
                                    <button onClick={() => { addToCart(product._id) }} className="cursor-pointer text-md px-2 h-full" >
                                        +
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
