import { Children, createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/assets/assets';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.VITE_CURRENCY

    const navigate = useNavigate()
    const [user, setuser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})



    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }

    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added to Cart");
    };

    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData)
        toast.success("Cart Updeted")
    }

    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
            setCartItems(cartData);
            toast.success("Removed from Cart");
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [])

    const getCartCount = () => {
        let totalCount = 0
        for (const item in cartItems) {
            totalCount += cartItems[item]
        }
        return (
            totalCount
        )
    }

    const getCartAmout = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            let itemInFo = products.find((item) => item._id === item)
            if (cartItems[itemId] > 0 && itemInFo) {
                totalAmount += itemInFo.offerPrice * cartItems[itemId];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }


    const value = {
        navigate, user, setuser, isSeller, setIsSeller, showUserLogin, setShowUserLogin, products,
        currency, addToCart, updateCartItem, removeFromCart, cartItems, searchQuery, setSearchQuery,
        getCartAmout, getCartCount
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}