import { View, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";

import {
  Card,
  Avatar,
  Title,
  Text,
  IconButton,
  Button,
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
  setSelectedStaff,
} from "../redux/slices/staffSlice";
import useStaff from "../api/hooks/useStaff";

import { useNavigation } from "@react-navigation/native";
const StaffList = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const staffMembers = useSelector((state) => state.staff.userList);
  const { handleFetch } = useStaff();

  const deleteStaff = (staff) => {
    dispatch(setSelectedStaff(staff));
    dispatch(toggleShowDeleteModal());
  };

  const editStaff = (staff) => {
    dispatch(setSelectedStaff(staff));
    navigation.navigate("Edit");
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlashList
        refreshControl={
          <RefreshControl
            onRefresh={handleFetch}
            size="default"
            title="Relaoding"
          />
        }
        renderItem={({ item }) => {
          return (
            <Card
              style={{
                margin: 2,
                padding: 10,
                borderRadius: 1,
                width: "98%",
                boxShadow: "0px 2px 8px #72c1c6",
                justifyContent: "center",
                alignItems: "center",
                height: 300,
              }}
            >
              <Avatar.Icon size={80} icon="account" />
              <Text variant="titleMedium">{item.name}</Text>
              <Text variant="titleSmall">Role: {item.role}</Text>
              <Text variant="titleSmall">
                Subordinates: {item.subordinates.length}
              </Text>
              {item.supervisor && (
                <Text variant="titleSmall">
                  Supervided by: {item.supervisor.name}
                </Text>
              )}
              <View
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <IconButton
                  icon="account-edit"
                  mode="outlined"
                  onPress={() => editStaff(item)}
                />
                <IconButton
                  icon="delete"
                  mode="outlined"
                  onPress={() => deleteStaff(item)}
                />
              </View>
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
