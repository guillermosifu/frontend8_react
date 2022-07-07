import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import{useEffect, useState} from "react";
import{getDataFromPokemon} from "../service/index"






const Home=()=>{
    const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
//crear una variable donde se pueda guardar pokemones

const [pokemons, setPokemon] = useState([]);

//debemos crear una funcion ejecutar el getDataFromPokemon y 
//la data retorne esa funcion guardarla usando setPokemon
const fetchPokemonList = async () =>{
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
    fetchPokemonList();
    //importamte por ahora en los useEffetc debemos colocar un arry vacio 
    //es para evitar un bucle infinita 
    //la funcion que esta dentro de useEffect se llama n veces de forma infinta 
},[]);


    return(
<Container>   
    <h1>
        pokedex grupo 8
    </h1>
    <Grid container spacing ={3}>
   {pokemons.length > 0 &&
   pokemons.map((pokemon,index)=>
   <Grid item>
   <Card sx={{width : 200}}>
    <CardMedia component ="img" image={`${imgUrl}${index + 1}.svg`}/>
    <CardContent/>
    <h4>{pokemon.name}</h4>
   </Card>
   </Grid>
   )}
   </Grid>
</Container>
    );
};


export default Home;