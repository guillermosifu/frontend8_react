import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import Header from "../componentes/Header";
import Form from "../componentes/Form"
import Nosotros from "../pages/Nosotros";
import Home from "../pages/Home";

const Router = () => {
    // como esto es un componente tenemos que usar return para poder crear las rutas
    return (
      <BrowserRouter>  
      <Header/>
      <Routes>
       <Route path="/" element ={<Home/>}/>      
      </Routes>  
      <Routes>            
       <Route path="/form" element ={<Form/>}/>      
      </Routes> 
      <Routes>
       <Route path="/header" element ={<Header/>}/>      
      </Routes>  
      <Routes>
       <Route path="/nosotros" element ={<Nosotros/>}/>      
      </Routes>  
    
                    
      </BrowserRouter>
    );
  };
  
  export default Router;