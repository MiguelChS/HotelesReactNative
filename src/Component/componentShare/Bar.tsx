import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface PropsBar {
    color: string,
    title: string,
    onClickIcon?():void,
    icon: string
}

let styles = StyleSheet.create({
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
})

export function Toolbar({ color, title, onClickIcon, icon }: PropsBar) {
    let barColor = color ? color : "#03A9F4";
    return (
        <View style={[styles.conteiner, { backgroundColor: barColor }]}>
            <TouchableOpacity style={styles.botonMenu} onPress={onClickIcon} >
                <Icon name={icon} size={25} color="#F5B041" />
            </TouchableOpacity>
            <Text style={styles.title}> {title} </Text>
        </View>
    )
}