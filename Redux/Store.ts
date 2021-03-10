import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/rootReducer";

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
