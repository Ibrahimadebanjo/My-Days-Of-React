import { createContext } from "react";
export const AppContext = createContext();
const ContextProvider = (props) => {

const phone = 192993888482;
const user = {
    name : "Ibrahim Adebanjo",
    age : 23
  }
  const array   = [1,4,6,66,7,5,3,56,7]
  const contextValue = {
    phone,
    user,
    array
  }
    return(
        <AppContext.Provider value={contextValue}>
 {props.children}
        </AppContext.Provider>
    )
    
}
export default ContextProvider;