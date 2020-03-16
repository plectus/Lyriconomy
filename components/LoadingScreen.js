import React from "react";
import { View, Image, Text, StyleSheet, Animated } from "react-native";
import Logo from "../assets/Logo.png";

export default class LoadingScreen extends React.Component {
  state = {
    LogoAnime: new Animated.Value(0),
    logoText: new Animated.Value(0),
    LoadingSpinner: false
  };

  componentDidMount() {
    const { LogoAnime, logoText } = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000
      }).start(),
      Animated.timing(logoText, {
        toValue: 1,
        duration: 1200
      })
    ]).start(() => {
      this.setState({
        LoadingSpinner: true
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [400, 0]
            })
          }}
        >
          <Image style={styles.logo} source={Logo} />
        </Animated.View>
        <Animated.View
          style={{
            opacity: this.state.LogoText
          }}
        >
          <Text style={styles.logoText}>Lyriconomy</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6E0CE",
    justifyContent: "center",
    alignItems: "center"
  },

  logoText: {
    color: "#707070",
    borderColor: "#0C0202",
    fontFamily: "Roboto",
    fontSize: 60,
    marginTop: 29,
    fontWeight: "500"
  },
  logo: {
    height: 251,
    width: 374
  }
});
