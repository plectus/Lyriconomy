import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';

const HelpButton = () => {
    return(
        <View>
        <TouchableOpacity style={style.button}>
        <Image
          style={style.helpStyle}
          
            />
        </TouchableOpacity>
        </View>
    )

};

const style = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: Dimensions.get('window').width - 30,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    myText: {
        fontSize: 20,
        textAlign: 'center',
    },
    helpStyle:{
        width: 20, 
        height: 20,
    }
});

export default HelpButton;