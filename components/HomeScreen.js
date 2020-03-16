import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions
} from "react-native";
import MicButton from "./shared-components/MicButton";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
      
    };
  }

  render() {

    return (
      <View style={style.container}>
        <Text style={style.title}>Search Lyrics</Text>
        <Text style={style.myText}>Tap To Search</Text>
        <MicButton />
        <Text style={style.title}>or</Text>
        <TextInput
          style={style.textInput}
          placeholder="Enter a song's title"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          style={style.textInput}
          placeholder="Enter an artist's name"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#f6e0ce",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column"
  },
  button: {
    marginBottom: 30,
    flex: 1,
    width: Dimensions.get("window").width - 30,
    alignItems: "center",
    backgroundColor: "#36AF4E",
    borderRadius: 50
  },

  textInput: {
    padding: 20,
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#707070",
    borderRadius: 50,
    height: 50,
    width: 358
  },

  myText: {
    fontSize: 25,
    flex: 1,
    color: "##746764",
    borderColor: "#0C0202",
    textAlign: "center"
  },
  title: {
    fontSize: 39,
    flex: 1,
    color: "#707070",
    borderColor: "#707070"
  }
});
