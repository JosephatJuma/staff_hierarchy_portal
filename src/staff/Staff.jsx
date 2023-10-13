import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import StaffCard from "../components/StaffCard";
import LoadingComponent from "../components/LoadingComponent";

function Staff() {
  const userList = useSelector((state) => state.staff.userList);
  const loading = useSelector((state) => state.staff.loading);

  const loadingRender = {
    true: <LoadingComponent />,
    false: (
      <Grid container spacing={2}>
        {userList.map((staff) => (
          <StaffCard key={staff.id} staff={staff} />
        ))}
      </Grid>
    ),
  }[loading];
  return <>{loadingRender}</>;
}

export default Staff;
