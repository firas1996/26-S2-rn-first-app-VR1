import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
/////////////////////////////////////////////////////////////
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../../Firebase";
import "firebase/firestore";
/////////////////////////////////////////////////////////////

const Register = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    email: "testapi@gmail.com",
    password: "user1234",
  });
  // useEffect(() => {
  //   console.log("effect");
  //   return () => {
  //     console.log("cleanUp");
  //   };
  // }, [userData]);
  const handelChange = (txt, name) => {
    setUserData({ ...userData, [name]: txt });
  };
  const registerHandler = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User Created: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "-", errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.containerr}>
        <View style={styles.inpC}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inp}
            onChangeText={(txt) => {
              handelChange(txt, "email");
            }}
            value={userData.email}
          />
        </View>
        <View style={styles.inpC}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inp}
            onChangeText={(txt) => {
              handelChange(txt, "password");
            }}
            value={userData.password}
          />
        </View>

        <TouchableOpacity onPress={registerHandler} style={styles.btn}>
          <Text style={styles.btnTxT}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerr: {
    backgroundColor: "#f40f0f98",
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
