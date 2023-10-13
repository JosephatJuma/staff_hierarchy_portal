import { Appbar } from "react-native-paper";
import React from "react";

const AppHeader = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Staff Hierarchy" />
      <Appbar.Action icon="cog" color="#0F9D58" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default AppHeader;
