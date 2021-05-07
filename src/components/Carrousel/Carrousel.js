import "./Style.scss"
import React, { useState } from 'react'

const Carraousel = (contenido) => {
    
    const [carruselSelected, setCarruselSelected] = useState(0)
    console.log(contenido)
    return (
        <div className="my-carrousel">
            {  
                contenido.children.map((item, index) => {
                    return (         
                        <div className={`${carruselSelected === index ? "item active" : "item"}`}>      
    
                            <div className="content">
                                
                                <div className="text1-s1">
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                                <div className="text2-s1">
                                    <p>
                                        {item.subTitle}
                                    </p>
                                </div>
                                {item.isButton === true ? (
                                    <div>
                                        <button type="button" className="btn-read-more">Read more</button>
                                    </div>
                                ) : (null)}
                            </div>
                        </div>)
                })
            }
            <div className="container-points">
                {
                    contenido.children.map((item, index) => {
                        return (
                            <div onClick={() => setCarruselSelected(index)} className={`${carruselSelected === index ? "point selected" : "point"}`}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carraousel