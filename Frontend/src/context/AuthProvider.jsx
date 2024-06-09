//rfce is react functional component export

import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export default function AuthProvider({children}) {   //children ke andar other components aate hain jaise app.jsx navbar wala compo etc. isiliye pass kr rhe hain taaki baaki jagah bhi ye context use kr paayein
    const initialAuthUser = localStorage.getItem("Users");
    //we will use useState to manage state
    const [authUser, setAuthUser] = useState(
        initialAuthUser? JSON.parse(initialAuthUser) :undefined   //agar authorised user hai to parse kr denge otherwise undefined rakho
    )
    return(
        //value ko array ke form mein return krenge i.e [] use krke 
        <AuthContext.Provider value={[authUser, setAuthUser]}>  
            {children}
        </AuthContext.Provider>
    )
}
//khudka hook create krenge named useAuth
export const useAuth = () => useContext(AuthContext);  

//ye ban gya humara complete api
//iss context main file mein app ko bhi rap ya bind krna pdega
