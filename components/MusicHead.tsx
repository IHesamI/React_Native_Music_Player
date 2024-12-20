import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:10,
        paddingRight:10,
        marginTop:20,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        color: '#F2F2F2',
    }
})

export default function MusicHead({ title }: { title: string; }) {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/LeftArrow.png')} />
            <Text style={styles.title}>
                {title}
            </Text>
            <Image source={require('@/assets/images/heart.png')} />
        </View>
    )
}
