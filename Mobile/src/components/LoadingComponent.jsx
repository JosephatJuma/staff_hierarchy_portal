import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
const LoadingComponent = () => {
  return (
    <View style={{ marginTop: 300 }}>
      <ActivityIndicator animating={true} size="large" />
    </View>
  );
};

export default LoadingComponent;
