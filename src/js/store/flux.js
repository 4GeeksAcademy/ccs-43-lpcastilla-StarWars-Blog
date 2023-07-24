const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			singleCharacter: {},
			singlePlanet: {},
			favorites: [],
			favoriteLinks: [],
		},
		actions: {
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
			getSingleCharacter: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${uid}`)
					if (response.status != 200) {
						console.log("Error en la solicitud. Code: ", response.status)
					}
					const body = await response.json()
					setStore({ singleCharacter: body.result });
				} catch (error) {
					console.log(error);
				}
			},
			getSinglePlanet: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`)
					if (response.status != 200) {
						console.log("Error en la solicitud. Code: ", response.status)
					}
					const body = await response.json()
					setStore({ singlePlanet: body.result });
				} catch (error) {
					console.log(error);
				}
			},
			addToFavorites: (characterName) => {
				const store = getStore();
				const favorites = [...store.favorites, characterName];
				setStore( {favorites} );
			},
			removeFromFavorites: (index) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((_, filteredIndex) => filteredIndex !== index);
				setStore({ favorites: updatedFavorites });
			},
			updateFavoriteLinks: () => {
				const store = getStore();
				const favoriteLinks = store.favorites.map((favorite) => {
				  const character = store.characters.find((char) => char.name === favorite);
				  const planet = store.planets.find((pl) => pl.name === favorite);
			
				  if (character) {
					return { name: favorite, link: `/people/${character.uid}` };
				  } else if (planet) {
					return { name: favorite, link: `/planet/${planet.uid}` };
				  } else {
					return null;
				  }
				});
				
				setStore({ favoriteLinks: favoriteLinks.filter((link) => link !== null) });
			  },
		}
	};
};

export default getState;



