import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions
} from "react-native";
import MicButton from "../shared-components/MicButton";

export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "Zach"
    };
  }

  render() {
    const contentChange = () => {
      return this.setState({ content: "Poba" });
    };

    return (
      <View style={style.container}>
        <Text style={style.title}>Search Lyrics</Text>
        <Text style={style.myText}>Tap To Search</Text>
        <MicButton />

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
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginBottom: 30,
    width: Dimensions.get("window").width - 30,
    alignItems: "center",
    backgroundColor: "#36AF4E",
    borderRadius: 50
  },

  textInput: {
    padding: 40,
    backgroundColor: "#FFFFFF",
    borderColor: "#707070",
    borderRadius: 50,
    height: 176,
    width: 358
  },

  myText: {
    fontSize: 25,
    color: "##746764",
    borderColor: "#0C0202",
    textAlign: "center"
  },
  title: {
    fontSize: 39,
    color: "#707070",
    borderColor: "#707070"
  }
});
