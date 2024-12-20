import { StyleSheet, Text, View } from 'react-native'
import { styleCreator } from './utils/styleCreator'
import CoverArt from './CoverArt'
const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        gap: 4,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 500,
    }
})
export default function RecentlyPlayed() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Recently Played </Text>
            <View style={styles.view}>
                <CoverArt artist="1" image={require('@/assets/images/icon.png')} title="hello" />
                <CoverArt artist="2" image={require('@/assets/images/icon.png')} title="BUY" />
                <CoverArt artist="3" image={require('@/assets/images/icon.png')} title="HE" />
            </View>
        </View>
    )
}
