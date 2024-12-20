import { Image, StyleSheet, Text, View } from "react-native";


const styles=StyleSheet.create({
    view:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        width: 80,
    },
    image:{
        width: 80,
        height: 80,
        borderRadius:10,
    },
    Text:{
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
    },
    column:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    }
})


export default function CoverArt({ title, artist, image: source }: { title: string, artist: string, image: { uri: string } }) {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={source} />
            <Text style={{...styles.Text,marginTop:3}}>{title}</Text>
            <Text style={styles.Text}>{artist}</Text>
        </View>
    )
}
