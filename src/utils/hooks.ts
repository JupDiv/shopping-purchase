import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../redux/stores/store';
import type { ProductType } from '../redux/reducers/shopReducer';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
