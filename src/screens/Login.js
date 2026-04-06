import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Login = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.title}>Login</Text>
      <View style={styles.container}>
        <View style={styles.inpC}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.inp} />
        </View>
        <View style={styles.inpC}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.inp} />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxT}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cccccc98",
    width: "70%",
    height: "35%",
    borderRadius: 12,
    padding: 12,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inpC: {
    height: "25%",
  },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  inp: {
    borderColor: "#999999",
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    padding: "5",
  },
  btn: {
    backgroundColor: "lightblue",
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 12,
  },
  btnTxT: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
