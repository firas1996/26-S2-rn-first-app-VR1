import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyName from "./src/components/MyName";
import { useState } from "react";
import Login from "./src/screens/Login";

export default function App() {
  const name = "Firas";
  const [z, setZ] = useState("");
  const getData = (data) => {
    setZ(data);
  };
  return (
    <View style={styles.container}>
      {/* <Text>Hello, {z} </Text>
      <MyName name={name} getData={getData} />
      <StatusBar style="auto" /> */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
