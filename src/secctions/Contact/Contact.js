//import React, { useState } from 'react'
//import { sendEmail } from "../../Api/axios"
import './Style.scss'

const Contact = () => {
   /* const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Se envio')

        let responseData = await sendEmail(formData)
        console.log(responseData.data)
    }  */

    return (
        <div className="section5" id="contact">
            <div className="content-s5">
                <div className="form-s5 container">
                    <div className="text1-s5">
                        <p>Get in touch <br></br>
                <span>
                                We are hiring!
                </span>
                        </p>
                    </div>

                    <form action="">
                        <div className="form-group row">
                            <input type="text" className="form-control" id="inputName" placeholder="Name" />
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                            <input type="tel" className="form-control" id="inputPhone" placeholder="Phone" />
                            <textarea className="form-control" id="inputMessage" placeholder="Message" />
                        </div>
                        <button type="button" className="btn-read-more"> Send </button>
                    </form>
                   {/* <form action="" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="form-group row">
                            <input value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} type="text" id="inputName" placeholder="Name" />
                            <input value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} type="email" id="inputEmail" placeholder="Email" />
                            <input value={formData.tel} onChange={(e) => { setFormData({ ...formData, tel: e.target.value }) }} type="tel" id="inputPhone" placeholder="Phone" />
                            <textarea value={formData.message} onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }} type="textarea" id="inputMessage" placeholder="Message" />
                        </div>
                        <button type="button" className="btn-read-more rounded-pill"> Send </button>
                    </form>  */}
                </div>

                <div className="img-derecha-s5">
                    <img src="images/contact-image.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Contact