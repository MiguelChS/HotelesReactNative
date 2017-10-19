import * as React from 'react';
import { IHoteles } from '../../interface'
import { View, StyleSheet, Text } from 'react-native';
import { Toolbar } from '../componentShare';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { _StoreCombine } from '../../reduces';
import { _ChangeBody, changeBody } from '../../actions';
import { connect, Dispatch } from 'react-redux';
import { SeachHotelesView } from '../searchHoteles';
import * as MapView from 'react-native-maps';

export interface IProps {
    hotel: IHoteles,
    back(value: JSX.Element, name: string): _ChangeBody
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

function DetalleHotel({ hotel, back }: IProps) {
    return (
        <View style={styles.container}>
            <Toolbar
                color="white"
                title={hotel.name}
                icon="arrow-back"
                onClickIcon={() => back(<SeachHotelesView />, "Search")}
            />
            <View>
                <View style={styles.containerDetalle}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: "bold", color: "black" }}>{hotel.name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        {renderStar(hotel.starts)}
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 20 }}>
                        <Icon name="room" size={25} color="#757575" />
                        <Text style={{ marginTop: 2 }}>{hotel.address}</Text>
                    </View>
                </View>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        height:200
    }
})

const mapDispatchToProps = (dispatch: Dispatch<_ChangeBody>) => {
    return {
        back: (value: JSX.Element, name: string) => dispatch(changeBody(value, name))
    }
}

export const DetalleHotelView = connect(null, mapDispatchToProps)(DetalleHotel);

/*            
            
            
           */