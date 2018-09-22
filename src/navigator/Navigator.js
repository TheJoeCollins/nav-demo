import React from "react";
import { createStackNavigator } from "react-navigation";
import { MenuView, ChampagneView, BeerView, CokeView } from "../views";

const Navigator = createStackNavigator(
  {
    Menu: MenuView,
    Champagne: ChampagneView,
    Beer: BeerView,
    Coke: CokeView
  },
  {
    initialRouteName: "Menu"
  }
);

export default Navigator;
