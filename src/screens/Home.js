import {
  Button,
  FlatList,
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
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (inp.trim().length) {
      setItems([...items, { title: inp, isFav: false, id: Math.random() }]);
    }
    setInp("");
  };
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
        <TouchableOpacity style={styles.btn} onPress={addItem}>
          <Text style={styles.btnTxT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vList}>
        <FlatList
          data={items}
          renderItem={(data) => {
            return <Item data={data} />;
          }}
        />
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
