import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyName from "./src/components/MyName";
import { useState } from "react";
import Login from "./src/screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavItems from "./src/screens/FavItems";
import { ItemsProvider } from "./src/store/itemsContext";
import Register from "./src/screens/Register";

export default function App() {
  const name = "Firas";
  const [z, setZ] = useState("");
  const getData = (data) => {
    setZ(data);
  };
  const BTabs = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <ItemsProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 36,
              fontFamily: "Georgia",
              fontWeight: 300,
            },
          }}
        >
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Fav" component={FavItems} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ItemsProvider>
  );
}

const styles = StyleSheet.create({});
