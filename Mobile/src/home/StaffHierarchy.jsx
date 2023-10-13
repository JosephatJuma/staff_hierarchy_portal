import React from "react";
import TreeView from "./TreeView";
import { useSelector } from "react-redux";
import useStaff from "../api/hooks/useStaff";
import { Text, Title } from "react-native-paper";
import { View } from "react-native";
function StaffHierarchy() {
  const { fetchHierarchy } = useStaff();
  const staffMembers = useSelector((state) => state.staff.staffMembers);
  const staffHierarchy = useSelector((state) => state.staff.staffHierarchy);

  return (
    <>
      <Text variant="titleMedium" style={{ alignSelf: "center" }}>
        Staff Hierachy
      </Text>
      {/* Render the TreeView and pass the staffHierachy data as a prop */}
      {staffHierarchy.length > 0 ? (
        <TreeView data={staffHierarchy} />
      ) : (
        <Text>Notging</Text>
      )}
    </>
  );
}

export default StaffHierarchy;
