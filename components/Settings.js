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
import { Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Card
          containerStyle={{ height: 130, width: 344, borderRadius: 50 }}
          title="Language"
        >
          <View style={styles.buttons}>
            <Icon style={[{ color: "black" }]} size={35} name={"translate"} />
            <Button
              type="outline"
              buttonStyle={styles.buttonStyle}
              title="EN"
            />
            <Button
              type="outline"
              buttonStyle={styles.buttonStyle}
              title="FR"
            />
            <Button
              type="outline"
              buttonStyle={styles.buttonStyle}
              title="CH"
            />
          </View>
        </Card>
        <Card
          containerStyle={{ height: 130, width: 344, borderRadius: 50 }}
          title="Results Per Page"
        >
          <View style={styles.buttons}>
            <Icon
              style={[{ color: "black" }]}
              size={35}
              name={"book-open-page-variant"}
            />
            <Button type="outline" buttonStyle={styles.buttonStyle} title="5" />
            <Button
              type="outline"
              buttonStyle={styles.buttonStyle}
              title="15"
            />
            <Button
              type="outline"
              buttonStyle={styles.buttonStyle}
              title="20"
            />
          </View>
        </Card>
        <Card
          containerStyle={{ height: 240, width: 344, borderRadius: 50 }}
          title="Text Settings"
        >
          <View
            style={
              ({ flex: 1 },
              { flexDirection: "column" },
              { justifyContent: "space-between" })
            }
          >
            <View style={styles.buttons}>
              <Icon
                style={[{ color: "black" }]}
                size={35}
                name={"format-font"}
              />
              <Button
                type="outline"
                buttonStyle={styles.buttonStyle}
                title="Font1"
              />
              <Button
                type="outline"
                buttonStyle={styles.buttonStyle}
                title="Font2"
              />
              <Button
                type="outline"
                buttonStyle={styles.buttonStyle}
                title="Font3"
              />
            </View>
            <View style={styles.buttons}>
              <Icon
                style={[{ color: "black" }]}
                size={35}
                name={"format-color-text"}
              />
              <Button
                type="outline"
                buttonStyle={styles.buttonStyle}
                title="Black"
              />
              <Button
                type="outline"
                buttonStyle={styles.buttonStyle}
                title="Blue"
              />
              <Button
                type="outline"
                buttonStyle={styles.buttonStyle}
                title="Red"
              />
            </View>
            <View style={styles.buttons}>
              <Icon
                style={[{ color: "black" }]}
                size={35}
                name={"format-size"}
              />
              <Button
                type="outline"
                buttonStyle={styles.buttonStyle}
                title="4"
              />
              <Button
                type="outline"
                buttonStyle={styles.buttonStyle}
                title="8"
              />
              <Button
                type="outline"
                buttonStyle={styles.buttonStyle}
                title="12"
              />
            </View>
          </View>
        </Card>
        <View style={styles.buttons}>
          <Button
            buttonStyle={({ borderColor: "red" }, { width: 120 })}
            title="Terms"
            icon={<Icon name="message" size={20} color="white" />}
          />
          <Button
            buttonStyle={({ borderRadius: 100 }, { width: 120 })}
            title="About"
            icon={<Icon name="information-outline" size={25} color="white" />}
          />
        </View>
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
  },
  language: {
    height: 90,
    width: 344,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#010101",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  text: {
    height: 285,
    width: 344,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#010101",
    alignItems: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  buttonStyle: {
    borderRadius: 50,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: 50,
    width: 50
  }
});
