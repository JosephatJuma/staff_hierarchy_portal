import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import StaffCard from "../components/StaffCard";
import LoadingComponent from "../components/LoadingComponent";
import NoStaffFound from "../components/NoStaffFound";
import useStaff from "../api/hooks/useStaff";
function Staff() {
  const userList = useSelector((state) => state.staff.userList);
  const loading = useSelector((state) => state.staff.loading);
  const { handleFetch } = useStaff();

  const loadingRender = {
    true: <LoadingComponent />,
    false: (
      <>
        {userList.length > 0 ? (
          <Grid container spacing={2}>
            {userList.map((staff) => (
              <StaffCard key={staff.id} staff={staff} />
            ))}
          </Grid>
        ) : (
          <NoStaffFound
            message="There is no staff to show!"
            refresh={handleFetch}
          />
        )}
      </>
    ),
  }[loading];
  return <>{loadingRender}</>;
}

export default Staff;
