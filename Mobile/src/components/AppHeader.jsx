import { Appbar } from "react-native-paper";
import React from "react";

const AppHeader = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Staff Hierarchy" />
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default AppHeader;
