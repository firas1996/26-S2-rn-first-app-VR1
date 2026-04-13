import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyName from "./src/components/MyName";
import { useState } from "react";
import Login from "./src/screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";

export default function App() {
  const name = "Firas";
  const [z, setZ] = useState("");
  const getData = (data) => {
    setZ(data);
  };
  const BTabs = createBottomTabNavigator();

  return (
    <>
      {/* <Text>Hello, {z} </Text>
      <MyName name={name} getData={getData} />
      <StatusBar style="auto" /> */}
      {/* <Login /> */}
      <NavigationContainer>
        <BTabs.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 36,
              fontFamily: "Georgia",
              fontWeight: 300,
            },
          }}
        >
          <BTabs.Screen name="Login" component={Login} />
          <BTabs.Screen name="Home" component={Home} />
        </BTabs.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
