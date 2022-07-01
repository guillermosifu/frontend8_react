import { TextField } from "@mui/material";
import { useState } from "react"

const FormUser = ()=>{
//la otra forma en la cual podemos guaradar los datos de los inputs
//es un objeto para ello necesitamos que los inputs tebgan un name 
//para los name me sirvan como un key el valor sea lo que se obtenga de los inputs

//ahora debemos crear una  variable que tengar por default un objeto con los keys(name)
// pero qye los value esten vacios

const [valorDeInputs ,setValorInputs] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
});

//ahora debemo construir una funcion que se encargue de almacenar los valores
//de los inputs en el objeto 

const handleInputValues = (e) => {
//debemos extraer 2 event
//1 el name de cada input 
//2 el value de cada input
//name = e.target.name
//value = e.target.value 

const {name, value} = e.target;
// valorinputs ;es para hacer una copia del objeto actual y ademas estamos agregando
// el nuevo key y value que recibimos 
//[name] recuerden que name es una variable por ende para poder usarla como key
// debemos colocarla enetre []
// value :el valor que estamos recibiendo de nuetro input 
setValorInputs({
    ...valorDeInputs,
    [name]:value,}
);
};

return(
<div class="container">
        <form>
            <h4>FORMULARIO DE USUARIO </h4>
            <h5>Nombre {valorDeInputs.nombre}</h5>
            <h5>apellido {valorDeInputs.apellido}</h5>
            <h5>correo {valorDeInputs.email}</h5>
            <h5>password {valorDeInputs.password}</h5>
     <p>
        
        <TextField
        type="text"
        name="nombre"
        variant = "outlined"
        onChange = {handleInputValues}
        label="ingrese su nombre"       


        />
     </p>
     <p>
        <TextField
        type="text"
        name="apellido"
        variant = "standard"
        onChange = {handleInputValues}
        label="ingrese su Apellido"

        />
     </p>
     <p>
        <TextField
        type="email"
        name="email"
        variant = "standard"
        onChange = {handleInputValues}
        label="ingrese su email"

        />
     </p>
     <p>
        <TextField
        type="password"
        name="password"
        variant = "standard"
        onChange = {handleInputValues}
        label="ingrese su contraseña"

        />
     </p>
          </form>
          </div>

);
};

export default FormUser