import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { useSelector } from "react-redux";
import StaffCard from "../components/StaffCard";
import useStaff from "../api/hooks/useStaff";
import AppHeader from "../components/AppHeader";
import StaffList from "./StaffList";
import LoadingComponent from "../components/LoadingComponent";
function Staff() {
  const userList = useSelector((state) => state.staff.userList);
  const loading = useSelector((state) => state.staff.loading);
  const { handleFetch } = useStaff();

  const loadingRender = {
    true: <LoadingComponent />,
    false: (
      <>
        {userList.length > 0 ? (
          <View style={{ flex: 1, width: "100%" }}>
            <StaffList />
          </View>
        ) : (
          <View>
            <Text>No staff found</Text>
          </View>
        )}
      </>
    ),
  }[loading];
  return (
    <>
      <AppHeader />
      {loadingRender}
    </>
  );
}

export default Staff;
