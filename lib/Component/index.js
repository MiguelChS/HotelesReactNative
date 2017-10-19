"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const searchHoteles_1 = require("./searchHoteles");
class Index extends React.Component {
    constructor() {
        super(...arguments);
        this._back = () => {
            if (this.props.name == "Search")
                return false;
            this.props.insertPage(React.createElement(searchHoteles_1.SeachHotelesView, null), "Search");
            return true;
        };
    }
    componentDidMount() {
        this.props.insertPage(React.createElement(searchHoteles_1.SeachHotelesView, null), "Search");
        react_native_1.BackHandler.addEventListener('hardwareBackPress', this._back);
    }
    componentWillUnmount() {
        react_native_1.BackHandler.removeEventListener('hardwareBackPress', this._back);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: { flex: 1 } },
            React.createElement(react_native_1.StatusBar, { backgroundColor: 'black', barStyle: "light-content" }),
            this.props.bodyPage));
    }
}
const mapStateToProps = ({ materBody }) => {
    return {
        bodyPage: materBody.body,
        name: materBody.name
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        insertPage: (value, name) => dispatch(actions_1.changeBody(value, name))
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Index);
//# sourceMappingURL=index.js.map