import React, { useEffect, useRef, useState } from 'react'
import fetchData from './fetchData.js'
import './Infinitescroll.css'

let offset = 0;

function InfiniteScroll() {
    const [images, setImages] = useState([])
    const lastElementRef = useRef()

    const getImages = async (pageNo, count) => {
        let data = await fetchData(pageNo, count);
        setImages(state => [...state, ...data.photos]);
        offset++;
    }

    useEffect(() => {
        let observer = new IntersectionObserver((entries, observer) => {
            entries?.forEach((entry) => {
                if (entry.isIntersecting) {
                    getImages(offset, 10)
                }
            })
        });
        observer.observe(lastElementRef.current)
    }, []);

    return (
        <>
            <div className='img-container'>
                {images.map((image, index) => <img key={index} src={image.url} alt="" />)}
            </div>
            <div id="lastElement" ref={lastElementRef}>
                {/* <div className='shimmer-loader-container'>
                    <div className='shimmer-loader'></div>
                    <div className='shimmer-loader'></div>
                    <div className='shimmer-loader'></div>
                </div> */}
                <div>loading...</div>
            </div>
        </>
    )
}

export default InfiniteScroll
