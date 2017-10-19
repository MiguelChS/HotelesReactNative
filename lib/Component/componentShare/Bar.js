"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
let styles = react_native_1.StyleSheet.create({
    conteiner: {
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        height: 45
    },
    botonMenu: {
        marginLeft: 5
    },
    title: {
        fontSize: 20,
        color: 'black',
        height: 40,
        paddingLeft: 10,
        paddingBottom: 0,
        marginLeft: 15
    },
    syncIcon: {
        position: 'absolute',
        right: 10,
        top: 13
    }
});
function Toolbar({ color, title, onClickIcon, icon }) {
    let barColor = color ? color : "#03A9F4";
    return (React.createElement(react_native_1.View, { style: [styles.conteiner, { backgroundColor: barColor }] },
        React.createElement(react_native_1.TouchableOpacity, { style: styles.botonMenu, onPress: onClickIcon },
            React.createElement(MaterialIcons_1.default, { name: icon, size: 25, color: "#F5B041" })),
        React.createElement(react_native_1.Text, { style: styles.title },
            " ",
            title,
            " ")));
}
exports.Toolbar = Toolbar;
//# sourceMappingURL=Bar.js.map