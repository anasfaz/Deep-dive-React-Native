import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#ffd700", emoji: "⚡" };
    case "water":
      return { borderColor: "#649ea", emoji: "💧" };
    case "fire":
      return { borderColor: "#ff5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66cc66", emoji: "🌿" };
    default:
      return { borderColor: "#a0a0a0", emoji: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={image}
        accessibilityLabel={`${name} pokemon`}
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves:{moves.join(",")}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>Weakness:{weaknesses.join(",")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5, //for shadow effect
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      borderWidth:4,
    },
    typeEmoji: {
        fontSize: 30,
        marginRight:12,
    },
    typeText: {
        fontSize: 22,
        fontWeight:'bold'
    },
    movesContainer: {
        marginBottom: 16,
        
    },
    movesText: {
        fontSize: 22,
        fontWeight:'bold'
    },
    weaknessContainer: {
        marginBottom:8,
    },
    weaknessText: {
        fontSize: 22,
        fontWeight:'bold'
    }
});
