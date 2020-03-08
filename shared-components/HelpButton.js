import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";

import IconHelp from "../assets/help.png";

const HelpButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image style={style.helpStyle} source={IconHelp} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: Dimensions.get("window").width - 30,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  myText: {
    fontSize: 20,
    textAlign: "center"
  },
  helpStyle: {
    width: 50,
    height: 50,
    color: "#FFFFFF"
  }
});

export default HelpButton;
