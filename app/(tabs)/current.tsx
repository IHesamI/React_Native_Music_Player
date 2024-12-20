import MusicHead from '@/components/MusicHead'
import MusicButtons from '@/components/ui/MusicButtons'
import ProgressLine from '@/components/ui/ProgressLine'
import React from 'react'
import { Image, StatusBar, StyleSheet } from 'react-native'
import { Text, View } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        marginBottom:20,
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 10,
        marginTop: 40,
    },
    imageContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
    text:{
        textAlign:'center',
    }
})

export default function current({
    title,
    singer,
}: {
    title: string,
    imageSrc: { uri: string },
    singer: string,
}) {
    return (
        <View
            style={styles.container}>
            <StatusBar hidden />
            <MusicHead title='Fallem Embers by Enya' />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('@/assets/images/icon.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 500, textAlign: 'center' }}> {'Fallen Embers'} </Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 500, textAlign:'center' }}> {'Enya'} </Text>
            </View>
            <ProgressLine />
            <MusicButtons />
        </View>
    )
}
