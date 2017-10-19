"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducerBody_1 = require("./reducerBody");
const reducerListHotel_1 = require("./reducerListHotel");
exports.StoreCombine = redux_1.combineReducers({
    materBody: reducerBody_1.default,
    listhotel: reducerListHotel_1.default
});
//# sourceMappingURL=index.js.map