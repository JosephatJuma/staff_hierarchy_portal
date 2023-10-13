import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { PaperProvider, DefaultTheme, MD3DarkTheme } from "react-native-paper";

import { StatusBar } from "expo-status-bar";
import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store";
import App from "./App";

const Application = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <PaperProvider theme={theme === "dark" ? MD3DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor="#0F9D58" style="light" />
      <App />
    </PaperProvider>
  );
};

const Main = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};
registerRootComponent(Main);
