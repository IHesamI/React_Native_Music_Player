import React from 'react'
import CoverArt from './CoverArt'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AlbumArt from './AlbumArt'
// import { ScrollView } from 'react-native-gesture-handler'
const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
        gap: 15,
        flex:1,
    },
    
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 500,
    },

    view: {
        flexDirection: 'column',
        gap: 18,
    },
    
    scrollView: {
        flexGrow: 1,
        flex: 1,
    },

    container2: {
        flex: 1,
        marginLeft: 10,
        gap: 5,
    }
});

export default function RecommondedList() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Recommend for you</Text>
            <ScrollView style={styles.scrollView}
                contentContainerStyle={{ flexGrow: 1, justifyContent:'space-between' }} 
             >
                <View style={styles.container2}>
                    <AlbumArt artist="1" image={require('@/assets/images/icon.png')} title="hllo" />
                    <AlbumArt artist="2" image={require('@/assets/images/icon.png')} title="BY" />
                    <AlbumArt artist="3" image={require('@/assets/images/icon.png')} title="H1" />
                    <AlbumArt artist="3" image={require('@/assets/images/icon.png')} title="H2" />
                    <AlbumArt artist="3" image={require('@/assets/images/icon.png')} title="H3" />
                    <AlbumArt artist="3" image={require('@/assets/images/icon.png')} title="H4" />
                </View>
            </ScrollView>
        </View>
    )
}
