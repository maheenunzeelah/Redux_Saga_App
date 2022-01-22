import { takeEvery, fork, call, put, takeLatest, take } from "redux-saga/effects";
import { ActionTypes } from "../store/types";
import * as actions from "../store/actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({ items: result.data.data }));
  } catch (e) {
    yield put(actions.userError({error:"Error in getting users from api"}))
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(ActionTypes.GET_USERS_REQUEST, getUsers);
}

function* createUser(action) {
    console.log(action)
    try{
  yield call(api.createUser, {
    firstName: action.payload.firstName,
    lastName: action.payload.lastName,
  });
  yield call(getUsers);
}
catch(e){
    yield put(actions.userError({error:"Error in creating user"}))
}
}
function* watchCreateUserRequest() {
  yield takeLatest(ActionTypes.CREATE_USER_REQUEST, createUser);
}
function* deleteUser({userId}){
    try{
        yield call(api.deleteUser,{userId});
        yield call(getUsers);
    }
    catch(e){
        yield put(actions.userError({error:"Error in deleting user"}))
    }
    
}
function* watchDeleteUserRequest(){
    while(true){
        const action=yield take(ActionTypes.DELETE_USER_REQUEST);
        yield call(deleteUser,{userId:action.payload.userId});
    }
}
const userSaga = [fork(watchGetUsersRequest),fork(watchDeleteUserRequest),fork(watchCreateUserRequest)];

export default userSaga;
