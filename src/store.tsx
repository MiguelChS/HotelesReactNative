import {createStore} from 'redux';
import {_StoreCombine,StoreCombine} from './reduces';

export default createStore<_StoreCombine>(StoreCombine)