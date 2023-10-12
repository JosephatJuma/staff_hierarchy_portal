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
    } else {
      if (response.response) dispatch(setError(response.response.data.message));
      else dispatch(setError("An unknown error occured!"));
    }
    dispatch(setSubmitting(false));
  };

  return { handleSubmit };
}

export default useStaff;
