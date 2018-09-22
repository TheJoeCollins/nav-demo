import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class BeerView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>BeerView</Text>
      </View>
    );
  }
}
export default BeerView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
