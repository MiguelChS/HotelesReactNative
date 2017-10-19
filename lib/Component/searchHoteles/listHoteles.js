"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../../actions");
const MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
const react_native_1 = require("react-native");
const DetalleHotel_1 = require("../DetalleHotel");
function renderStar(cant) {
    let compoStart = [];
    for (let i = 0; i < cant; i++) {
        compoStart.push(React.createElement(MaterialIcons_1.default, { key: i, name: "star", size: 16, color: "#F5B041" }));
    }
    return compoStart;
}
function ViewItem({ hotel, widthImg, onSelected }) {
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.TouchableNativeFeedback, { onPress: () => {
                onSelected(hotel);
            } },
            React.createElement(react_native_1.View, { style: { padding: 10, flex: 1, flexDirection: "column" } },
                React.createElement(react_native_1.View, null,
                    React.createElement(react_native_1.Image, { style: { height: 150, width: (widthImg - 20) }, source: { uri: `data:image/png;base64,${hotel.image}` } })),
                React.createElement(react_native_1.View, { style: styles.containerDetalle },
                    React.createElement(react_native_1.View, { style: { flexDirection: "row" } },
                        React.createElement(react_native_1.Text, { style: { fontWeight: "bold", color: "black" } }, hotel.name),
                        React.createElement(react_native_1.Text, { style: styles.pricetxt }, "Precio Por Noche")),
                    React.createElement(react_native_1.View, { style: { flexDirection: "row" } },
                        renderStar(hotel.starts),
                        React.createElement(react_native_1.Text, { style: styles.price },
                            "AR$",
                            hotel.price)))))));
}
class ListHoteles extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            width: react_native_1.Dimensions.get("window").width
        };
        this._updateWidth = () => this.setState({ width: react_native_1.Dimensions.get("window").width });
        this.onSelectedDetalle = (item) => this.props.showDetalle(React.createElement(DetalleHotel_1.DetalleHotelView, { hotel: item }), "Detalle");
    }
    componentDidMount() {
        react_native_1.Dimensions.addEventListener('change', this._updateWidth);
    }
    componentWillUnmount() {
        react_native_1.Dimensions.removeEventListener('change', this._updateWidth);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.FlatList, { data: this.props.list, renderItem: ({ item, index }) => React.createElement(ViewItem, { hotel: item, widthImg: this.state.width, onSelected: this.onSelectedDetalle }), keyExtractor: (item, index) => item._id })));
    }
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    containerDetalle: {
        backgroundColor: "white", paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5
    },
    price: {
        position: "absolute", right: 10, color: "#F5B041"
    },
    pricetxt: {
        position: "absolute", right: 3, fontSize: 10
    }
});
const mapStateToProps = ({ listhotel }) => {
    return {
        list: listhotel.list
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showDetalle: (value, name) => dispatch(actions_1.changeBody(value, name))
    };
};
exports.ListHotelesView = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ListHoteles);
//# sourceMappingURL=listHoteles.js.map