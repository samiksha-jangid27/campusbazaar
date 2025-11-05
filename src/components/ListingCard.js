import React from "react";
import { Card, Button } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function ListingCard({ item, onPress, onFavorite, isFav, onCart }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Title title={item.title} subtitle={`₹${item.price}`} />
      <Card.Actions>
        <Button onPress={onPress} textColor="#8B0000">View</Button>
        <Button onPress={onFavorite} textColor="#8B0000">
          {isFav ? "♥" : "♡"}
        </Button>
        <Button onPress={onCart} textColor="#8B0000">Add</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 10, backgroundColor: "#FFFFFF" },
});
