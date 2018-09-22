import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ChampagneView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ChampagneView</Text>
      </View>
    );
  }
}
export default ChampagneView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
