import { registerRootComponent } from "expo";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import App from "./App";

const Main = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar backgroundColor="#0F9D58" style="light" />
        <App />
      </PaperProvider>
    </Provider>
  );
};
registerRootComponent(Main);
