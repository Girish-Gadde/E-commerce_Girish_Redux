import { combineReducers } from "redux";
import { productsReducar, selectedProductReducer } from "./productsReducar";

const reducers= combineReducers({
    allProducts: productsReducar,
    product: selectedProductReducer,
})

export default reducers;