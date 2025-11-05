import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {View, FlatList, Text, StyleSheet } from "react-native";
import { AppContext } from "../contexts/AppProvider";

export default function FavoritesScreen({ navigation }) {
  const { state, dispatch } = useContext(AppContext);
  const favListings = state.listings.filter((l) =>
    state.favorites.includes(l.id)
  );

  return (
    <SafeAreaView style={styles.safe}>
      {favListings.length === 0 ? (
        <View style={styles.favempty}>
          <Text style={styles.empty}>No favorites yet ❤️</Text>
        </View>

      ) : (
        <FlatList
          data={favListings}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ListingCard
              item={item}
              onPress={() => navigation.navigate("Details", { id: item.id })}
              onFavorite={() =>
                dispatch({ type: "toggleFavorite", payload: item.id })
              }
              isFav
              onCart={() => dispatch({ type: "addToCart", payload: item })}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  list: { padding: 10, paddingBottom: 20 },
  empty: { textAlign: "center", marginTop: 50, fontSize: 16, color: "#8B0000" },
  favempty : {flex:1, alignItems:"center", justifyContent: "center"}
});
