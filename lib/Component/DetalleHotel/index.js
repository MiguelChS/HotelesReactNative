"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const componentShare_1 = require("../componentShare");
const MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
const actions_1 = require("../../actions");
const react_redux_1 = require("react-redux");
const searchHoteles_1 = require("../searchHoteles");
const MapView = require("react-native-maps");
function renderStar(cant) {
    let compoStart = [];
    for (let i = 0; i < cant; i++) {
        compoStart.push(React.createElement(MaterialIcons_1.default, { key: i, name: "star", size: 16, color: "#F5B041" }));
    }
    return compoStart;
}
function DetalleHotel({ hotel, back }) {
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(componentShare_1.Toolbar, { color: "white", title: hotel.name, icon: "arrow-back", onClickIcon: () => back(React.createElement(searchHoteles_1.SeachHotelesView, null), "Search") }),
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.View, { style: styles.containerDetalle },
                React.createElement(react_native_1.View, { style: { flexDirection: "row" } },
                    React.createElement(react_native_1.Text, { style: { fontWeight: "bold", color: "black" } }, hotel.name)),
                React.createElement(react_native_1.View, { style: { flexDirection: "row", marginTop: 5 } }, renderStar(hotel.starts)),
                React.createElement(react_native_1.View, { style: { flexDirection: "row", marginTop: 5, marginLeft: 20 } },
                    React.createElement(MaterialIcons_1.default, { name: "room", size: 25, color: "#757575" }),
                    React.createElement(react_native_1.Text, { style: { marginTop: 2 } }, hotel.address))),
            React.createElement(MapView, { style: styles.map, region: {
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                } }))));
}
const styles = react_native_1.StyleSheet.create({
    container: { flex: 1, backgroundColor: "#EAEDED" },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    containerDetalle: {
        backgroundColor: "white",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    price: {
        position: "absolute", right: 10, color: "#F5B041"
    },
    pricetxt: {
        position: "absolute", right: 3, fontSize: 10
    },
    map: {
        height: 200
    }
});
const mapDispatchToProps = (dispatch) => {
    return {
        back: (value, name) => dispatch(actions_1.changeBody(value, name))
    };
};
exports.DetalleHotelView = react_redux_1.connect(null, mapDispatchToProps)(DetalleHotel);
/*
            
            
           */ 
//# sourceMappingURL=index.js.map