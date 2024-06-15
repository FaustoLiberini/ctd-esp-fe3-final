import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const DentistaState = createContext();

const initialState = {
  theme: 'light',
  data: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const url = "https://jsonplaceholder.typicode.com/users";
  
  useEffect(() => {
    axios(url)
      .then((res) => dispatch({ type: "GET_DATA", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <DentistaState.Provider value={{ state, dispatch }}>
      {children}
    </DentistaState.Provider>
  );
}

export default Context;

export const useDentistaState = () => useContext(DentistaState);