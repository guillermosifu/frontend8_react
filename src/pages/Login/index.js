import{Grid, TextField,Card,CardContent,Button} from "@mui/material"
import { useContext ,useState } from "react"
import logoregister from "../../assets/logoregister.jpg"
import{UserContext} from "../../context/userContext"


const Login =()=>{
const {user,setUser} = useContext(UserContext);

const handleClick =()=>{
    setUser({
        name:"juan",
        last_name:"zapata",
    })

};



    return(
       <Grid
       container
       alignItems="center"
       justifyContent="space-around">
        <Grid item md ={6}>
           <h4>{user.name} {user.last_name}</h4>
            <img src={logoregister} width={400} alt=""/>
        </Grid>
        <Grid item md={6}>
            <Card>
                <CardContent>
                    <h5>Bienvenidos a tecsup</h5>
                    <p>Bienvenido a la comunidad del grupo 8</p>
                    <Grid container sapacing ={3} mt={5}>
                        <TextField
                        label="Email"
                        fullWidth
                        name="email"
                        />
                    </Grid>
                    <Grid item md={12} mt={5}>
                        <TextField
                        label="Password"
                        fullWidth
                        name="password"
                        />
                    </Grid>
                    <Grid item md={12} mt={3}>
                        <Button
                        sx={{backGroundColor: "#000"}}
                        variant="contained"
                        fullWidth
                        size="large"
                       onClick={handleClick}
                       >
                            Inicia Sesion
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
        

       </Grid>
    )
}



export default Login;