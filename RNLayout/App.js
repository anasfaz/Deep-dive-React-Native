import { StyleSheet, Text, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={{ backgroundColor: "plum",flex:1 }}>
    //   <View>
    //     <Text>hello</Text>
    //   </View>
    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#DCFFB7" }}>BOX 1</Box>
      <Box style={{ backgroundColor: "#FF6868", }}>BOX 2</Box>
      <Box style={{ backgroundColor: "#FFBB64", }}>BOX 3</Box>
      {/* <Box style={{ backgroundColor: "#FFEAA7" }}>BOX 4</Box>
      <Box style={{ backgroundColor: "#DCFFB7" }}>BOX 5</Box>
      <Box style={{ backgroundColor: "#3652AD" }}>BOX 6</Box>
      <Box style={{ backgroundColor: "#E9F6FF" }}>BOX 7</Box>
      <Box style={{backgroundColor:"#030637"}}>BOX 8</Box> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderColor: "red",
    borderWidth: 10,
  },
});
