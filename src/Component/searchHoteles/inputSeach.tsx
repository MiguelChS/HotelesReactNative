import * as React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface _Pros_Input_Seach {
    value: string
    onChange(value: string): void
    onSearch(): void
}

export function InputSeach({ value, onChange, onSearch }: _Pros_Input_Seach): JSX.Element {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={onChange}
                underlineColorAndroid='transparent'
                style={styles.input}
            />
            <TouchableOpacity style={styles.butonIcon} onPress={onSearch} >
                <Icon name={"search"} size={25} color="#F5B041" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: 10,
        marginLeft: 8,
        marginRight: 8,
        paddingRight: 30,
        justifyContent: 'center'
    },
    butonIcon: {
        position: "absolute",
        right: 10,
        top: 13
    },
    input: {
        marginLeft: 10
    }
})
