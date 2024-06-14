export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {...state, data: action.payload};
    case "ADD_FAVS":
      return {...state, favs: [...state.favs, action.payload]};
    case "BORRAR_FAVS":
      const filtradoFavs = state.favs.filter(
        (item) => item.id !== action.payload.id
      );
      return {...state, favs: filtradoFavs};
    case "TOGGLE_THEME":
      return {...state, theme: state.theme === "light" ? "dark" : "light"};
    default:
      throw new Error();
  }
};