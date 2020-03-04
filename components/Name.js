// This is a functional component
import React from 'react';
import {
    View,
    Text
} from 'react-native';

const Name = (props) => {
    return (
        <View>
            <Text>
                My name is {props.name}
            </Text>
        </View>
    )
}

export default Name;