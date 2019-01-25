import React, { Component } from "react";
import { View } from "react-native";
import HomeScreen from "./containers/HomeScreen";
import SignUp from "./containers/SignUp";
import RouterComponent from "./Router";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <RouterComponent />
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
