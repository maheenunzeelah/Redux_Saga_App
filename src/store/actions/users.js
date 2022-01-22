import { ActionTypes } from "../types";

export const getUsersRequest = () => ({
  type: ActionTypes.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ items }) => {
  console.log(items);
  return {
    type: ActionTypes.GET_USERS_SUCCESS,
    payload: { items },
  };
};

export const createUserRequest = ({ firstName, lastName }) => {
  return {
    type: ActionTypes.CREATE_USER_REQUEST,
    payload: { firstName, lastName },
  };
};
export const deleteUserRequest = ({ userId }) => {
  return {
    type: ActionTypes.DELETE_USER_REQUEST,
    payload: { userId },
  };
};
export const userError = ({ error }) => {
  return {
    type: ActionTypes.USER_ERROR,
    payload: { error },
  };
};
