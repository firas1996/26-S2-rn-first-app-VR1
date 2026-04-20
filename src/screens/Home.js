import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MyName from "../components/MyName";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.vAdd}>
        <TextInput style={styles.inp} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vList}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 25,
  },
  vAdd: {
    // backgroundColor: "red",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-evenly",
  },
  vList: {
    // backgroundColor: "blue",
    flex: 7,
    width: "100%",
    alignItems: "flex-start",
    padding: 25,
  },
  inp: {
    borderWidth: 1,
    borderColor: "gray",
    height: 45,
    flex: 5,
    marginLeft: 16,
    borderRadius: 25,
    padding: 5,
    fontSize: 16,
  },
  btn: {
    flex: 1,
    backgroundColor: "purple",
    margin: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  btnTxT: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
