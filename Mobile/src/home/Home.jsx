import { View, Text } from "react-native";
import React from "react";
import AppHeader from "../components/AppHeader";
import StaffHierarchy from "./StaffHierarchy";
import { useSelector } from "react-redux";
import LoadingComponent from "../components/LoadingComponent";
const Home = () => {
  const loading = useSelector((state) => state.staff.loading);
  const loadingRender = {
    true: <LoadingComponent />,
    false: <StaffHierarchy />,
  }[loading];
  return (
    <>
      <AppHeader />
      {loadingRender}
    </>
  );
};

export default Home;
