import { View, Text } from "react-native";
import React from "react";
import {
  Divider,
  Avatar,
  IconButton,
  Title,
  Text,
  Card,
  Drawer,
} from "react-native-paper";

const DrawerComponent = () => {
  const screens = [
    { name: "Home", icon: "home", title: "Home" },
    { name: "User", icon: "account", title: "Profile" },
    { name: "Post", icon: "plus-box", title: "Post Item" },
    { name: "Search", icon: "magnify", title: "Search" },
    { name: "Settings", icon: "cog", title: "Settings" },
  ];
  return (
    <View>
      <Text>DrawerComponent</Text>
    </View>
  );
};

export default DrawerComponent;
