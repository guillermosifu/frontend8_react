import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../componentes/Header";
import App from "../Apppractica"
import Pokemon from "../pages/Pokemon";
import Flags from "../pages/Flags"
import Detail from "../pages/Detail/index"
import Login from "../pages/Login/index"
import FormUser from "../componentes/FormUser"
import Private from "../private/index"




const Router = () => {
    // como esto es un componente tenemos que usar return para poder crear las rutas
    return (
      <BrowserRouter>  
      <Header/>      
      <Routes>            
       <Route path="/flags" element ={<Flags/>}/> 
       <Route path="/formulario" element ={<FormUser/>}/> 
       <Route path="/flags/detail/:name" element={<Detail/>}/> 
    
       <Route path="header" element ={<Header/>}/>     
       <Route path="/" element ={<Login/>}/> 

       <Route element ={<Private/>}>
        <Route path="pokemon" element={<Pokemon/>}/>
        
       </Route>
   
   
     

      </Routes>  
                         
      </BrowserRouter>
    );
  };
  
  export default Router;