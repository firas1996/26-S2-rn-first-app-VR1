import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Item = () => {
  return (
    <View style={styles.item}>
      <Text style={styles.txt}>Item</Text>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={24} color="white" />
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
    width: "90%",
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
