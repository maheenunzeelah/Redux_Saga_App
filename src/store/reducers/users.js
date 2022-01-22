import { ActionTypes } from "../types";

const initialState={
    items:[],
    error:''
}

export const usersReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.GET_USERS_SUCCESS:
            return {...state,items:action.payload.items}
        case ActionTypes.USER_ERROR:
            return {...state,error:action.payload.error}    
        default:
           return state    
    }
}