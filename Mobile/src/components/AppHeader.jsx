import { useEffect, useState } from "react";
import { Appbar } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../redux/slices/themeSlice";
const AppHeader = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 0 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);
  return (
    <Appbar.Header>
      <Appbar.Content title={greeting} color="#0F9D58" />
      <Appbar.Action
        icon="theme-light-dark"
        color="#0F9D58"
        onPress={
          theme === "dark"
            ? () => dispatch(changeMode("light"))
            : () => dispatch(changeMode("dark"))
        }
      />
      <Appbar.Action
        icon="account-plus"
        color="#0F9D58"
        onPress={() => navigate.navigate("Add")}
      />
    </Appbar.Header>
  );
};

export default AppHeader;
