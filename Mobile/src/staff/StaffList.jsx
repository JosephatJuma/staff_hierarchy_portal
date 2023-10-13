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

  const renderStaff = ({ member }) => {
    return (
      <Card
        style={{
          margin: 5,
          flex: 1,
          padding: 10,
          borderRadius: 1,
          minWidth: "45%",
          boxShadow: "0px 2px 8px #72c1c6",
          alignContent: "center",
        }}
      >
        <Avatar.Icon size={100} icon="account" />

        <Title variant="bodySmall">{member.name}</Title>
        <Text variant="bodySmall">{member.role}</Text>
        {staff.supervisor && (
          <Text variant="bodySmall">
            Supervided by: {member.supervisor.name}
          </Text>
        )}
        <Text variant="bodySmall">Subordinates:</Text>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlashList
        // refreshControl={
        //   <RefreshControl
        //     onRefresh={onRefresh}
        //     size="default"
        //     title="Relaoding"
        //   />
        // }

        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        data={staffMembers}
        renderItem={renderStaff}
        keyExtractor={(member) => member.id}
        numColumns={2}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        onEndReachedThreshold={5}
        windowSize={5}
        removeClippedSubviews={true}
        estimatedItemSize={166}
      />
    </View>
  );
};

export default StaffList;
