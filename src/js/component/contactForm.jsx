import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const ContactForm = () => {
    //importamos store actions del context
    const { store, actions } = useContext(Context);

    //creamos estado para almacenar la info que recogemos del formulario
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', address: ''
    })
    //funcion para recoger informacion de los input y almacenar en el estado
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    //manejamos evento submit del formulario
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        //ejecutamos la funcion createContact de las acciones de flux pasandole
        //formadata como parametro
        actions.createContact(formData)
    }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.name} placeholder="name" name="name" onChange={handleChange} />
            <input type="text" value={formData.email} placeholder="email" name="email" onChange={handleChange} />
            <input type="text" value={formData.address} placeholder="address" name="address" onChange={handleChange} />
            <input type="text" value={formData.phone} placeholder="phone" name="phone" onChange={handleChange} />
            <input type="submit" value={'enviar'} />
        </form>
    )
}