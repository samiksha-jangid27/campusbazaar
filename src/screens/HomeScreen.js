import React , {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, FlatList, View } from "react-native";
import { Appbar, Card, Button, TextInput, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

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

      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" color="#fff" onPress={() => {}} size={22} />
        <Appbar.Content title="Campus Bazaar" titleStyle={styles.title} />
        <Appbar.Action icon="magnify" color="#fff" onPress={() => {}} size={22} />
      </Appbar.Header>

      <View style={styles.searchWrapper}>
        <TextInput
          mode="outlined"
          placeholder="Search items near you..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
          left={<TextInput.Icon icon="magnify" color="#8B0000" />}
          outlineColor="#eee"
          activeOutlineColor="#8B0000"
        />
      </View>

      <FlatList
        data={listings.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10, paddingTop: 10 }}
        renderItem={({ item }) => (
          <Card style={styles.card} mode="elevated" elevation={3}>
            <View style={styles.cardInner}>
              <Card.Cover source={{ uri: item.image }} style={{borderRadius:20}}/>
              <Card.Title title={item.title} subtitle={`₹${item.price}`} />
              <Card.Content>
                <Text style={{ color: "#8B0000" }}>{item.desc}</Text>
              </Card.Content>
              <Card.Actions>
                <Button textColor="#8B0000">View</Button>
                <Button textColor="white">Wishlist</Button>
                <Button textColor="white">Add To Cart</Button>
              </Card.Actions>
            </View>
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
  header: {
    backgroundColor: "#8B0000",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,

  },
  searchWrapper: {
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },
  searchInput: {
    backgroundColor: "#fff",
    fontSize: 14,
    height: 40,
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#f8f8f8",
    borderRadius:20
  },
  cardInner: {
    overflow: "hidden",
  },
});
