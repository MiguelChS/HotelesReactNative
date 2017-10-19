"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contants_1 = require("../contants");
let init = {
    list: []
};
function reducer(state = init, action) {
    switch (action.type) {
        case contants_1.LOAD_LIST_HOTELES: {
            return Object.assign({}, state, { list: action.value });
        }
        default: {
            return state;
        }
    }
}
exports.default = reducer;
//# sourceMappingURL=reducerListHotel.js.map