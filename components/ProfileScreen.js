import React, { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator, FlatList } from "react-native";

function ProfileScreen({ navigation, route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setdata(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);

  return (
    <View>
      <Text>Entered Username is: {route.params.text}</Text>
      <Text>Entered Password is: {route.params.pass}</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}

      <Button
        title={"Scroll View"}
        onPress={() => navigation.navigate("Scroll")}
      />
    </View>
  );
}

export default ProfileScreen;
