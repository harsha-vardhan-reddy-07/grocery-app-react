import { createContext, useState } from "react";


export const GeneralContext = createContext();


const GeneralContextProvider = ({children}) =>{

    const [cartOpen, setCartOpen] = useState(false);

    return(
        <GeneralContext.Provider value={{cartOpen, setCartOpen}}>{children}</GeneralContext.Provider>
    )

}

export default GeneralContextProvider;