import React, { useState, useEffect } from 'react';
import c1 from '../Images/Dental Filling Service.jpg';
import c2 from '../Images/Pediatric Dental Care1.jpg';
import c3 from '../Images/old extraction technique.webp';
import c4 from '../Images/Tooth Restoration - Reshaping Service.jpg';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        { src: c1, title: "Dental Filling Service" },
        { src: c2, title: "Pediatric Dental Care" },
        { src: c3, title: "Old Extraction Technique" },
        { src: c4, title: "Tooth Restoration - Reshaping Service" }
    ];

    const goToIndex = (index) => {
        setActiveIndex(index);
    };

    const goToPrevSlide = () => {
        if (activeIndex === 0) {
            setActiveIndex(images.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };

    const goToNextSlide = () => {
        if (activeIndex === images.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 4000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div id="carouselExampleIndicators" className="carousel slide bg-dark" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === activeIndex ? 'active' : ''}
                        aria-current={index === activeIndex ? 'true' : 'false'}
                        onClick={() => goToIndex(index)}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                        <img src={item.src} className="d-block w-100" alt={`Slide ${index}`} style={{ maxHeight: '400px', maxWidth: '600px', margin: 'auto' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 style={{ fontWeight: 'bold', color: 'white' }}>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={goToPrevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={goToNextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
