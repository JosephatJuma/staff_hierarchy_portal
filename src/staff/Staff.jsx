import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import StaffCard from "../components/StaffCard";

function Staff() {
  const userList = useSelector((state) => state.staff.userList);
  return (
    <Grid container spacing={2}>
      {userList.map((staff) => (
        <StaffCard key={staff.id} staff={staff} />
      ))}
    </Grid>
  );
}

export default Staff;
