import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Modal,
  StatusBar,
  Alert,
} from "react-native";
import Greet from "./Greet";

const logoImg = require("./assets/adaptive-icon.png");

export default function app() {
  const [isVisible, setVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 60,
      }}
    >
      <Button
        title="press"
        onPress={() =>
          Alert.alert("invalid entry", "DOB is not valid", [
            {
              text: "ok",
              onPress: () => console.log("ok press"),
            },
            {
              text: "cancel",
              onPress: () => console.log("cancel Press "),
            },
          ])
        }
      />
      <Greet name='anas'/>
    </View>
  );
}
