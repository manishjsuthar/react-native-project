import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  Button,
  Linking,
  Alert,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container2: {
    alignItems: "center",
  },
  container3: {
    width: 270,
    marginTop: 30,
    marginLeft: 65,
  },
  container4: {
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    color: "white",
    padding: 10,
    width: 150,
    left: 70,
    textAlign: "center",
    backgroundColor: "blue",
    borderRadius: 35,
  },
  button2: {
    marginTop: 10,
    padding: 10,
    width: 150,
    left: 70,
    textAlign: "center",
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 35,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 2,
  },
});

const image = { uri: "https://reactjs.org/logo-og.png" };

function HomeScreen({ navigation }) {
  const [text, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  function myfunc() {
    if ((text.toUpperCase() === "MANISH") & (pass === "12345")) {
      navigation.navigate("Profile", { text: text, pass: pass });
    } else {
      Alert.alert("Please enter valid username and password");
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container2}>
          <Image style={styles.tinyLogo} source={image} />
        </View>

        <View style={styles.container3}>
          <Text>Username</Text>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder={"Enter Username"}
            style={styles.input}
          />
          <Text>Password</Text>
          <TextInput
            onChangeText={onChangePass}
            value={pass}
            secureTextEntry
            placeholder={"Enter Password"}
            style={styles.input}
          />
          <View style={styles.container4}>
            <TouchableOpacity onPress={() => myfunc()}>
              <Text style={styles.button}>SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity
            //   onPress={() => Linking.openURL("http://google.com")}
            >
              <Text style={styles.button2}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;
