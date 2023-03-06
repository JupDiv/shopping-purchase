import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import BasketSlice from '../reducers/shopReducer';
import rootSaga from '../../sagas/asyncSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    products: BasketSlice,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
