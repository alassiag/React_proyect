import './Style.scss'
import React, { useState } from 'react'

const Accordion = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="container-accordion">
            <div onClick={() => setIndex(0)} className={`${index === 0 ? "item active" : "item"}`} >
                <button className="accordion" >Sed ut perspiciatis</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div onClick={() => setIndex(1)} className={`${index === 1 ? "item active" : "item"}`}>
                <button className="accordion" >Ut enim ad minima veniam</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div onClick={() => setIndex(2)} className={`${index === 2 ? "item active" : "item"}`}>
                <button className="accordion" >Sit amet, consecteur, adipisci</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion