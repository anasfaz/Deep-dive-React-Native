import { View, Text } from "react-native";

export default function Greet({ name }) {
  return (
    <View>
          <Text style={{color:'red',alignContent:'center'}}>Hello  {name}</Text>
    </View>
  );
}
