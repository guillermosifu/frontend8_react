import{Grid, TextField,Card,CardContent,Button} from "@mui/material"
import { useContext ,useState } from "react"
import logoregister from "../../assets/logoregister.jpg"
import{UserContext} from "../../context/userContext"
import swal from "sweetalert"


const Login =()=>{

const {user,storeUser} = useContext(UserContext);

const [userData ,setUserData] = useState({
    email:"",
    password:"",
})

const handleChangeInput =(e)=>{
   const{name,value} = e.target;
   setUserData({
    ...userData,
    [name]:value,
   });
};

const handleClickLogin=()=>{
    if(userData.email === "pepe@gmail.com" && userData.password === "12345678"){
        const user ={
            nombre: "pepe",
            apellido :"rios",
            edad: 21,
            dni: "123456",        
        }
        storeUser(user);
    } else{
        swal({
            icon: "error",
            title: "Error",
            text: "INRESO NO VALIDO"
        })
    }
}

    return(
       <Grid
       container
       alignItems="center"
       justifyContent="space-around">
        <Grid item md ={6}>
          
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
                        onChange={handleChangeInput}
                        />
                    </Grid>
                    <Grid item md={12} mt={5}>
                        <TextField
                        label="Password"
                        fullWidth
                        name="password"
                        type="password"
                        onChange={handleChangeInput}
                        />
                    </Grid>
                    <Grid item md={12} mt={3}>
                        <Button
                        sx={{backGroundColor: "#000"}}
                        variant="contained"
                        fullWidth
                        size="large"
                       onClick={handleClickLogin}
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