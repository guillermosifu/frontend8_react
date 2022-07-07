import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import{useEffect, useState} from "react";

import PokemonDetail from "../componentes/PokemonDetail/index"
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
    <Grid container spacing={3}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            // aca el codigo visual
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Card className="card-pokemon">
                <CardMedia
                  component="img"
                  className="img-pokemon"
                  image={`${imgUrl}${index + 1}.svg`}
                />
                <CardContent className="center">
                  <h3 className="name-pokemon">{pokemon.name}</h3>
                 
                  {/* vamos a pasarle el nombre como atributo*/}
                  <PokemonDetail nombre={pokemon.name} url={pokemon.url} />
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
</Container>
    );
};


export default Home;