import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Home from "./src/home/Home";
import Staff from "./src/staff/Staff";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import useStaff from "./src/api/hooks/useStaff";
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const {
    handleSubmit,
    handleFetch,
    handleDelete,
    fetchHierarchy,
    handleEdit,
  } = useStaff();

  useEffect(() => {
    handleFetch();
    fetchHierarchy();
  }, []);
  const HomeScreen = () => <Home />;
  const StaffScreen = () => <Staff />;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          nactiveColor="gray"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarAndroidRipple: { borderless: true },

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "Staff") {
                iconName = focused ? "group" : "group";
              }
              return <MaterialIcons name={iconName} size={25} color={color} />;
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Staff" component={StaffScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
