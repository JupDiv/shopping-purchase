import { put, all, call } from 'redux-saga/effects';
import { set } from '../redux/reducers/shopReducer';
import { getDataFromAPI } from '../utils/getDatafromApi';
import type { ProductType } from '../types/commonTypes';

export function* getDataAsync() {
  try {
    const res: ProductType[] = yield call(() => getDataFromAPI());
    yield put(set(res));
  } catch (e) {
    new Error('we have an error');
  }
}

export default function* rootSaga() {
  yield all([getDataAsync()]);
}
