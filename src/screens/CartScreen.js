import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { AppContext } from "../contexts/AppProvider";
import { Button, Card, Divider } from "react-native-paper";

export default function CartScreen() {
  const { state, dispatch } = useContext(AppContext);
  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  const renderItem = ({ item }) => (
    <Card style={styles.card} mode="elevated">
      <Card.Cover source={{ uri: item.image }} style={styles.image} />
      <Card.Title
        title={item.title}
        titleNumberOfLines={2}
        subtitle={`₹${item.price.toFixed(2)}`}
        subtitleStyle={styles.subtitle}
      />
      <Card.Actions>
        <Button
          textColor="#8B0000"
          icon="delete-outline"
          onPress={() =>
            dispatch({ type: "removeFromCart", payload: item.id })
          }
        >
          Remove
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {state.cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🛒</Text>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Text style={styles.emptySubText}>Add some products to begin!</Text>
        </View>
      ) : (
        <>
          <Text style={styles.header}>Your Cart</Text>
          <FlatList
            data={state.cart}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />

          <Divider style={{ marginVertical: 10 }} />

          <View style={styles.footer}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalAmount}>₹{total.toFixed(2)}</Text>
            <Button
              mode="contained"
              buttonColor="#8B0000"
              textColor="#FFFFFF"
              style={styles.checkoutBtn}
              onPress={() => console.log("Checkout pressed")}
            >
              Checkout (UI only)
            </Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#8B0000",
    textAlign: "center",
    marginVertical: 15,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 100,
  },
  card: {
    marginBottom: 12,
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
  footer: {
    padding: 20,
    borderTopWidth: 0.5,
    borderColor: "#ccc",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 16,
    color: "#555",
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8B0000",
    marginVertical: 8,
  },
  checkoutBtn: {
    borderRadius: 8,
    marginTop: 8,
    width: "90%",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#8B0000",
  },
  emptySubText: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
});
