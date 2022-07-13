import { useState } from "react";

import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  Grid,
  Slider,
} from "@mui/material";
import { getDataFromPokemon } from "../../service";

const PokemonDetail=(props)=>{
const [abrir,setAbrir] = useState(false);

const[pokemonData ,setPokemonData] =useState({});

const fetchDetailFromPokemon = async ()=>{
  const pokemon = await getDataFromPokemon(props.url);
  setPokemonData(pokemon)
};


const handleOpenDialog = async ()=>{
  if(!abrir){
    await fetchDetailFromPokemon();
  }
  
  setAbrir(!abrir)}
//  const openDialog=()=>{
//   setAbrir(true);
//  };

//  const closeDialog=()=>{
//   setAbrir(false);
//  }



  return(
    <div>
     <Button onClick={handleOpenDialog} variant="contained">
      ver detalle
     </Button>
     <Dialog
      open={abrir} 
      onClose={handleOpenDialog}
      fullWidth={"md"}
      maxWidth={"md"}>
      <DialogContent> 
        {Object.keys(pokemonData).length >0 &&(
          <div className="center">
          <h2 className="name-pokemon">{props.nombre}</h2>
          <Grid container>
            <Grid item md={6}>
              <h4>Habilidades</h4>
              {pokemonData.abilities.map((abilitie)=>(
                <Chip 
                label ={abilitie.ability.name}
                color="primary"
                sx={{ marginRigth : 2}}/>
              ))}

              <h4>Datos</h4>
              {pokemonData.types.map((type)=>(
                <Chip 
                label={type.type.name}
                color ="warning"
                sx={{ marginRight: 2}}/>
              ))}
              <Chip 
              label={`${pokemonData.weight / 10} kg`}
              color="success"
              sx={{marginRigth:2}}
              />
              <Chip label={`${pokemonData.height / 10} m`}
              color="success"
              sx={{ marginRigth:2}}/>

             <h4>Puntos de base</h4>
             {pokemonData.stats.map((stat)=>(
              <div>
                <h5>{stat.stat.name}</h5>              
              <Slider
              defaultValue={stat.base_stat}
              aria-label="always visible"
              valueLabelDisplay="on"
              disabled/>
              </div>
             ))}





            </Grid>
            <Grid item md={6}><img width={450} src={
           pokemonData.sprites.other["home"]
           .front_default}
            alt=""/></Grid>
          </Grid>
          
          </div>
        )}    
               
      <Button onClick ={handleOpenDialog}>cerrar</Button>
       </DialogContent>
     </Dialog>
    
    </div>
  )
};

export default PokemonDetail;