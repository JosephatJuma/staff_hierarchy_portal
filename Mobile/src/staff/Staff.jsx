import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import useStaff from "../api/hooks/useStaff";
import AppHeader from "../components/AppHeader";
import StaffList from "./StaffList";
import LoadingComponent from "../components/LoadingComponent";
import DeleteDialog from "../components/DeleteDialog";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import {
  toggleShowDeleteModal,
  setError,
  setMessage,
} from "../redux/slices/staffSlice";
function Staff() {
  const dispatch = useDispatch();
  const { handleDelete } = useStaff();
  const userList = useSelector((state) => state.staff.userList);
  const loading = useSelector((state) => state.staff.loading);
  const submitting = useSelector((state) => state.staff.submitting);
  const selectedStaff = useSelector((state) => state.staff.selectedStaff);
  const showDelete = useSelector((state) => state.staff.showDeleteModal);
  const errorMessage = useSelector((state) => state.staff.error);
  const message = useSelector((state) => state.staff.message);

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
      <DeleteDialog
        visible={showDelete}
        title={`Do you want to delete ${selectedStaff.name}`}
        close={() => dispatch(toggleShowDeleteModal())}
        performing={submitting}
        action={() => handleDelete(selectedStaff.id)}
      />
      <ErrorAlert
        close={() => dispatch(setError(""))}
        message={errorMessage}
        open={errorMessage ? true : false}
      />
      <SuccessAlert
        close={() => dispatch(setMessage(""))}
        message={message}
        open={message ? true : false}
      />
    </>
  );
}

export default Staff;
