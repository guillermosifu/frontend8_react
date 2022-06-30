import {useState} from "react"
// esto sera un componente el cual nos renderizar un formulario de registro 
const FormRegister = () =>{
    //en react para obtener el valor de input 
    //es usando onChange este evento me va permitir capturar el valor 
    //de los input y guardarlos en una variable 
    const [nombre ,setNombre] = useState("");
    const[apellido, setApellido] = useState("");
 //Recordemos que con event podemos obtener el valor del input 
 // event = event.target.value
 // vamos haver iuna funcoinla cual vada vez que se ejecute l onChange se llame
 //y modifique el valor de la variable "nombre"

 // recordemos que event  es solo un nombre este puede ser cambiado 
const handleInputName = (e)=>{
    // que hdebemos hacer para darle el valo nombre ?
    //recordemos que el valor va dentro de los ()

setNombre(e.target.value);
};

const handleInputLastName = (e) => setApellido(e.target.value);


return(
<div>
    <form>
        <h4>Formulario de registro</h4>
        <h4>Nombre {nombre}</h4>
        <h4>Apellido {apellido} </h4>
        <p>
            <input
            type="text"
            onChange={handleInputName}
            placeholder= "ingrese su nombre "/>
        </p>
        <p>
            <input
            type="text"
            onChange={handleInputLastName}
            placeholder= "ingrese su Apellido "/>
        </p>
        <p>
            <input
            type="email"
            
            placeholder= "ingrese su email "/>
        </p>
        <p>
            <input
            type="password"
            
            placeholder= "ingrese su password "/>
        </p>
        <p>
           <button type="submit">Registrar</button>
        </p>
    </form>
</div>




)
}

export default FormRegister;