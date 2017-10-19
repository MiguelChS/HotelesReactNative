"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
function getHoteles(text) {
    return __awaiter(this, void 0, void 0, function* () {
        let respose = text ? yield fetch(`${config_1.config.hostUrl}/filter/${text}`) : yield fetch(`${config_1.config.hostUrl}/`);
        let data = [];
        switch (respose.status) {
            case 200: {
                data = yield respose.json();
                return data;
            }
            case 204: {
                return data;
            }
            default: {
                throw new Error(`Request Fail ${respose.status}`);
            }
        }
    });
}
exports.getHoteles = getHoteles;
//# sourceMappingURL=service.js.map