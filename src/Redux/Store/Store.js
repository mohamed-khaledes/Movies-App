import { createStore ,applyMiddleware} from "redux";
import { rootReducers } from "../Reducer/rootReducers";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// 1-create store
export const Store = createStore(rootReducers,applyMiddleware(thunk));
