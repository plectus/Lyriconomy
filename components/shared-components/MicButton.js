import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

const MicButton = () => {
    return(
        <View>
        <TouchableOpacity style={style.button}>
                <Text style={style.myText}>
                    Click here to search vocally
                </Text>
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
});

export default MicButton;