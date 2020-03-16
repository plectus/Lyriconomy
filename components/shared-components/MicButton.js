import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import Micro from "../shared-components/micro.png";

const MicButton = () => {
  return (
    <View>
      <TouchableOpacity style={style.button}>
        <Image style={style.image} source={Micro} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    marginBottom: 30,
    borderRadius: 50,
    width: 223,
    height: 108,
    alignItems: "center",
    backgroundColor: "#36AF4E",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 61.15,
    width: 38.23
  }
});

export default MicButton;
