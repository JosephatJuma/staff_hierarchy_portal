import React from "react";
import TreeView from "./TreeView";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
function StaffHierarchy() {
  const staffMembers = useSelector((state) => state.staff.staffMembers);
  const staffHierarchy = useSelector((state) => state.staff.staffHierarchy);

  return (
    <Container>
      <Typography>Staff Hierachy</Typography>
      <TreeView data={staffHierarchy} />
      {/* Render the TreeView and pass the treeData as a prop */}
    </Container>
  );
}

export default StaffHierarchy;
