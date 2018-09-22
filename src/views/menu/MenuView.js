import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import MainMenuButton from "../components/MainMenuButton";

class MenuView extends Component {
  static navigationOptions = {
    title: "Crack A Cold One"
  };

  nav = routeName => () => {
    this.props.navigation.navigate(routeName);
  };
  render() {
    return (
      <View style={styles.container}>
        <MainMenuButton title="Coke View" onPress={this.nav("Coke")} />
        <MainMenuButton
          title="Champagne View"
          onPress={this.nav("Champagne")}
        />
        <MainMenuButton title="Beer View" onPress={this.nav("Beer")} />
      </View>
    );
  }
}
export default MenuView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
});
