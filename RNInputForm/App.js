import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
  Button,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({})
  const validationForm = () => {
    let errors = {}
    if (!userName) errors.username = 'Username is required'
    if (!password) errors.password = 'password is required'
    
    return Object.keys(errors).length === 0;


  }
  return (
    <KeyboardAvoidingView behavior="padding"
      keyboardVerticalOffset={200}
      style={styles.container}>
      <View style={styles.form}>
        <Image
          style={styles.image}
          source={require("./assets/adaptive-icon.png")}
        />
        <Text style={styles.text}>UserName</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChange={(val) => setUserName(val)}
          placeholder="Enter your userName"
        />
        {errors.username ? <Text style={styles.errors}> {errors.username}</Text>:null}
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChange={(val) => setPassword(val)}
          placeholder="Enter you Password"
          secureTextEntry
        />
        {errors.password ? <Text style={styles.errors}> {errors.password}</Text>:null}
        <Button title="Login" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  image: {
    height: 400,
    width: 200,
    alignSelf: "center",
    marginTop: 50,
  },
  errors: {
    color: 'yellow',
    padding: 3,
    marginBottom:2,

  }
});
