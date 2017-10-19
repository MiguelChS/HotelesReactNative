import * as React from 'react';
import { View, StatusBar, BackHandler } from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { _ChangeBody, changeBody } from '../actions';
import { _StoreCombine } from '../reduces'
import { SeachHotelesView } from './searchHoteles';
import {} from '../'

interface Props {
    bodyPage: JSX.Element | null,
    name: string,
    insertPage: (value: JSX.Element, name: string) => _ChangeBody
}

class Index extends React.Component<Props>{


    _back = () => {
        if (this.props.name == "Search") return false;
        this.props.insertPage(<SeachHotelesView />, "Search")
        return true;
    }


    componentDidMount() {
        this.props.insertPage(<SeachHotelesView />, "Search")
        BackHandler.addEventListener('hardwareBackPress', this._back);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._back);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor='black'
                    barStyle="light-content">
                </StatusBar>
                {this.props.bodyPage}
            </View>
        )
    }
}

const mapStateToProps = ({ materBody }: _StoreCombine) => {
    return {
        bodyPage: materBody.body,
        name: materBody.name
    }
}

const mapDispatchToProps = (dispatch: Dispatch<_ChangeBody>) => {
    return {
        insertPage: (value: JSX.Element, name: string) => dispatch(changeBody(value, name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);