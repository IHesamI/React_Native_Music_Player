import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

// const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    progressline: {
        backgroundColor: '#F2F2F2',
        height: 1,
    },
    progress: {
        height: 1,
        backgroundColor: '#6156E2',
        width: '50%',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 5,
        paddingLeft: 5,
    },
    text:{
        color: '#F2F2F2',
    }
});

export default function ProgressLine() {

    return (
        <View style={styles.container}>
            <View
                style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View style={styles.progressline}>
                    <View style={styles.progress} />
                </View>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text}>
                    0:00
                </Text>
                <Text style={styles.text}>
                    3:00
                </Text>
            </View>
        </View>
    )
}
