import React from "react";
import { StyleSheet, View, TabBarIOS, Dimensions } from "react-native";
import PostList from "../components/Post/PostList";
import NavigationBar from "../components/Bars/NavigationBar";

export default class HomeScreen extends React.Component {
  render() {
    const { width } = Dimensions.get("window");
    return (
      <View>
        <PostList />
        {/* <TabBarIOS /> */}
      </View>
    );
  }
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#fff",
    width: width
  }
});
