import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, FlatList } from "react-native";
import { Card, Button, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const listings = [
    {
      id: "1",
      title: "Used Books Set",
      desc: "Engineering books in good condition.",
      image: "https://apollo.olx.in/v1/files/ro7gqfjtdti22-IN/image",
      price: 499,
    },
    {
      id: "2",
      title: "Guitar for Sale",
      desc: "Acoustic guitar perfect for beginners.",
      image:
        "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VpdGFyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      price: 2999,
    },
    {
      id: "3",
      title: "Laptop Bag",
      desc: "Durable and stylish bag for students.",
      image:
        "https://rukminim2.flixcart.com/image/480/640/xif0q/backpack/r/m/6/6-usb-point-laptop-bag-used-widely-in-all-kinds-of-official-original-imahcd2ngjukzmzw.jpeg?q=90",
      price: 899,
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <></>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Title title={item.title} subtitle={`₹${item.price}`} />
            <Card.Content>
              <Text style={{ color: "#8B0000" }}>{item.desc}</Text>
            </Card.Content>
            <Card.Actions>
              <Button textColor="#8B0000">View</Button>
              <Button textColor="#8B0000">♡</Button>
              <Button textColor="#8B0000">Add</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    overflow: "hidden",
  },
});
