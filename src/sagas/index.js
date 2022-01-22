import {all} from 'redux-saga/effects';
import userSaga from './users';
export default function* rootSaga(){
  yield all([...userSaga]);
}