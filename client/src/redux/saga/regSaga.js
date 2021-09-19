import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserAC } from '../actionCreators/loginFormAC';
import { SAGA_FETCH_REG } from '../actionTypes/actionType';


const fetchUsers = async () => {
  // тут должна быть деструктуризация
  const res = fetch('http://localhost:1234/registration', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: {
     // хз как бади подключить
    }
  })
  const resJson = res.json();
  return resJson;
}

function* workerUsers() {
    const user = yield call(fetchUsers)
    yield put(getUserAC(user))
  }

export function* regSaga() {
  yield takeEvery(SAGA_FETCH_REG, workerUsers)
}