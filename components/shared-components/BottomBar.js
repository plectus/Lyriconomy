import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    
} from 'react-native';

const BottomBar = () => {
    return (
        <View style = {style.borderStyle}>
            <View style={style.inView}>
            <Text style= {style.bottomBar}>
                Lyriconomy
            </Text>
            </View>
            <View style = {style.inView}>
            <Text style={style.bottomBar}> Test 2</Text>
            </View>
            <View></View>
            
            
        </View>
    )
};


const style = StyleSheet.create({
    bottomBar: {
        
        fontSize: 37,
        textAlign: 'center',
        color:'#a39999'
    },
    borderStyle:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2a2727',
        bottom: 0,
        width: Dimensions.get('window').width,

    },
    inView: {
        width: Dimensions.get('window').width/3
    }
});

export default BottomBar;