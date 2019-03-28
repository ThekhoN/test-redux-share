import UPDATE_DATA from "./actions";

const initialState = {
  data: [{ id: 0, name: "Noob0K" }],
  loading: false,
  error: "",
  success: false
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      console.log("UPDATE_DATA triggered");
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default data;
