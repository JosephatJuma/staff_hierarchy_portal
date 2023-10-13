import React, { useState } from "react";
import { View } from "react-native";
import {
  List,
  Card,
  Avatar,
  Title,
  Text,
  Menu,
  IconButton,
} from "react-native-paper";

import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import {
  toggleShowDeleteModal,
  toggleShowEditModal,
  toggleShowViewModal,
  setSelectedStaff,
} from "../redux/slices/staffSlice";

function StaffCard(props) {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  const handleOpen = () => {
    setShowMenu(true);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  const deleteStaff = (staff) => {
    handleClose();
    dispatch(setSelectedStaff(staff));
    dispatch(toggleShowDeleteModal());
  };

  const editStaff = (staff) => {
    handleClose();
    dispatch(setSelectedStaff(staff));
    dispatch(toggleShowEditModal());
  };
  return (
    <Card>
      <View style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleOpen} size="small">
          <MaterialIcons name="more" />
        </IconButton>
      </View>

      <View>
        <Title variant="bodySmall">{props.staff.name}</Title>
        <Text variant="bodySmall">{props.staff.role}</Text>
        {props.staff.supervisor && (
          <Text variant="bodySmall">
            Supervided by: {props.staff.supervisor.name}
          </Text>
        )}
        <Text variant="bodySmall">
          Subordinates: {props.staff.subordinates.length}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
        <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
        <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
      </View>
      {/* <Menu
        id="action-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => editStaff(props.staff)}>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          Edit
        </MenuItem>

        <MenuItem onClick={() => deleteStaff(props.staff)}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu> */}
    </Card>
  );
}

export default StaffCard;
