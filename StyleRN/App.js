import { View, Text, StyleSheet } from 'react-native'

//we can style different way 
//one way inline Styling
//another wau StyleSheet API

export default function App() {
  return (
    <View style={styles.container}>
      <Text>StyleSheet API</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"plum",padding:60}
})