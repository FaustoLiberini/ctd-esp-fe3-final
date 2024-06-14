export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAVS":
      const filteredFavs = state.favs.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, favs: filteredFavs };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error();
  }
};