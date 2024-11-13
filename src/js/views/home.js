import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactForm } from "../component/contactForm.jsx";
import { Card } from "../component/card.jsx";

export const Home = () => {
	//para acceder al store y actions en flux, tenemos que importar el Context
	const { store, actions } = useContext(Context);

	/*
	vista principal
	*/

	return (
		<div className="text-center mt-5">
			{/* 
			en vez de <a> utilizamos el Link y utilizamos el 
			atributo to como haciamos con el href 
			*/}
			<Link to='/about'>
				ir a About
			</Link>
			<ContactForm />

			{/* hacemos map de los contactos (contacts) 
			que estan en el store en flux */}
			{
				store.contacts?.map(el => <Card
					id={el.id}
					name={el.name}
					phone={el.phone}
					address={el.address}
					email={el.email}
				/>)
			}
		</div>
	);
}