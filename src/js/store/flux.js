import Fav from "../components/views/probandofav";

export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            personajes: [],
            favoritos: []
            
        },
        actions: {
            getPersonajes: () => {
            fetch("https://www.swapi.tech/api/people")
            .then(response => response.json())
            .then(data => setStore({personajes: data.results}))
            
            },
                
        
        deleteElement: (nombre) => {
            const store = getStore()
            setStore({favoritos: store.favoritos.filter((i, index)=> {
                if(index === nombre){
                    return false
                } else {
                   return true
                }
            })})},

        addFav: (index) => {
            console.log(index, "Probando agregar a favoritos")
            const store = getStore()
            setStore({favoritos: store.favoritos.concat(index) })

        }


        }

        }
    };
