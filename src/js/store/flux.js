import Fav from "../components/views/probandofav";

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
                
        
        deleteElement: (index) => {
            console.log(index , "Este console.log es desde actions");
            const store = getStore();
            setStore({personajes: store.personajes.filter((personaje, i)=> {
                if(index === i){
                    return false
                } else {
                   return true
                }
            })})}
        }
    };
}

export default Fav