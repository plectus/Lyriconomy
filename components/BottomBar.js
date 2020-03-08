import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import Save from "../assets/save.png";
import Search from "../assets/search.png";
import Settings from "../assets/settings.png";

const BottomBar = () => {
  return (
    <View style={style.borderStyle}>
      <Image style={style.image} source={Settings} />
      <Image style={style.image} source={Search} />
      <Image style={style.image} source={Save} />
    </View>
  );
};

const style = StyleSheet.create({
  bottomBar: {
    fontSize: 40,
    textAlign: "center",
    color: "#a39999"
  },
  borderStyle: {
    flex: 1,
    height: 400,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2a2727",
    bottom: 0,
    width: Dimensions.get("window").width
  },
  inView: {
    width: Dimensions.get("window").width / 3
  },
  image: {
    height: 50,
    width: 50
  }
});

export default BottomBar;
