import React from "react";
import TreeView from "./TreeView";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import NoStaffFound from "../components/NoStaffFound";
function StaffHierarchy() {
  const staffMembers = useSelector((state) => state.staff.staffMembers);
  const staffHierarchy = useSelector((state) => state.staff.staffHierarchy);

  return (
    <Container>
      <Typography>Staff Hierachy</Typography>
      {/* Render the TreeView and pass the staffHierachy data as a prop */}
      {staffHierarchy.length > 0 ? (
        <TreeView data={staffHierarchy} />
      ) : (
        <NoStaffFound message="There is no Hierachy to show!" />
      )}
    </Container>
  );
}

export default StaffHierarchy;
