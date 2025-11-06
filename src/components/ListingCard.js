import React from "react";
import { Card, Button, IconButton } from "react-native-paper";
import { StyleSheet, View, Text} from "react-native";

export default function ListingCard({ item, onPress, onFavorite, isFav, onCart }) {
  return (
    <Card style={styles.card} mode="elevated">
      <Card.Cover source={{ uri: item.image }} style={styles.image} />
      <Card.Title
        title={item.title}
        subtitle={`₹${item.price.toFixed(2)}`}
        titleNumberOfLines={1}
        subtitleStyle={styles.subtitle}
      />
      <Card.Content>
          <Text numberOfLines={2} style={styles.description}>
            {item.desc}
          </Text>
        </Card.Content>

      <Card.Actions style={styles.actions}>
        <Button
          onPress={onPress}
          textColor="#8B0000"
          mode="text"
          compact
        >
          View
        </Button>

        <IconButton
          icon={isFav ? "heart" : "heart-outline"}
          iconColor={isFav ? "#8B0000" : "#8B0000"}
          size={22}
          onPress={onFavorite}
        />

        <Button
          onPress={onCart}
          textColor="#FFFFFF"
          buttonColor="#8B0000"
          mode="contained"
          compact
        >
          Add
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 150,
    resizeMode: "cover",
  },
  subtitle: {
    color: "#555",
  },
  actions: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
});
