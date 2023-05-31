import { createStore } from "redux";
import rootReducer from "./rootReducer";
const store = createStore(rootReducer);
console.log("thistore", store);
export default store;
