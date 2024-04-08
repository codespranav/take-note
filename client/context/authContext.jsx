/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const ContextProvider = (props) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    useEffect(() => {
        const data = localStorage.getItem("auth")
        if(data){
            const parsedData = JSON.parse(data)
            setAuth({
                ...auth, 
                user: parsedData.user,
                token: parsedData.token
            })
            setIsInitialized(true);
        }
        //eslint-disable-next-line
      }, [])
    return (
        <AuthContext.Provider value={{ auth, setAuth, isInitialized }}>
            {props.children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);
export { ContextProvider, useAuth };
