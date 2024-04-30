import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function TestApp() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  getRestaurants = async () => {
    if (type === "" || city === "") {
      return;
    }

    const apiUrl = "http://10.204.166.65:5000/api/get";

    console.log(apiUrl);

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city: city, type: type }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.places);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>See Restaurants in Your Area!</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(inputText) => setCity(inputText)}
        onBlur={getRestaurants}
        value={city}
        placeholder="Enter City Desired"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(inputText) => setType(inputText)}
        onBlur={getRestaurants}
        value={type}
        placeholder="Enter Type Desired"
      />
      {data && (
        <FlatList
          ItemSeparatorComponent={() => (
            <View style={{ height: 0.5, backgroundColor: "black" }} />
          )}
          data={data}
          renderItem={({ item }) => (
            <>
              <Text>Name: {item.name}</Text>
              <Text>Rating: {item.rating}</Text>
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 200,
  },
});
