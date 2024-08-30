// import {useState}  from 'react';
// import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
// import './carousel.css'


// const Carousel = ({data}) => {
//     const[slide, setSlide] = useState(0)
//     const nextSlide = () => {
//      setSlide(slide === data.length - 1 ? 0 : slide + 1);
//     }
//     const prevSlide = () => {
//     setSlide(slide === 0 ? data.length -1 : slide -1)
//     }
//     return (
//         <div className="carousel">
//             <BsArrowLeftCircleFill className="arrow arrow-left" onClick={(prevSlide)} />
//             {data.map((item,idx) =>{
//                 return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide-hidden"}/>
//             })}
//             <BsArrowRightCircleFill className="arrow arrow-right" onClick={(nextSlide)} />
//             <span className="indicators">
//                 {data.map((_, idx) => {
//                     return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
//                 })}
//                 </span>
//                 </div>
//     )}


// export default Carousel


// import { useState } from 'react';
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import './carousel.css';

// const Carousel = ({ data }) => {
//     const [slide, setSlide] = useState(0);

//     const nextSlide = () => {
//         setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
//         console.log(`Next Slide Clicked, new slide: ${slide}`);
//     };

//     const prevSlide = () => {
//         setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
//         console.log(`Previous Slide Clicked, new slide: ${slide}`);
//     };

//     return (
//         <div className="carousel">
//             <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
//             {data.map((item, idx) => (
//                 <img 
//                     src={item.src} 
//                     alt={item.alt} 
//                     key={idx} 
//                     className={`slide ${slide === idx ? "active" : "inactive"}`} 
//                 />
//             ))}
//             <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
//             <div className="indicators">
//                 {data.map((_, idx) => (
//                     <button 
//                         key={idx} 
//                         onClick={() => setSlide(idx)} 
//                         className={slide === idx ? "indicator active" : "indicator"}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Carousel;

import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './carousel.css';

const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
            {data.map((item, idx) => (
                <img 
                    src={item.src} 
                    alt={item.alt} 
                    key={idx} 
                    className={`slide ${slide === idx ? "active" : "inactive"}`} 
                />
            ))}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
            <div className="indicators">
                {data.map((_, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => setSlide(idx)} 
                        className={slide === idx ? "indicator active" : "indicator"}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
