import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}> welcome</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
const windowWidth = Dimensions;
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    padding: 20,
    // width: 300,
    // height: 300,
    // backgroundColor: "lightblue",
    // alignItems: 'center',
    // justifyContent:'center',
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});
