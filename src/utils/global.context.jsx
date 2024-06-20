import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../reducers/reducer";

const initialState = {theme: "light", data: [], favs: []};

const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios(url)
      .then((res) =>
        dispatch({type: "GET_DATA", payload: res.data})
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export {ContextGlobal};
