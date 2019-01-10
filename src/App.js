import React from "react";
import { View } from "react-native";
import HomeScreen from "./containers/HomeScreen";
import SignUp from "./containers/SignUp";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SignUp />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
