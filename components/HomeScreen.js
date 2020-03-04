import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Dimensions,
} from 'react-native';
import MicButton from './shared-components/MicButton';

export default class HomeScreen extends React.Component{
    constructor(){
        super();
    
        this.state = {
            content: "Zach"
        };
    }

    

    render(){
        const contentChange = () =>{  
                   
            return this.setState({content: "Poba"})
        }

        return (
        <View style={style.container}>
            <Text>
                Search Lyrics {this.state.content}
            </Text>
            <MicButton/>

            <TouchableOpacity style={style.button}>
                <Text style={style.myText}>
                    Click here to search
                </Text>
            </TouchableOpacity>

            <Text>
                OR
            </Text>

            <TextInput
            style = {style.textInput}
            placeholder="Enter a song's title, artist or lyrics here!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text} />


            <TouchableOpacity onPress={contentChange}>
                <Text style={style.container}>
                    This is my button
                </Text>
            </TouchableOpacity>
        </View>
        );
    }

}

const style = StyleSheet.create({
    container:{
        padding: 20,
    },
    button: {
        marginBottom: 30,
        width: Dimensions.get('window').width - 30,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },

    textInput:{
        padding: 40,
    },

    myText: {
        fontSize: 20,
        textAlign: 'center',
    },

});
