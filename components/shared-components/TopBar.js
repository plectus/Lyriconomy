import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const TopBar = () => {
    return (
        <View style = {style.position}>
            <Text style= {style.topBar}>
                Lyriconomy
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    topBar: {
        fontSize: 37,
        textAlign: 'center',
        color: '#a39999',
    },
    position:{
        backgroundColor: '#2a2727',
        width: Dimensions.get('window').width,
        top:0,
        padding: 30,
    }
});

export default TopBar;