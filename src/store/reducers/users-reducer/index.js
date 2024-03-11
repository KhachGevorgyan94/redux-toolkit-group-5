import {UserReducerActions} from "./actions";

const initialState = {
    userList: []
}

// state

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {

            state.userList = [...state.userList, action.payload]
            return {...state}
        }
        case UserReducerActions.DELETE_USER: {
            return {...state}
        }
        default: {
            return state
        }
    }
}

export default UsersReducer