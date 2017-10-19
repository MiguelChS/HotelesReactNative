"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reduces_1 = require("./reduces");
exports.default = redux_1.createStore(reduces_1.StoreCombine);
//# sourceMappingURL=store.js.map