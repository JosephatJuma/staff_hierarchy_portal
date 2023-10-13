import { View, Text } from "react-native";
import React from "react";
import AddStaffForm from "../forms/AddStaffForm";
import AppHeader from "../components/AppHeader";
const AddStaff = () => {
  return (
    <View>
      <AppHeader />
      <AddStaffForm />
    </View>
  );
};

export default AddStaff;
