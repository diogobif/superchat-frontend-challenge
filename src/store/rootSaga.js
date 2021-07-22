import { all, fork } from 'redux-saga/effects';

import * as gitUserSaga from './gitUser/saga';

export default function* rootSaga() {
    yield all([...Object.values(gitUserSaga)].map(fork));
}
