import './Style.scss'
import React, { useState } from 'react'

const Accordion = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="container-accordion">
            <div onClick={() => setIndex(0)} className={`${index === 0 ? "item active" : "item"}`} >
                <button className="accordion" >Sed ut perspiciatis</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div onClick={() => setIndex(1)} className={`${index === 1 ? "item active" : "item"}`}>
                <button className="accordion" >Ut enim ad minima veniam</button>
                <div className="panel">
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div onClick={() => setIndex(2)} className={`${index === 2 ? "item active" : "item"}`}>
                <button className="accordion" >Sit amet, consecteur, adipisci</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion