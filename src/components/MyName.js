import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MyName = () => {
  const test = "World !";
  const navigation = useNavigation();
  return (
    <Button
      title="Go TO Login"
      onPress={() => {
        navigation.navigate("Login");
      }}
    />
  );
};

export default MyName;

const styles = StyleSheet.create({});
