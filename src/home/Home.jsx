import React from "react";
import StaffHierarchy from "./StaffHierarchy";
import { useSelector } from "react-redux";
import LoadingComponent from "../components/LoadingComponent";

function Home() {
  const loading = useSelector((state) => state.staff.loading);

  const loadingRender = {
    true: <LoadingComponent />,
    false: <StaffHierarchy />,
  }[loading];
  return <div>{loadingRender}</div>;
}

export default Home;
