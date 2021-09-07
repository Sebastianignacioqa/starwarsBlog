export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            personajes: []
            
        },
        actions: {
            getPersonajes: () => {
            fetch("https://www.swapi.tech/api/people")
            .then(response => response.json())
            .then(data => setStore({personajes: data.results}))
            
            },
                
        }
            
        }
    };