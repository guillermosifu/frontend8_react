

import { createContext,useState } from "react";

export const UserContext = createContext();

// provider siempre va a bahar con usecontext

export const UserProvider =(props)=>{
    const[user,setUser] = useState({
        name:"guillermo",
        last_name:"sifuentes",
    })
    return (
        <UserContext.Provider value={{user,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}