import store from "../../redux/store";

import { actionTypes } from "../actions/userActions";
const initialState = [];

export const userData = (state = initialState, action) => {
  console.log("state", state.userData, action);
  switch (action.type) {
    case actionTypes.USERDATA:
      return {
        ...state,
        userData: action.payload,
      };
    case actionTypes.WHISHLISTED:
      return {
        ...state,
        userData: state.userData.map((item) => {
          if (item.id == action.payload.item.id) {
            return {
              ...item,
              isWhishlisted: action.payload.toggleVariable,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
