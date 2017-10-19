import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { IHoteles } from '../../interface';
import { _StoreCombine } from '../../reduces';
import { _ChangeBody, changeBody } from '../../actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList, TouchableNativeFeedback, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { DetalleHotelView } from '../DetalleHotel'

interface IProps_ViewItem {
    hotel: IHoteles
    widthImg: number
    onSelected(item: IHoteles): void
}

function renderStar(cant: number) {
    let compoStart = []
    for (let i = 0; i < cant; i++) {
        compoStart.push(
            <Icon key={i} name="star" size={16} color="#F5B041" />
        )
    }
    return compoStart;
}


function ViewItem({ hotel, widthImg, onSelected }: IProps_ViewItem) {
    return (
        <View>
            <TouchableNativeFeedback onPress={() => {
                onSelected(hotel);
            }}>
                <View style={{ padding: 10, flex: 1, flexDirection: "column" }}>
                    <View>
                        <Image
                            style={{ height: 150, width: (widthImg - 20) }}
                            source={{ uri: `data:image/png;base64,${hotel.image}` }}
                        />
                    </View>
                    <View style={styles.containerDetalle}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontWeight: "bold", color: "black" }}>{hotel.name}</Text>
                            <Text style={styles.pricetxt}>Precio Por Noche</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            {renderStar(hotel.starts)}
                            <Text style={styles.price}>AR${hotel.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )

}

export interface IProps {
    list: Array<IHoteles>
    showDetalle(value: JSX.Element, name: string): _ChangeBody
}

class ListHoteles extends React.Component<IProps, any> {
    state = {
        width: Dimensions.get("window").width
    }
    _updateWidth = () => this.setState({ width: Dimensions.get("window").width });

    componentDidMount() {
        Dimensions.addEventListener('change', this._updateWidth)
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this._updateWidth)
    }

    onSelectedDetalle = (item: IHoteles) => this.props.showDetalle(<DetalleHotelView hotel={item} />, "Detalle")
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
                    renderItem={({ item, index }) => <ViewItem hotel={item} widthImg={this.state.width} onSelected={this.onSelectedDetalle} />}
                    keyExtractor={(item, index) => item._id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
})

const mapStateToProps = ({ listhotel }: _StoreCombine) => {
    return {
        list: listhotel.list
    }
}

const mapDispatchToProps = (dispatch: Dispatch<_ChangeBody>) => {
    return {
        showDetalle: (value: JSX.Element, name: string) => dispatch(changeBody(value, name))
    }
}

export const ListHotelesView = connect(mapStateToProps, mapDispatchToProps)(ListHoteles);