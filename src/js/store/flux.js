const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			singlePlanet: {},
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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
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
			},
			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					if (response.status != 200) {
						console.log("Error en la solicitud. Code: ", response.status)
					}
					const body = await response.json()
					setStore({ characters: body.results});
				} catch (error) {
					console.log(error);
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets")
					if (response.status != 200) {
						console.log("Error en la solicitud. Code: ", response.status)
					}
					const body = await response.json()
					setStore({ planets: body.results});
				} catch (error) {
					console.log(error);
				}
			},
			getSinglePlanet: async (uid) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/${uid}")
					if (response.status != 200) {
						console.log("Error en la solicitud. Code: ", response.status)
					}
					const body = await response.json()
					setStore({ singlePlanet: body.results});
				} catch (error) {
					console.log(error);
				}
			},
		}
	};
};

export default getState;
