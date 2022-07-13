import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../componentes/Header";
import App from "../Apppractica"
import Nosotros from "../pages/Nosotros";
import Pokemon from "../pages/Pokemon";
import Flags from "../pages/Flags"

const Router = () => {
    // como esto es un componente tenemos que usar return para poder crear las rutas
    return (
      <BrowserRouter>  
      <Header/>

      <Routes>            
       <Route path="/flags" element ={<Flags/>}/>      
      </Routes> 
      <Routes>
       <Route path="pokemon" element ={<Pokemon/>}/>      
      </Routes>        
      <Routes>
       <Route path="header" element ={<Header/>}/>      
      </Routes>  
      <Routes>
       <Route path="/" element ={<App/>}/>      
      </Routes>     
                    
      </BrowserRouter>
    );
  };
  
  export default Router;