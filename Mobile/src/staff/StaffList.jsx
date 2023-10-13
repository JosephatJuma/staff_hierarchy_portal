import { View, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";

import {
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
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowDeleteModal,
  toggleShowEditModal,
  toggleShowViewModal,
  setSelectedStaff,
} from "../redux/slices/staffSlice";
const StaffList = (props) => {
  const dispatch = useDispatch();
  const staffMembers = useSelector((state) => state.staff.userList);

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
    <View style={{ flex: 1, width: "100%" }}>
      <FlashList
        renderItem={({ item }) => {
          return (
            <Card
              style={{
                margin: 2,
                padding: 10,
                borderRadius: 1,
                minWidth: "48%",
                boxShadow: "0px 2px 8px #72c1c6",
                justifyContent: "center",
                height: 220,
              }}
            >
              <Avatar.Icon size={80} icon="account" />
              <Title variant="bodySmall">{item.name}</Title>
              <Text variant="bodySmall">Role: {item.role}</Text>
              <Text variant="bodySmall">
                Subordinates: {item.subordinates.length}
              </Text>
              {item.supervisor && (
                <Text variant="bodySmall">
                  Supervided by: {item.supervisor.name}
                </Text>
              )}
            </Card>
          );
        }}
        estimatedItemSize={50}
        data={staffMembers}
        numColumns={2}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        onEndReachedThreshold={5}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default StaffList;
