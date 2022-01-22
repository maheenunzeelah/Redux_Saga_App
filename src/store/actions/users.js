import { ActionTypes } from "../types";

export const getUsersRequest=()=>({
    type:ActionTypes.GET_USERS_REQUEST
})

export const getUsersSuccess=({items})=>({
type:ActionTypes.GET_USERS_SUCCESS,
payload:{items}
})