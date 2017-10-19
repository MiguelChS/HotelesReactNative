"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const componentShare_1 = require("../componentShare");
const listHoteles_1 = require("./listHoteles");
const inputSeach_1 = require("./inputSeach");
const service_1 = require("./service");
const react_redux_1 = require("react-redux");
const actions_1 = require("../../actions");
class SeachHoteles extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            txtSeach: ""
        };
        this.setStateTxtSeach = (txt) => this.setState({ txtSeach: txt });
        this.searchHoteles = () => {
            service_1.getHoteles(this.state.txtSeach)
                .then((result) => {
                if (result) {
                    this.props.cargarList(result);
                }
                else {
                    throw new Error("Fail get list Hotel");
                }
            })
                .catch((err) => {
                react_native_1.Alert.alert(err.message);
            });
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: { flex: 1, backgroundColor: "#EAEDED" } },
            React.createElement(componentShare_1.Toolbar, { color: "white", title: "Lista de Hoteles", icon: "business" }),
            React.createElement(inputSeach_1.InputSeach, { value: this.state.txtSeach, onChange: this.setStateTxtSeach, onSearch: this.searchHoteles }),
            React.createElement(listHoteles_1.ListHotelesView, null)));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        cargarList: (list) => dispatch(actions_1.loadList(list))
    };
};
exports.SeachHotelesView = react_redux_1.connect(null, mapDispatchToProps)(SeachHoteles);
//# sourceMappingURL=index.js.map