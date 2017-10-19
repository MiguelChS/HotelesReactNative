import { _ChangeBody } from '../actions';
import { _StoreBody } from '../typeStore';
import { CHANGE_BODY } from '../contants';

let init: _StoreBody = {
    body: null,
    name: ""
}

function reducer(state: _StoreBody = init, action: _ChangeBody): _StoreBody {
    switch (action.type) {
        case CHANGE_BODY: {
            return { ...state, body: action.value.componet, name: action.value.name }
        }
        default: {
            return state;
        }
    }
}

export default reducer;