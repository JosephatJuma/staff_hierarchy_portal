import React, { useState } from "react";
import { Card, Text, Title, IconButton } from "react-native-paper";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { View, FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";
const TreeView = ({ data }) => {
  const [open, setOpen] = useState([]);

  const toggleNode = (node) => {
    if (open.includes(node.id)) {
      setOpen(open.filter((item) => item !== node.id));
    } else {
      setOpen([...open, node.id]);
    }
  };

  const renderNode = (node, level) => {
    const paddingLeft = 20 * level; // Indentation for hierarchy levels

    return (
      <View style={{ paddingLeft }}>
        <Card
          onPress={() => toggleNode(node)}
          style={{
            padding: 8,
            margin: 2,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text variant="titleSmall">{node.name}</Text>
          <Text>{node.role}</Text>

          {node.subordinates && node.subordinates.length > 0 && (
            <MaterialIcons
              name={open.includes(node.id) ? "expand-less" : "expand-more"}
              size={40}
            />
          )}
        </Card>
        {open.includes(node.id) &&
          node.subordinates &&
          node.subordinates.length > 0 && (
            <FlatList
              data={node.subordinates}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => renderNode(item, level + 1)}
              estimatedItemSize={50}
            />
          )}
      </View>
    );
  };

  return (
    <View style={{ width: "99%", flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderNode(item, 0)}
      />
    </View>
  );
};

export default TreeView;
