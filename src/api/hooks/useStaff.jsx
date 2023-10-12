import React from "react";
import ApiClient from "../apiClient";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  toggleShowAddModal,
  setLoading,
  setSubmitting,
} from "../../redux/slices/staffSlice";

function useStaff() {
  const apiClient = new ApiClient();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    dispatch(setSubmitting(true));
    const response = await apiClient.postStaff(values);
    if (response.status === 201) {
      console.log(response.data);
    } else {
      if (response) dispatch(setError(response.response.data.message));
      else dispatch(setError("An unknown error occured!"));
    }
    dispatch(setSubmitting(false));
  };

  return { handleSubmit };
}

export default useStaff;
