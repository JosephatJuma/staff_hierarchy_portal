import { useEffect, useState } from "react";
import { Appbar } from "react-native-paper";
import React from "react";

const AppHeader = () => {
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
      <Appbar.Action icon="cog" color="#0F9D58" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default AppHeader;
