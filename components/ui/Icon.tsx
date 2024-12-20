import React from 'react'
import { Image, StyleSheet, TouchableHighlight } from 'react-native'

const style = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor:'#6156E2',
        borderRadius:1000,
    },
    image: {
        width: 20,
        height: 20,
        // tintColor: 'red',
    },
    larg_image: {
        width: 40,
        height: 40,
    },
});

export default function ClickIcon({ 
    icon: source,
    onPress,
    withBg,
    isActivated
}: {
    icon: { uri: string },
    onPress: () => void,
    withBg?: boolean,
    isActivated?: boolean,
    }) {
    const CompStyle = isActivated ? StyleSheet.create({
        additionalSyles: { tintColor: '#6156E2' },
    }) : StyleSheet.create({
        additionalSyles: {}
    });
    const imageSyle = StyleSheet.flatten([style.image, CompStyle.additionalSyles]);
    return (
        <TouchableHighlight
            style={withBg ? style.container : null}
            onPress={onPress}>
            <Image
                style={withBg ? style.larg_image : imageSyle}
                source={source}
            />
        </TouchableHighlight>
    )
}
