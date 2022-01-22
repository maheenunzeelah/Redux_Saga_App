import { ActionTypes } from "../types";

const initialState={
    items:[]
}

export const usersReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.GET_USERS_SUCCESS:
            return {items:action.payload.items}
        default:
           return state    
    }
}