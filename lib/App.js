"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const Component_1 = require("./Component");
exports.default = () => {
    return (React.createElement(react_redux_1.Provider, { store: store_1.default },
        React.createElement(Component_1.default, null)));
};
//# sourceMappingURL=App.js.map