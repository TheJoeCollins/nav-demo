import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class CokeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CokeView</Text>
      </View>
    );
  }
}
export default CokeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
