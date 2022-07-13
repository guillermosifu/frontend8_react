import{Container,Grid , TextField,CardContent,CardMedia ,Card} from "@mui/material";
import{useEffect, useState} from "react";
import { getDataFromPokemon } from "../../service";


const Flags =()=>{
const [countries,setCountries]=useState([])

const fetchCountries = async ()=>{
    const response = await getDataFromPokemon("https://restcountries.com/v3.1/all");
    setCountries(response) 
};

useEffect(()=>{
   fetchCountries() 
},[]);




    return(
    <Container>
        <Grid container spacing ={3} mt={5}>
            <Grid item md={6} >
          <TextField label="buscar paises"/>
            </Grid>
            <Grid item md={6}>
          <TextField label="buscar Regiones"/>
            </Grid>
            {
                countries.length>0 && countries.map(country =>(
                    <Grid item md={3} xs={12}>
                        <Card>
                            <CardMedia  component ="img" height={200} image={country.flags.svg}/>
                            <CardContent>
                                <h4>{country.name.common}</h4>
                                <p>Capital {country.capital}</p>
                                <p>Poblacion{country.population}</p>
                                <p>Region{country.region}</p>
                            </CardContent>
                        </Card>
                        </Grid>
                ))



            }
        </Grid>
    </Container>
    )
}


export default Flags;