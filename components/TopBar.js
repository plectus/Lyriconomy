import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import HelpButton from './shared-components/HelpButton';

const TopBar = () => {
    return (
        <View style = {style.position}>
            <Text style= {style.topBar}>
                Lyriconomy
            </Text>
            <HelpButton />
            
        </View>
    )
}

const style = StyleSheet.create({
  topBar: {
    fontSize: 37,
    textAlign: "center",
    color: "#a39999"
  },
  position: {
    backgroundColor: "#2a2727",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    top: 0,
    padding: 30
  }
});

export default TopBar;
