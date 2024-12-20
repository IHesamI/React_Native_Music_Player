import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import ClickIcon from './Icon';
import { StoreContext } from '@/hooks/useStore';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingLeft: 5,
        paddingRight: 5,
    }
});

export default function MusicButtons() {
    const {
        isRepeat,
        isShuffle,
        setRepeat,
        setShuffle,
    } = useContext(StoreContext);

    const handleRepeat = () => {
        setRepeat(state => !state);
    }
    const handleShuffle = () => {
        setShuffle(state => !state);
    }

    return (
        <View style={styles.container}>
            <ClickIcon
                isActivated={isShuffle}
                onPress={handleShuffle}
                icon={require('@/assets/images/shuffle.png')}
            />
              <ClickIcon
                onPress={() => { }}
                icon={require('@/assets/images/skip-back.png')}
            />
            <ClickIcon
                withBg
                onPress={() => { }}
                icon={require('@/assets/images/pause.png')}
            />
              <ClickIcon
                onPress={() => { }}
                icon={require('@/assets/images/skip-forward.png')}
            />
            <ClickIcon
                isActivated={isRepeat}
                onPress={handleRepeat}
                icon={require('@/assets/images/repeat.png')}
            />

        </View>
    )
}
