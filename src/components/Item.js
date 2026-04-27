import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import ItemsStore from "../store/itemsContext";

const Item = ({ data }) => {
  const { editItem } = useContext(ItemsStore);
  return (
    <View style={styles.item}>
      <Text style={styles.txt}>{data.item.title}</Text>
      <TouchableOpacity
        onPress={() => {
          editItem(data.item.id);
        }}
      >
        <Ionicons
          name={data.item.isFav ? "heart" : "heart-outline"}
          size={32}
          color={data.item.isFav ? "red" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "darkblue",
    marginVertical: 6,
    height: 48,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  txt: {
    color: "white",
    fontSize: 18,
  },
});
