import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MyName from "../components/MyName";
import Item from "../components/Item";

const Home = () => {
  const navigation = useNavigation();
  const [inp, setInp] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.vAdd}>
        <TextInput
          style={styles.inp}
          onChangeText={(txt) => {
            setInp(txt);
          }}
          value={inp}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vList}>
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
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
    alignItems: "center",
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
    padding: 10,
  },
  btnTxT: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
