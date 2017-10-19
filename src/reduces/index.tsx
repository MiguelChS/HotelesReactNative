import { combineReducers } from 'redux';
import reduceBody from './reducerBody';
import reducelistHotel from './reducerListHotel';
import { _StoreBody, _StoreListHoteles } from '../typeStore';

export interface _StoreCombine {
    materBody: _StoreBody
    listhotel: _StoreListHoteles
}

export const StoreCombine = combineReducers<_StoreCombine>({
    materBody: reduceBody,
    listhotel: reducelistHotel
})

