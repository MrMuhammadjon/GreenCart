import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets/assets'
import { useAppContext } from '../context/AppContext'

export default function Navbar() {
    const [open, setOpen] = React.useState(false)

    const headLink = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'All Product', link: '/product' },
        { id: 3, title: 'Contact', link: '/contcat' }
    ]

    const { user, setuser, setShowUserLogin, navigate, searchQuery, setSearchQuery, gerCartAmout, getCartCount } = useAppContext()

    const logout = async () => {
        setuser(null);
        navigate('/')
    }

    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate("/product")
        }
    }, [searchQuery])

    const reklamInfo = [
        { id: 1, title: "50% Big discount for our first guests" }
    ]

    const [showDropdown, setShowDropdown] = React.useState(false);

    return (
        <>
            <div className="w-full h-13 flex items-center justify-center bg-green-500">
                {
                    reklamInfo.map((item, index) => {
                        return (
                            <div key={index} className="bg-green-500 text-white text-sm text-center py-2">
                                <p>🎉 {item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all top-0 sticky z-49">

                <NavLink to="/" onClick={() => setOpen(false)}>
                    <img className="h-9" src={assets.logo} alt="dummyLogoColored" />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-8">

                    {
                        headLink.map((item, index) => {
                            return (
                                <NavLink to={item.link} key={index} className="text-green-600 font-medium">
                                    {item.title}
                                </NavLink>
                            )
                        })
                    }

                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input onChange={(e) => setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                        <img src={assets.search_icon} alt="" />
                    </div>

                    <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                        <img src={assets.nav_cart_icon} alt="" className='w-8 h-8' />
                        <button className="absolute -top-2 -right-3 text-xl text-white bg-green-600 w-[25px] h-[25px] rounded-full">
                            {
                                getCartCount()
                            }
                        </button>
                    </div>

                    {!user ? (
                        <button onClick={() => setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-green-600 hover:bg-indigo-600 transition text-white rounded-full font-medium">
                            Login
                        </button>
                    ) : (
                        <div className="relative">
                            <img
                                src={assets.profile_icon}
                                className='w-10 cursor-pointer'
                                alt=""
                                onClick={() => setShowDropdown(prev => !prev)}
                            />
                            <ul className={`${showDropdown ? 'block' : 'hidden'} absolute top-12 right-0 bg-white shadow border border-b-gray-200 w-40 rounded-md text-sm z-40`}>
                                <li className='p-1.5 pl-3 hover:bg-gray-200 cursor-pointer flex gap-2 items-center' onClick={() => { setShowDropdown(false); navigate('my-orders'); }}>
                                    <img src={assets.cart_icon} alt='cart-icon' className='w-4 h-4' /> My Orders
                                </li>
                                <li className='p-1.5 pl-3 hover:bg-gray-200 cursor-pointer flex gap-2 items-center' onClick={() => { setShowDropdown(false); navigate('setting'); }}>
                                    <img src={assets.green_setting_icon} className='w-5 h-5' alt='setting' /> Setting
                                </li>
                                <li className='p-1.5 pl-3 hover:bg-gray-200 cursor-pointer flex gap-2 items-center' onClick={() => { setShowDropdown(false); logout(); }}>
                                    <img src={assets.remove_icon} className='w-4 h-4' alt='logout' /> Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className='flex items-center gap-6 sm:hidden'>
                    <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                        <img src={assets.nav_cart_icon} alt="" className='w-8 h-8' />
                        <button className="absolute -top-2 -right-3 text-xl text-white bg-green-600 w-[25px] h-[25px] rounded-full">
                            {
                                getCartCount()
                            }
                        </button>
                    </div>

                    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                        <img src={assets.menu_icon} alt='menu' />
                    </button>
                </div>

                {open && (
                    <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-40`}>
                        <NavLink className='hover:bg-gray-100 w-full' to='/' onClick={() => setOpen(false)}>Home</NavLink>
                        <NavLink className='hover:bg-gray-100 w-full' to='/product' onClick={() => setOpen(false)}>All Product</NavLink>
                        {
                            user &&
                            <NavLink className='hover:bg-gray-100 w-full' to='/product' onClick={() => setOpen(false)}>My Order</NavLink>
                        }
                        <NavLink className='hover:bg-gray-100 w-full' to='/' onClick={() => setOpen(false)}>Contact</NavLink>

                        {!user ? (
                            <button onClick={() => {
                                setOpen(false);
                                setShowUserLogin(true)
                            }} className="cursor-pointer px-6 py-2 mt-2 bg-green-600 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                                Login
                            </button>) :
                            (
                                <button onClick={() => {
                                    setOpen(false);
                                    logout();
                                }} className="cursor-pointer px-6 py-2 mt-2 bg-red-600 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                                    Logout
                                </button>
                            )
                        }
                    </div>
                )}

            </nav>
        </>
    )
}
