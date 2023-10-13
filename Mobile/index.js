import { registerRootComponent } from "expo";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import App from "./App";

const Main = () => {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="black" style="light" />
      <App />
    </PaperProvider>
  );
};
registerRootComponent(Main);
