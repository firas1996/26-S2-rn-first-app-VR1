import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MyName = ({ name, getData }) => {
  const test = "World !";
  getData(test);
  return <Text>{name}</Text>;
};

export default MyName;

const styles = StyleSheet.create({});
