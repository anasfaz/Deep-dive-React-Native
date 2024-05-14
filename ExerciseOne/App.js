import { StyleSheet, View,SafeAreaView,Platform,ScrollView } from "react-native";
import PokemonCard from './components/PokemonCard'
export default function App() {

  const charmanderData = {
    name: "Charmander",
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses:['water','Rock']
  }
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  }
  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...charmanderData} />
      <PokemonCard {...squirtleData} />
      <PokemonCard {...bulbasaurData} />
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop:Platform.OS === 'android' ? 25 : 0
  },
});
