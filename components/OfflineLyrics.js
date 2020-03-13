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
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default class OfflineLyrics extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Offline Lyrics</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f6e0ce"
  },
  title: {
    fontSize: 39,
    color: "#707070",
    borderColor: "#707070",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
