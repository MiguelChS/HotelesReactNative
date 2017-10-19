import * as React from 'react';
import { View, TextInput, Alert } from 'react-native';
import { Toolbar } from '../componentShare';
import { ListHotelesView } from './listHoteles';
import { InputSeach } from './inputSeach';
import { getHoteles } from './service';
import { connect, Dispatch } from 'react-redux';
import { ILoadList, loadList } from '../../actions';
import { IHoteles } from '../../interface';

export interface IState {
    txtSeach: string
}
export interface IProps {
    cargarList(list: Array<IHoteles>): ILoadList
}

class SeachHoteles extends React.Component<IProps, IState> {

    state: IState = {
        txtSeach: ""
    }

    setStateTxtSeach = (txt: string) => this.setState({ txtSeach: txt })

    searchHoteles = () => {
        getHoteles(this.state.txtSeach)
            .then((result) => {
                if (result) {
                    this.props.cargarList(result);
                } else {
                    throw new Error("Fail get list Hotel");
                }
            })
            .catch((err: Error) => {
                Alert.alert(err.message)
            })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#EAEDED" }}>
                <Toolbar
                    color="white"
                    title="Lista de Hoteles"
                    icon="business"
                />
                <InputSeach
                    value={this.state.txtSeach}
                    onChange={this.setStateTxtSeach}
                    onSearch={this.searchHoteles}
                />
                <ListHotelesView />
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch: Dispatch<ILoadList>): IProps => {
    return {
        cargarList: (list) => dispatch(loadList(list))
    }
}

export const SeachHotelesView = connect(null, mapDispatchToProps)(SeachHoteles);