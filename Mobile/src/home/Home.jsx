import { View, Text } from "react-native";
import React from "react";
import AppHeader from "../components/AppHeader";
import StaffHierarchy from "./StaffHierarchy";
const Home = () => {
  return (
    <>
      <AppHeader />
      <StaffHierarchy />
    </>
  );
};

export default Home;
