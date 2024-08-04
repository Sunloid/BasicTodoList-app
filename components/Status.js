import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";

const MyStatusBar = ({ backgroundColor1, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor1 }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor1} {...props} />
    </SafeAreaView>
  </View>
);

export default function DarkTheme() {
  return (
    <View>
      <MyStatusBar backgroundColor1="#FF0000" barStyle="light-content" />
      <View style={styles.content} />
    </View>
  );
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform === "ios" ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
