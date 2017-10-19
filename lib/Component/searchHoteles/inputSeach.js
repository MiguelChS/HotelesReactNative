"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
function InputSeach({ value, onChange, onSearch }) {
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.TextInput, { value: value, onChangeText: onChange, underlineColorAndroid: 'transparent', style: styles.input }),
        React.createElement(react_native_1.TouchableOpacity, { style: styles.butonIcon, onPress: onSearch },
            React.createElement(MaterialIcons_1.default, { name: "search", size: 25, color: "#F5B041" }))));
}
exports.InputSeach = InputSeach;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: 10,
        marginLeft: 8,
        marginRight: 8,
        paddingRight: 30,
        justifyContent: 'center'
    },
    butonIcon: {
        position: "absolute",
        right: 10,
        top: 13
    },
    input: {
        marginLeft: 10
    }
});
//# sourceMappingURL=inputSeach.js.map