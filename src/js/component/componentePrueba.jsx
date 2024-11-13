import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ComponentePrueba = () => {
    //para acceder al store y actions en flux, tenemos que importar el Context
    const { store, actions } = useContext(Context);

    return (
        <>
            {/* 
			ejemplo de visualizacion de un mismo valor en diferentes partes de la app
        */}
            <h2>componente de prueba leyendo el store {store.nickname}</h2>
        </>
    )
} 