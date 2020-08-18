import {put, takeEvery, all, call} from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* helloSaga(){
    console.log('Hello Sagas!')
}

export function* incrementAsync(){
    console.log(`Starting timer`)
    yield call(delay, 10000)
    console.log(`incrementing`)
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync(){
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
