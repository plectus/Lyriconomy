import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image
} from "react-native";

export default class Settings extends React.Component {
  constructor() {
    super();
  }

  render() {
    const contentChange = () => {};

    return (
      <View style={style.container}>
        <Text>Settings Page</Text>

        <TouchableOpacity style={style.button}>
          <Text style={style.myText}>Click here to search</Text>
        </TouchableOpacity>

        <Text style={style.myText}>OR</Text>

        <TextInput
          style={style.textInput}
          placeholder="Enter a song's title, artist or lyrics here!"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TouchableOpacity onPress={contentChange}>
          <Text style={style.container}>This is my button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: 20
  },
  button: {
    marginBottom: 30,
    width: Dimensions.get("window").width - 30,
    alignItems: "center",
    backgroundColor: "#36AF4E",
    Image: "./Images/search.png"
  },

  textInput: {
    padding: 40
  },

  myText: {
    fontSize: 20,
    textAlign: "center"
  }
});
