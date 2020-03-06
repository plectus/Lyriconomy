import React from 'react';
import {
  StyleSheet,
  Text,
  View} from 'react-native';
import HomeScreen from './components/HomeScreen';
import TopBar from './components/shared-components/TopBar';
import BottomBar from './components/shared-components/BottomBar';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View><TopBar/></View>
      
      <View><HomeScreen/></View>
      
      <View><BottomBar/></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f6e0ce',
    alignItems: 'center',
  },
});
