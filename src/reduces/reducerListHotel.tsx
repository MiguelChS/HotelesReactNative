import { ILoadList } from '../actions';
import { _StoreListHoteles } from '../typeStore';
import { LOAD_LIST_HOTELES } from '../contants';

let init: _StoreListHoteles = {
    list: []
}

function reducer(state: _StoreListHoteles = init, action: ILoadList): _StoreListHoteles {
    switch (action.type) {
        case LOAD_LIST_HOTELES: {
            return { ...state, list: action.value }
        }
        default: {
            return state;
        }
    }
}

export default reducer;