import React from 'react'
import { useState, useEffect } from 'react';

const MainBanner = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.uzum.uz/cvcg2f3vgbkm5ehkika0/main_page_banner.jpg",
            caption: "Welcome to Our Store",
            Link: ''
        },
        {
            id: 2,
            image: "https://images.uzum.uz/d0hes233uvph509ttlq0/main_page_banner.jpg",
            caption: "Big Discounts Available",
            Link: ''
        },
        {
            id: 3,
            image: "https://images.uzum.uz/d0ddtc0n274j5scll7v0/main_page_banner.jpg",
            caption: "Shop Your Favorite Products",
            Link: ''
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // har 5 soniyada

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (
        <>
            <div className="relative m-auto mt-10 rounded-2xl w-[90%] h-[300px] md:h-[500px] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-4" : "opacity-0 z-0"
                            }`}
                    >
                        <a href={slide.Link}>
                            <img
                                src={slide.image}
                                alt={slide.caption}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    </div>
                ))}

                {/* Arrow tugmalar */}
                <button
                    onClick={prevSlide}
                    className="z-[5] absolute top-1/2 left-4 transform -translate-y-1/2 bg-black opacity-60 cursor-pointer text-white px-3 py-2 rounded-full hover:bg-opacity-60"
                >
                    <div className="w-5 h-5 rounded-full bg-white"></div>
                </button>
                <button
                    onClick={nextSlide}
                    className="z-[5] absolute top-1/2 right-4 transform -translate-y-1/2 bg-black opacity-60 cursor-pointer text-white px-3 py-2 rounded-full hover:bg-opacity-60"
                >
                    <div className="w-5 h-5 rounded-full bg-white"></div>

                </button>

                {/* Dots */}
                <div className="absolute z-[10] bottom-4 w-full flex justify-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === current ? "bg-green-500" : "bg-white"
                                }`}
                            onClick={() => setCurrent(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MainBanner
