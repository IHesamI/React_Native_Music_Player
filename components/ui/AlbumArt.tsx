import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        textAlign: 'center',
        gap: 10,
    },
    image: {
        width: 88,
        height: 88,
        borderRadius: 10,
    },
    Text: {
        fontSize: 20,
        color: 'white',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    }
})

export default function AlbumArt({
    title,
    artist,
    image: source,
}: {
    title: string;
    artist: string;
    image: { uri: string };
}) {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={source} />
            <View style={styles.column}>
                <Text style={styles.Text}>{title}</Text>
                <Text style={styles.Text}>{artist}</Text>
            </View>
        </View>
    )
}
