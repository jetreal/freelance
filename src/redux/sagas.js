import { put, takeEvery, all } from 'redux-saga/effects'


const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// Наша Сага-рабочий (worker Saga): будет выполнять асинхронную задачу увеличения счётчика
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

// Наша Сага-наблюдатель: создаёт новые incrementAsync задачи на каждом INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('CHANGE_POINTS_PLACE', helloSaga)
  yield takeEvery('LEFT_SLIDE', initialSlideLeftSaga)
  yield takeEvery('RIGHT_SLIDE', initialSlideRightSaga)
}

export function* helloSaga() {
    yield delay(1100)
    yield put({type: 'CHANGE_POINTS_PLACE_WITH_DELAY'})
  }

export function* initialSlideLeftSaga() {
  yield delay(1000)
  yield put({ type: 'INITIAL_SLIDE_LEFT' })
}
export function* initialSlideRightSaga() {
  yield delay(1000)
  yield put({ type: 'INITIAL_SLIDE_RIGHT' })
}

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync(),
      initialSlideLeftSaga(),
      initialSlideRightSaga(),
    ])
  }