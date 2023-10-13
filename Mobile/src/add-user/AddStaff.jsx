import { View, Text } from "react-native";
import React from "react";
import AddStaffForm from "../forms/AddStaffForm";
import AppHeader from "../components/AppHeader";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import { useSelector, useDispatch } from "react-redux";
import { setError, setMessage } from "../redux/slices/staffSlice";
import { useNavigation } from "@react-navigation/native";
const AddStaff = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const errorMessage = useSelector((state) => state.staff.error);
  const message = useSelector((state) => state.staff.message);

  const handleDone = () => {
    dispatch(setMessage(""));
    navigateToHome(); // Call a separate function to navigate
  };

  const navigateToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <AppHeader />
      <AddStaffForm />
      <ErrorAlert
        close={() => dispatch(setError(""))}
        message={errorMessage}
        open={errorMessage ? true : false}
      />
      <SuccessAlert
        close={handleDone}
        message={message}
        open={message ? true : false}
      />
    </>
  );
};

export default AddStaff;
