import React, { useContext, useState } from "react";
import { ComponentePrueba } from "../component/componentePrueba.jsx";
import { Context } from "../store/appContext.js";


export const About = () => {
    //para acceder al store y actions en flux, tenemos que importar el Context
    const { store, actions } = useContext(Context);
    const [nick, setNick] = useState('');

    const handleClick = () => {
        actions.changeName(nick);
    }

    // const sum = (a,b) => a+b

    //console.log(sum(2,2))

    console.log(actions.sum(2, 2))

    return (
        <>
            <h1>About page!</h1>
            <input type="text" value={nick} onChange={e => setNick(e.target.value)} />
            <button onClick={handleClick}>cambiar nick</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <ComponentePrueba />
        </>
    )
}