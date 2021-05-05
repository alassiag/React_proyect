import './Style.scss'
import React, { useState } from 'react';
import leftArrow from '../../assets/images/Icon feather-arrow-left-circle.svg'
import rightArrow from '../../assets/images/Icon feather-arrow-right-circle.svg'


const Pruducts = () => {
    const [selected, setSelected] = useState(0)
    //lo hago de esta manera a proposito, se que lo podria hacer sin necesidad de crear objetos.
    const carouselContent = [{
        title: "Sed ut perspiciatis 1", subtitle: "Nemo Enim",
        message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
        title: "Sed ut perspiciatis 2", subtitle: "Nemo Enim",
        message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
        title: "Sed ut perspiciatis 3", subtitle: "Nemo Enim",
        message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    }]



    const upPosition = () => {
        if (selected !== carouselContent.length - 1) {
            setSelected(selected + 1);
        } else {
            setSelected(0)
        }
    }
    const lowerPosition = () => {
        if (selected > 0) {
            setSelected(selected - 1)
        } else {
            setSelected(carouselContent.length - 1)
        }
    }

    return (
        <div className="section3" id="product">
            <div className="content-s3">
                <div className="container">
                    <div className="photo-background-s3">
                        <div className="block-orange-s3">
                            <div className="carousel">
                                <div className="carousel-content">
                                    {
                                        carouselContent.map((item, index) => {
                                            if (index === selected) {
                                                return (
                                                    <div className="item selected" key={index}>
                                                        <p className="text1-s3">{item.title}</p>
                                                        <p className="text2-s3">{item.subtitle}</p>
                                                        <p className="text3-s3">{item.message}</p>
                                                    </div>)
                                            } else {
                                                return (
                                                    <div className="item" key={index}>
                                                        <p className="text1-s3">{item.title}</p>
                                                        <p className="text2-s3">{item.subtitle}</p>
                                                        <p className="text3-s3">{item.message}</p>
                                                    </div>)
                                            }
                                        })
                                    }
                                </div>
                                <div className="button-s3">
                                    <button href="" className="left-arrow"><img src={leftArrow} alt="flecha izquierda" onClick={lowerPosition} /></button>
                                    <button href="" className="left-arrow"><img src={rightArrow} alt="flecha derecha" onClick={upPosition} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pruducts