import React from "react";
import ApiClient from "../apiClient";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  toggleShowAddModal,
  setLoading,
  setSubmitting,
  setSuccess,
  setMessage,
  setUserList,
} from "../../redux/slices/staffSlice";

function useStaff() {
  const apiClient = new ApiClient();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    dispatch(setSubmitting(true));
    const response = await apiClient.postStaff(values);
    if (response.status === 201) {
      console.log(response.data);
      dispatch(setMessage(response.data.message));
      dispatch(toggleShowAddModal());
    } else {
      if (response.response) dispatch(setError(response.response.data.message));
      else dispatch(setError("An unknown error occured!"));
    }
    dispatch(setSubmitting(false));
  };

  const handleFetch = async () => {
    dispatch(setLoading(true));
    const response = await apiClient.getAllStaff();
    if (response.status === 200) {
      dispatch(setUserList(response.data));
    } else {
      if (response.response) dispatch(setError(response.response.data.message));
      else dispatch(setError("An unknown error occured!"));
    }
    dispatch(setLoading(false));
  };

  return { handleSubmit, handleFetch };
}

export default useStaff;
