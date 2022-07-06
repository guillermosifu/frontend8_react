import {Container} from "@mui/material"
import{useEffect, useState} from "react";
import { getDataFromPokemon } from "../service";



const Home=()=>{
    
//crear una variable donde se pueda guardar pokemones

const [pokemones, setPokemon] = useState([]);

//debemos crear una funcion ejecutar el getDataFromPokemon y 
//la data retorne esa funcion guardarla usando setPokemon
const fecthPokemonList = async () =>{
const listPokemones = await getDataFromPokemon();

console.log("listPokemones.result", listPokemones.results);
setPokemon(listPokemones.results);

};

//en react existe una funcion llamada useEfect  la cual se ejecuta cuando la pagina
//esta iniciando ,vamos a usar useEffetc si queremos ejecutar algo 
//inicion d la aplicacion
//la estrauctura de useEffect es la sgte
useEffect(()=>{
    //aca llamamos la funcion que queremos ejecutar 
    fecthPokemonList();
    //importamte por ahora en los useEffetc debemos colocar un arry vacio 
    //es para evitar un bucle infinita 
    //la funcion que esta dentro de useEffect se llama n veces de forma infinta 
},[]);


    return(
<Container>
   
    <h1>
        pokedex
    </h1>
   
</Container>
    );
};


export default Home;