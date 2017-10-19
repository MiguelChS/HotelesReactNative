"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants = require("../contants");
function changeBody(value, name) {
    return {
        type: constants.CHANGE_BODY,
        value: {
            componet: value,
            name: name
        }
    };
}
exports.changeBody = changeBody;
function loadList(list) {
    return {
        type: constants.LOAD_LIST_HOTELES,
        value: list
    };
}
exports.loadList = loadList;
//# sourceMappingURL=index.js.map