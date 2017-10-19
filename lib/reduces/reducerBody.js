"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contants_1 = require("../contants");
let init = {
    body: null,
    name: ""
};
function reducer(state = init, action) {
    switch (action.type) {
        case contants_1.CHANGE_BODY: {
            return Object.assign({}, state, { body: action.value.componet, name: action.value.name });
        }
        default: {
            return state;
        }
    }
}
exports.default = reducer;
//# sourceMappingURL=reducerBody.js.map