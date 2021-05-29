import React from "react";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons//MaterialIcons";

export const navigationOptions = () => {
  return {
    headerTitleAlign: "left",
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontFamily: "OpenSans-Regular",
      fontSize: 18,
    },
  };
};

export const tabBarSettings = () => {
  return {
    activeTintColor: Colors.accentColor,
    safeAreaInsets: { bottom: 10 },
  };
};

export const tabBarIconSettings = (iconSize, iconName, label) => {
  return {
    tabBarLabel: label,
    tabBarIcon: ({ color }) => (
      <Icon name={iconName} color={color} size={iconSize} />
    ),
  };
};

export const drawerSettings = () => {
  return {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: "OpenSans-Regular",
    },
  };
};
