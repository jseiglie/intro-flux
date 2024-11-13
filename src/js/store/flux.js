const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			nickname: 'lola',
			contacts: null
			//contacts recibe la info de actions getContacts que se esta ejecutando
			//en el appContext
		},
		actions: {
			getContacts: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/pepe')
					if (!resp.ok) throw new Error('Error getting contacts')
					const data = await resp.json()
				//pasamos al store la info recibida de la API
					setStore({ contacts: data.contacts })
				} catch (error) {
					console.error(error);
				}
			},
			createContact: async (contact) => {
				//recibimos la informacion del contacto como objeto
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/pepe/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						//pasamos al body el objeto que recibimos con la info del contacto
						body: JSON.stringify(contact)
					})
					if (!resp.ok) throw new Error('Error creating contact')
					const data = await resp.json()
					console.log(data)
				} catch (error) {
					console.error(error);
				}
			},

			//ejemplo de funcion declarada en flux 
			sum: (a, b) => a + b,
			// Use getActions to call a function within a fuction
			changeName: (val) => {
				setStore({ nickname: val })
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
