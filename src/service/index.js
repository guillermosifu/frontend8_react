//sera nuiestro archivo donde almacenaremos nuestras Apis
//una buena practica es tener URL  en una variable 
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

//podemos crea funcion generica es la que se encargar de hacer las peticiones
//como parametro vamos arecibir la URL que puede ser la lista o el detalle 
//url sera el parametro que reciba (la url) hacia donde se hara la peticion
//url =BASE_URL significar que si el url al estar vacia es decir cuando llame ls funcion no le paso valor () sers el url que tenemos como base -defecto 
//getDataFromPokemon()= al url base-por defecto 
//url toma el valor https//link.com

export const getDataFromPokemon = async (url = BASE_URL) =>{
const response = await fetch(url);
const data = await response.json();
 try{
 //ahora debemos ejecutar el fecth para poder traer la informacion
 const response = await fetch(url);
const data = await response.json();
  console.log("data",data)
  return data;
 }catch (error){
    console.log(error.message);
 }
}




