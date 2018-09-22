import React, { Component } from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

class MainMenuButton extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}
export default MainMenuButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    textAlign: "center",
    marginBottom: 10,
    width: 150
  },
  text: {
    color: "white",
    fontSize: 18
  }
});
