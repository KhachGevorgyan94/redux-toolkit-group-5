import {combineReducers, createStore} from "redux";
import UsersReducer from "./reducers/users-reducer";
import ProductReducer from "./reducers/product-reducer";

const combineReducersCustom = combineReducers({
    user: UsersReducer,
    product: ProductReducer
})


export const store = createStore(combineReducersCustom)

 // state = {}  => {
 // userList:[]
 // }


// state = {
//  user:{
//      userList:[]
//  },
//  product:{
//      productList:[]
//  }
// }