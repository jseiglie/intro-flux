import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { About } from "./views/about.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						{/* podemos crear tantas rutas como necesitemos */}
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About/>} />
						<Route path="/demo" element={<Demo />} />
						{/* esta es una ruta dinamica, para definir un paramatro
							tenemos que usar : y lo que se escriba despues, en el objeto 
							que recibimos de useParams se mostrara como propiedad.
							single/:theid --> theid es la propiedad y el valor lo tomara 
							del url
															/single/:theid	
							ej: https://curly-7wv.github.dev/single/1 		--> theid: 1 
						*/}
						<Route path="/single/:theid" element={<Single />} />
						{/* 
						cualquier ruta a la que se intente acceder no este definida
						 antes del * sera redirigida a la ruta *  mostrando not found 
						*/}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
