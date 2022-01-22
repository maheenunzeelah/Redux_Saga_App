import {takeEvery} from 'redux-saga/effects';
import { ActionTypes } from '../store/types';
import * as api from '../api/users';
function* getUsers(){
    try{

    }
    catch(e){

    }
}

function* watchGetUsersRequest(){
    yield takeEvery(ActionTypes.GET_USERS_REQUEST,getUsers)
}