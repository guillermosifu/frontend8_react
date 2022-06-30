import{useState} from "react";

const Primercomponente = () =>{
    //React tinene una funcion interna llamada useState
    // el nombre de la funcion debe empezar con mayusula
    //par poder usar useState debemos importarla desde react
    //Al usar useState la forma en la cual creamos una variable cambia
    //por que debemos defirni 2 cosas priemero el nombre de la variable y segundo 
    //la funcion que se encargara de camabiar el estado 
    //count : es la variable que usaremos para podermostrar el valor 
    //setCount :funcion que se encarga de asiganrle el valor 

const [count, setCount] = useState(0);

//esta fucnion retornar una vista 
// en react usamos return ()para indicar lo queesta dento de la parantesis

const sumar = ()=> setCount(count +1);
const restar =()=> setCount(count -1);

return(

 <div>
<h1>hola mundo</h1>
<h2>{count}</h2>
<h3>hola grupo 8</h3>
<button onClick= {sumar}>sumar</button>
<button onClick={restar}>restar</button>
 </div>
   

);


};

export default (Primercomponente);