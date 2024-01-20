import { View, Text, StyleSheet } from "react-native";

//we can style different way
//one way inline Styling
//another wau StyleSheet API

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box,styles.lightblueBg,styles.boxShadow]}>
        <Text>LIGHT BLUE</Text>
      </View>
      <View style={[styles.box,styles.lightgreenBg,styles.boxShadow]}>
        <Text>LIGHT GREEN</Text>
      </View>
    </View>
  );
}
//styling multiple using array syntax
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: { width: '50%', height: '25%', padding: 20 },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height:6
    },
    shadowOpacity: 0.6,
    shadowRadius:4,
  },
});
