import {combineReducers, configureStore} from "@reduxjs/toolkit";
import UsersReducer from "./reducers/users-reducer";
import ProductReducer from "./reducers/product-reducer";
import FirmSlice from "./reducers/firm-slice";

const combineReducersCustom = combineReducers({
    user: UsersReducer,
    product: ProductReducer,
    firm: FirmSlice,
})


export const store = configureStore({
    reducer: combineReducersCustom,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
})

// state = {}  => {
// userList:[]
// }


// state = {
//  user:{
//      userList:[]
//  },
//  product:{
//      productList:[]
//  },
// firm:{
//
// }
// }