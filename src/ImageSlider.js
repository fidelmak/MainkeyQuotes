import React,{ useState } from 'react'
import slideImages from './SlideImages';
import Footer from './Footer';
import './App.css';






const ImageSlider =()=>{
    const slideImagesSize = slideImages.length;
    const [index, setActive] = React.useState(0);
    
    const nextImage = () => {
      setActive((e) => e + 1);
    };
    
const btn ={

}

    return(
    <div className='carenot'> 
    <br />
    <header>MainKey Quotes</header>
    <br />
    <div className='fun'>
            <div>
                <h3>{slideImages[index].caption}</h3>
                <img src={slideImages[index].url} width="350" height="300"/>
            </div>
            <div>
            <button className='button' size="small" onClick={nextImage} disabled={index === slideImagesSize - 1} style={{color:"blue"}}> LOVE DAMINI </button>
            </div>
            <h5><i>I love the way I am feeling me </i></h5>
    </div>
    
    <Footer />


</div>)
}
export default ImageSlider