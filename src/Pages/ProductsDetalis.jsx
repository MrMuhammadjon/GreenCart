import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { Link, useParams } from 'react-router-dom';
import { assets } from '../assets/assets/assets';
import Products from '../Components/Products';

const ProductsDetalis = () => {

    const { products, navigate, addToCart, currency } = useAppContext()
    const { id } = useParams()
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);

    const product = products.find((item) => item._id === id)



    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item) =>
                product.category === item.category
            );
            setRelatedProducts(
                productsCopy.slice(0, 5)
            )
            console.log(productsCopy);

            setRelatedProducts(productsCopy.slice(0, 5));
        }
    }, [products]);

    useEffect(() => {
        setThumbnail(product?.image[0] ? product.image[0] : null)
    }, [product])

    const [visibleProducts, setVisibleProducts] = useState(10);

    const handleShowMore = () => {
        setVisibleProducts(prev => prev + 5); // Har bosganda 5 ta qo'shish
    };

    return product && (
        <div className="w-[90%] m-auto mt-10">
            <p>
                <Link to="/">Home</Link> /
                <Link to="/products"> Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`}> {product.category}</Link> /
                <span className="text-green-500"> {product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-10">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                            <img
                                key={i}
                                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                                alt={`star ${i + 1}`}
                            />
                        ))}
                        <p className="text-base ml-2">(4)</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: {currency} ${product.price}</p>
                        <p className="text-2xl font-medium">MRP: {currency} ${product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={() => addToCart(product._id)} className="w-full py-3.5 cursor-pointer font-medium bg-green-100 text-black-800/80 hover:bg-green-200 transition rounded-sm" >
                            Add to Cart
                        </button>
                        <button onClick={() => { addToCart(product._id); navigate('/cart') }} className="w-full py-3.5 cursor-pointer font-medium bg-green-500 text-white hover:bg-green-600 transition rounded-sm" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-[90%] m-auto mt-20">
                <div className="flex flex-col items-center justify-center w-full pb-20">
                    <h1 className='text-black text-2xl font-medium'>Relate Products</h1>
                    <div className="w-26 h-0.5 bg-green-600 rounded-full"></div>
                </div>
                <div className="w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5  gap-3">
                    {
                        products.filter((product) => product.inStock).slice(0, visibleProducts).map((product, index) => (
                            <Products key={index} product={product} />
                        ))
                    }
                </div>
                <div className="w-full flex items-center gap-4 justify-center mt-20">
                    <button onClick={handleShowMore}
                        className='px-12 py-2 bg-green-600 rounded-sm cursor-pointer'>
                        <h1 className='font-medium text-white'>
                            Show more
                        </h1>
                    </button>
                    <button className='px-12 py-2 bg-green-600 rounded-sm cursor-pointer' onClick={() => navigate('/product')}>
                        <h1 className='font-medium text-white'>
                            All products
                        </h1>
                    </button>
                </div>
            </div>
        </div >
    );
}

export default ProductsDetalis
